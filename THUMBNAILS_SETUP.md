# Setting Up Video Thumbnails

## Profile Picture

1. Save your profile picture as `profile.jpg` in the `/public` folder
2. The image should be square (recommended: 800x800px or larger)
3. The component is already configured to use it!

## Video Thumbnails

To add thumbnails for your videos, you have two options:

### Option 1: Local Images (Recommended)

1. Create a folder: `/public/video-thumbnails/`
2. Add thumbnail images named after the video ID:
   - `video-1.jpg` (for video with id: '1')
   - `video-2.jpg` (for video with id: '2')
   - etc.

3. Update `data/videos.ts` to add thumbnail paths:

```typescript
{
  id: '1',
  url: 'https://www.instagram.com/reel/CoIZkTfLkIP/',
  views: 5800000,
  platform: 'instagram',
  account: '@ianscontentarchive',
  accountUrl: 'https://www.instagram.com/ianscontentarchive/',
  thumbnail: '/video-thumbnails/video-1.jpg', // Add this line
},
```

### Option 2: External URLs

You can also use external thumbnail URLs directly:

```typescript
{
  id: '1',
  // ... other fields
  thumbnail: 'https://example.com/thumbnail.jpg', // External URL
},
```

## Getting Thumbnails from Social Media

### Instagram Reels
- Right-click on the reel → "Copy image address" or take a screenshot
- Save as JPG/PNG in `/public/video-thumbnails/`

### TikTok Videos
- Visit the video on TikTok
- Take a screenshot or use TikTok's thumbnail (if available)
- Save as JPG/PNG in `/public/video-thumbnails/`

### YouTube Videos
- YouTube provides thumbnail URLs: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
- Or use: `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg`

## Recommended Thumbnail Size
- **Aspect Ratio:** 9:16 (vertical) or 16:9 (horizontal) depending on platform
- **Resolution:** 1080x1920px (vertical) or 1920x1080px (horizontal)
- **Format:** JPG or PNG
- **File Size:** Keep under 500KB for fast loading

## Quick Setup

1. Create folder: `public/video-thumbnails/`
2. Add your thumbnail images
3. Update `data/videos.ts` with thumbnail paths
4. Refresh your dev server to see changes!

