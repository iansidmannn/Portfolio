# Fixing Cloudflare Pages Deployment

## Problem 1: package.json not found
Cloudflare Pages can't find `package.json` because your files might be in a subdirectory in your GitHub repository.

## Problem 2: Build output directory not found
After fixing Problem 1, you might see: "Output directory '.vercel/output/static' not found"

## Solution 1: Check Your GitHub Repository Structure

1. Go to your GitHub repository: `https://github.com/iansidmannn/Ian-s-Content-Portfolio`
2. Check if `package.json` is in the root directory or in a subfolder
3. If files are in a subfolder (like `Ian's Portfolio/`), you have two options:

### Option A: Move Files to Root (Recommended)

1. In GitHub, navigate to the folder containing your files
2. Select all files (package.json, app/, components/, etc.)
3. Move them to the root of the repository
4. Delete the empty subfolder
5. Commit and push the changes
6. Re-deploy on Cloudflare Pages

### Option B: Configure Cloudflare to Use Subdirectory

1. Go to your Cloudflare Pages project settings
2. Go to "Builds & deployments" → "Build configuration"
3. Set **Root directory** to the folder name (e.g., `Ian's Portfolio` or whatever folder contains package.json)
4. Save and redeploy

## Solution 2: Use Vercel Instead (Easiest)

Vercel is made by the creators of Next.js and works perfectly out of the box:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository `iansidmannn/Ian-s-Content-Portfolio`
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Done! Your site will be live in 2 minutes

**Vercel is recommended because:**
- Zero configuration needed
- Built specifically for Next.js
- Free SSL and custom domains
- Automatic deployments on every push

## Problem 2: Build Output Directory Error

If you see: `Error: Output directory ".vercel/output/static" not found`

**Solution:** The project is now configured for static export. Update your Cloudflare Pages settings:

1. Go to your Cloudflare Pages project
2. Go to **Settings** → **Builds & deployments** → **Build configuration**
3. Update these settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out` ⚠️ **Change this from `.next` to `out`**
   - **Root directory:** `/` (empty)
4. Save and redeploy

The `next.config.js` has been updated to use `output: 'export'` which creates an `out` folder with static files that Cloudflare can serve.

## Quick Check: Verify Your Repo Structure

Your GitHub repo should look like this at the root:
```
Ian-s-Content-Portfolio/
├── package.json          ← Must be here
├── next.config.js        ← Should have output: 'export'
├── tsconfig.json
├── tailwind.config.js
├── app/
├── components/
├── data/
└── public/
```

If `package.json` is inside a subfolder, that's the problem!

