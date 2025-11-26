# Ian's Portfolio

A modern, futuristic, high-performance content creator portfolio showcasing viral videos, brand experiences, and creative work.

## Features

- 🎬 **Video Carousel**: Showcase your viral videos with view counts and platform links
- 📊 **Results Carousel**: Highlight key achievements and metrics
- 💼 **Experiences Section**: Detailed breakdown of your work, approach, and results
- 🤝 **Consulting Showcase**: Display your work with creators and brands
- 🎯 **Personal Story**: Share your passion for content creation
- 🧠 **Philosophy Section**: Your unique approach to social media and branding

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup

1. **Add your profile image:**
   - Save your profile picture as `profile.jpg` in the `/public` folder
   - The image should be square (recommended: 800x800px or larger)
   - The component is already configured to use it!

2. **Add video thumbnails (optional but recommended):**
   - See [THUMBNAILS_SETUP.md](./THUMBNAILS_SETUP.md) for detailed instructions
   - Quick version: Create `/public/video-thumbnails/` folder
   - Add images named `video-1.jpg`, `video-2.jpg`, etc.
   - Update `data/videos.ts` to add `thumbnail: '/video-thumbnails/video-1.jpg'` to each video

2. **Customize your content:**
   - Edit `data/videos.ts` to update your video links
   - Edit `data/results.ts` to update your achievements
   - Edit `data/experiences.ts` to update your work experiences
   - Edit `data/consulting.ts` to update your consulting clients

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

This site can be deployed for **FREE** on:
- **Vercel** (recommended): Connect your GitHub repo and deploy automatically
- **Netlify**: Connect your repo for automatic deployments
- **Cloudflare Pages**: Connect your repo for automatic deployments

Build for production:
```bash
npm run build
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icons

