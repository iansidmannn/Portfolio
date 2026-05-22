import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Force dynamic — this is a runtime endpoint, never statically rendered.
export const dynamic = 'force-dynamic';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }
  return createClient(url, key);
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: CORS_HEADERS });
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let email = '';
    let source = 'landing';
    let honeypot = '';

    if (contentType.includes('application/json')) {
      const body = await req.json();
      email = String(body.email || '').trim();
      source = String(body.source || 'landing');
      honeypot = String(body.website || '');
    } else {
      const formData = await req.formData();
      email = String(formData.get('email') || '').trim();
      source = String(formData.get('source') || 'landing');
      honeypot = String(formData.get('website') || '');
    }

    // Honeypot bot trap — silently accept and drop
    if (honeypot) {
      return NextResponse.json({ ok: true }, { headers: CORS_HEADERS });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'invalid email' },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const supabase = getSupabase();
    const { error } = await supabase
      .from('waitlist')
      .insert({ email: email.toLowerCase(), source });

    if (error) {
      // 23505 = unique constraint violation (duplicate email).
      // Treat as success — idempotent signups.
      if (error.code === '23505') {
        return NextResponse.json({ ok: true, dup: true }, { headers: CORS_HEADERS });
      }
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { ok: false, error: 'storage error' },
        { status: 500, headers: CORS_HEADERS }
      );
    }

    return NextResponse.json({ ok: true }, { headers: CORS_HEADERS });
  } catch (err: any) {
    console.error('Waitlist route error:', err);
    return NextResponse.json(
      { ok: false, error: 'server error', detail: err?.message || String(err) },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
