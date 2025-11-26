# Deployment Guide

Your portfolio is ready to deploy! Here are your free hosting options:

## Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Next.js and deploy
7. Your site will be live in ~2 minutes!

**Pros:** Automatic deployments, free SSL, great performance, custom domain support

## Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up/login with GitHub
4. Click "Add new site" → "Import an existing project"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy site"

**Pros:** Free SSL, easy setup, good performance

## Option 3: Cloudflare Pages

**⚠️ IMPORTANT:** The project is now configured for static export. Make sure to push the updated `next.config.js` to GitHub.

**For easiest deployment, we recommend Vercel (Option 1) instead.**

If you want to use Cloudflare Pages:

1. **Push the updated config to GitHub:**
   ```bash
   git add next.config.js
   git commit -m "Configure for Cloudflare Pages static export"
   git push
   ```

2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Sign up/login
4. Click "Create a project" (or edit existing project)
5. Connect your GitHub repository
6. Build settings:
   - **Root directory:** `/` (leave empty - this means root)
   - **Framework preset:** "None" or "Static Site"
   - **Build command:** `npm run build`
   - **Build output directory:** `out` ⚠️ **Important: Use `out` not `.next`**
   - **Node version:** 18 or 20
7. Click "Save and Deploy"

**Note:** The `next.config.js` has been updated to use static export (`output: 'export'`), which creates an `out` folder that Cloudflare Pages can serve.

**If you still get errors:** See [CLOUDFLARE_FIX.md](./CLOUDFLARE_FIX.md) or switch to Vercel (much easier!)

**Pros:** Free, fast CDN, unlimited bandwidth

## Before Deploying

1. **Add your profile image:**
   - Add a file named `profile.jpg` to the `/public` folder
   - Then uncomment the Image import and usage in `components/Hero.tsx`

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to see your site

4. **Build test:**
   ```bash
   npm run build
   ```
   Make sure it builds without errors

## Custom Domain (Optional)

All three platforms support custom domains for free:
- Vercel: Settings → Domains → Add domain
- Netlify: Site settings → Domain management → Add custom domain
- Cloudflare: Pages → Your project → Custom domains → Set up

## Need Help?

- Check the README.md for development instructions
- All platforms have excellent documentation on their websites

