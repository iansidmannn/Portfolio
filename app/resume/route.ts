export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ian Sidman — Resume</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 11.5pt;
    color: #1a1a1a;
    background: #fff;
    line-height: 1.5;
    max-width: 780px;
    margin: 0 auto;
    padding: 52px 56px;
  }

  header {
    margin-bottom: 28px;
    padding-bottom: 18px;
    border-bottom: 1.5px solid #1a1a1a;
  }

  h1 {
    font-family: 'EB Garamond', serif;
    font-size: 26pt;
    font-weight: 500;
    letter-spacing: -0.5px;
    margin-bottom: 4px;
  }

  .tagline {
    font-family: 'DM Mono', monospace;
    font-size: 8.5pt;
    color: #555;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .contact {
    font-family: 'DM Mono', monospace;
    font-size: 8pt;
    color: #444;
    letter-spacing: 0.3px;
  }

  .contact a { color: #444; text-decoration: none; }
  .contact span { margin: 0 8px; color: #ccc; }

  section { margin-bottom: 24px; }

  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 7.5pt;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #888;
    margin-bottom: 12px;
    padding-bottom: 4px;
    border-bottom: 0.5px solid #e0e0e0;
  }

  .role { margin-bottom: 18px; }

  .role-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }

  .role-title { font-weight: 500; font-size: 12pt; }

  .role-date {
    font-family: 'DM Mono', monospace;
    font-size: 8pt;
    color: #888;
  }

  .role-company {
    font-style: italic;
    color: #444;
    font-size: 11pt;
    margin-bottom: 6px;
  }

  .role-bullets { list-style: none; padding: 0; }

  .role-bullets li {
    padding-left: 14px;
    position: relative;
    margin-bottom: 3px;
    font-size: 11pt;
    line-height: 1.55;
  }

  .role-bullets li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #aaa;
    font-size: 10pt;
  }

  .stat {
    font-family: 'DM Mono', monospace;
    font-size: 8.5pt;
    font-weight: 500;
    color: #1a1a1a;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 40px;
  }

  .skills-list { list-style: none; padding: 0; }

  .skills-list li {
    font-size: 11pt;
    padding: 2px 0;
    border-bottom: 0.5px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
  }

  .skills-list li span {
    font-family: 'DM Mono', monospace;
    font-size: 8pt;
    color: #888;
    align-self: center;
  }

  .education-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
  }

  .edu-school { font-weight: 500; }
  .edu-degree { font-style: italic; color: #555; font-size: 10.5pt; }
  .edu-date {
    font-family: 'DM Mono', monospace;
    font-size: 8pt;
    color: #888;
  }

  @media print {
    body { padding: 36px 44px; }
    h1 { font-size: 22pt; }
  }
</style>
</head>
<body>

<header>
  <h1>Ian Sidman</h1>
  <div class="tagline">Growth · Organic Distribution · D2C</div>
  <div class="contact">
    Thousand Oaks, CA
    <span>·</span>
    <a href="https://iansidman.com">iansidman.com</a>
    <span>·</span>
    <a href="https://linkedin.com/in/ian-sidman">linkedin.com/in/ian-sidman</a>
  </div>
</header>

<section>
  <div class="section-label">Profile</div>
  <p style="font-size: 11pt; line-height: 1.6;">
    I read cultural signals at the consumer level and work backwards to build. At Piñata Farms I identified a viral prank creating poorly met search demand, got product to build the feature, then made tutorials now ranking #1 on TikTok search — capturing <span class="stat">~500 downloads/day and ~$900 daily revenue</span>, solo. Before Piñata, I killed my first clothing brand to chase a gap in Gen Z humor apparel and scaled it to $4K profit/month in 3 months. Then took 9 stuck brands past their first 100K view videos by creating content that actually fit the culture they were selling into. Before that: grew my TikTok to 60K, set the USA bench press national record at 17. Still the same obsession, just a different arena.
  </p>
</section>

<section>
  <div class="section-label">Experience</div>

  <div class="role">
    <div class="role-header">
      <div class="role-title">Growth Lead</div>
      <div class="role-date">Dec 2025 – Present</div>
    </div>
    <div class="role-company">Piñata Farms AI · Culver City, CA · On-site</div>
    <ul class="role-bullets">
      <li>Identified a search demand gap, briefed product to build the feature, launched tutorials now ranking <span class="stat">#1 on TikTok search at 4% CVR</span> — drove <span class="stat">+300% App Store search lift</span>.</li>
      <li>Built organic funnel to <span class="stat">~$900/day revenue</span>, solo. Currently scaling.</li>
      <li>Validated creator collab economics before scaling paid spend.</li>
      <li>Scaled from zero to <span class="stat">35K+ downloads & 60M views</span> across 5 channels.</li>
      <li>Framework generates <span class="stat">30M views/month and $8K/month</span> without my daily involvement.</li>
      <li>Content featured by multiple NFL & NBA teams.</li>
    </ul>
  </div>

  <div class="role">
    <div class="role-header">
      <div class="role-title">Founder</div>
      <div class="role-date">Apr 2023 – Dec 2025</div>
    </div>
    <div class="role-company">SocialLab · Growth Consulting · Eugene, OR</div>
    <ul class="role-bullets">
      <li>Diagnosed why <span class="stat">9 stuck brands'</span> content wasn't connecting — took each past 100K views per video.</li>
      <li>Led team of <span class="stat">7</span> on AI content product, killed it after early bad signals, pivoted to consulting.</li>
    </ul>
  </div>

  <div class="role">
    <div class="role-header">
      <div class="role-title">Content</div>
      <div class="role-date">Dec 2023 – Dec 2025</div>
    </div>
    <div class="role-company">Hype Ventures · Part-time · Simi Valley, CA</div>
    <ul class="role-bullets">
      <li>Produced the best-performing organic content for one of their brands — offered a content manager role for a team with 1B+ combined views.</li>
    </ul>
  </div>

  <div class="role">
    <div class="role-header">
      <div class="role-title">Founder</div>
      <div class="role-date">Dec 2022 – Apr 2023</div>
    </div>
    <div class="role-company">Goofy Garments · Gen Z D2C Apparel · Eugene, OR</div>
    <ul class="role-bullets">
      <li>Spotted poorly met demand for Gen Z humor apparel — built what was missing, launched out of my college dorm.</li>
      <li>Hit <span class="stat">2.5M views and ~$2K profit</span> in the first 2 weeks. Scaled to <span class="stat">$4K profit/month within 3 months</span>, then exited.</li>
      <li>Single video: <span class="stat">5.8M views, 282K shares, $5K direct revenue, 193 new customers</span>. Demand outran production — moved to manufacturers.</li>
    </ul>
  </div>

</section>

<section>
  <div class="section-label">Selected Metrics</div>
  <div class="two-col">
    <ul class="skills-list">
      <li>Attributed revenue <span>~$200K</span></li>
      <li>Daily revenue (current) <span>~$900</span></li>
      <li>Single video revenue <span>$5K</span></li>
      <li>App Store search lift <span>+300%</span></li>
    </ul>
    <ul class="skills-list">
      <li>Attributed downloads <span>35K+</span></li>
      <li>Total views driven <span>300M+</span></li>
      <li>TikTok 0 → 11.5M views <span>5 days</span></li>
      <li>Brands past first 100K video <span>9</span></li>
    </ul>
  </div>
</section>

<section>
  <div class="section-label">Skills</div>
  <div class="two-col">
    <ul class="skills-list">
      <li>Hypothesis-driven testing & kill conditions</li>
      <li>Funnel mapping & conversion analysis</li>
      <li>Consumer trend identification</li>
      <li>Consumer tribe psychology</li>
      <li>Opportunity analysis</li>
    </ul>
    <ul class="skills-list">
      <li>TikTok</li>
      <li>Creator & UGC programs</li>
      <li>AI agents & content automation</li>
      <li>Cross-platform distribution</li>
    </ul>
  </div>
</section>

<section>
  <div class="section-label">Education</div>
  <div class="education-row">
    <div>
      <div class="edu-school">University of Oregon</div>
      <div class="edu-degree">BBA, Entrepreneurship</div>
    </div>
    <div class="edu-date">2022 – 2023</div>
  </div>
  <div class="education-row" style="margin-top: 8px;">
    <div>
      <div class="edu-school">Harvard University</div>
      <div class="edu-degree">Online — Computer Science</div>
    </div>
    <div class="edu-date">2023</div>
  </div>
</section>

<section>
  <div class="section-label">Other</div>
  <p style="font-size: 11pt; line-height: 1.6;">
    USA Bench Press National Record & California Squat State Record — set at 17, after 7 years of daily training.
  </p>
</section>

</body>
</html>
`;

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'x-robots-tag': 'index,follow'
    }
  });
}

