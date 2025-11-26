# Website Optimization Guide

This guide covers optimizations for your portfolio website to ensure fast loading times and optimal web performance.

## 🎯 Current Optimizations Applied

### 1. Next.js Configuration
- ✅ Compression enabled (`compress: true`)
- ✅ SWC minification enabled
- ✅ CSS optimization enabled
- ✅ Modern image format preferences (AVIF, WebP)
- ✅ Removed powered-by header for security

### 2. Component Optimizations
- ✅ Lazy loading for images and videos
- ✅ Proper `preload="metadata"` for videos
- ✅ Responsive image sizing with `sizes` attribute
- ✅ Priority loading for above-the-fold content

## 📦 Media File Optimization

### Images

#### Recommended Tools:
1. **Squoosh** (https://squoosh.app/) - Free web-based tool
   - Convert HEIC to WebP or AVIF
   - Compress PNG/JPEG files
   - Maintain quality while reducing file size

2. **ImageOptim** (Mac) or **FileOptimizer** (Windows)
   - Batch process multiple images
   - Automatic optimization

3. **Sharp** (Command line) - For developers
   ```bash
   npm install -g sharp-cli
   sharp -i input.png -o output.webp -q 80
   ```

#### Optimization Targets:
- **PNG files**: Convert to WebP (80-85% quality) or AVIF (75-80% quality)
- **JPEG files**: Compress to 80-85% quality, convert to WebP
- **HEIC files**: Convert to WebP or AVIF (these are not web-compatible)
- **Target sizes**:
  - Thumbnails: < 100KB
  - Hero images: < 300KB
  - Logo images: < 50KB

#### Quick Win: Convert HEIC Files
Your public folder contains HEIC files that browsers can't display:
- `470355FA-72BF-45BD-8BF4-407EC70C533F.HEIC`
- `IMG_6416.HEIC`

**Action**: Convert these to WebP or JPEG format.

### Videos

#### Recommended Tools:
1. **HandBrake** (Free, cross-platform)
   - Convert videos to web-optimized formats
   - Reduce file size significantly
   - Maintain quality

2. **FFmpeg** (Command line)
   ```bash
   # Optimize MP4 for web
   ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k output.mp4
   
   # Create WebM version (smaller, modern browsers)
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -c:a libopus output.webm
   ```

#### Optimization Targets:
- **Format**: H.264 (MP4) for compatibility, WebM for modern browsers
- **Bitrate**: 2-5 Mbps for 1080p, 1-2 Mbps for 720p
- **Codec**: H.264 (libx264) for MP4, VP9 for WebM
- **Target sizes**:
  - Short videos (< 30s): < 5MB
  - Medium videos (30s-2min): < 15MB
  - Long videos (> 2min): Consider hosting externally (YouTube/Vimeo)

#### Current Video Files to Optimize:
- `1124(1).mp4`
- `Better Edit.mp4`
- `brickad.mp4`
- `Charity Karaoke Sing For A Cause on Instagram 40000 Raised.mp4`
- `GARMENT GARAGE garmentgarageshop Instagram photos and videos.mp4`
- `GOOFY GARMENTS on Instagram Guess I wont be getting bullied anym.mp4`
- `gymjunkie69_ on TikTok.mp4`
- `Instagram (1).mp4`
- `Instagram (2).mp4`
- `NO KID SLEEPS ON THE FLOOR IN OUR TOWN on Instagram With our bed.mp4`
- `protein.mp4`
- `Pub speaking.MOV` (needs conversion to MP4)
- `scenerAd.mp4`
- `smly.mp4`
- `SmyleLabs on Instagram NOOOOOO rip the wood (1).mp4`
- `SmyleLabs on Instagram NOOOOOO rip the wood.mp4`
- `IMG_3001.mov` (needs conversion to MP4)

## 🚀 Performance Best Practices

### 1. Image Loading Strategy
- ✅ Use `loading="lazy"` for below-the-fold images
- ✅ Use `priority` for hero/above-the-fold images
- ✅ Provide proper `sizes` attribute for responsive images
- ✅ Use `fetchPriority="low"` for non-critical images

### 2. Video Loading Strategy
- ✅ Use `preload="metadata"` (not "auto") to reduce initial load
- ✅ Use `loading="lazy"` for below-the-fold videos
- ✅ Consider using video thumbnails instead of autoplay
- ✅ Host large videos externally (YouTube/Vimeo) when possible

### 3. File Organization
- ✅ Keep optimized files in `/public` folder
- ✅ Use descriptive, lowercase filenames
- ✅ Remove unused files to reduce bundle size

## 📊 Expected Performance Improvements

After optimization:
- **Image load time**: 50-70% reduction
- **Video load time**: 40-60% reduction
- **Total page size**: 60-80% reduction
- **Lighthouse score**: +20-30 points
- **Time to Interactive**: 30-50% improvement

## 🔧 Automated Optimization Script

You can create a script to automate some optimizations. Here's a basic example:

```bash
# Install dependencies
npm install --save-dev sharp-cli

# Create optimize script in package.json
"scripts": {
  "optimize:images": "node scripts/optimize-images.js"
}
```

## 📝 Checklist

- [ ] Convert all HEIC files to WebP/JPEG
- [ ] Optimize all PNG files (convert to WebP where possible)
- [ ] Compress all JPEG files
- [ ] Optimize all MP4 videos (reduce bitrate, compress)
- [ ] Convert MOV files to MP4
- [ ] Remove unused media files
- [ ] Test page load times before/after
- [ ] Run Lighthouse audit
- [ ] Verify all images/videos still display correctly

## 🌐 External Hosting Options

For very large videos, consider:
- **YouTube**: Free, unlimited storage, good SEO
- **Vimeo**: Professional, better privacy controls
- **Cloudflare Stream**: Fast CDN, pay-per-use
- **Bunny.net**: Affordable video hosting

## 📈 Monitoring

After deployment, monitor:
- Page load times
- Core Web Vitals (LCP, FID, CLS)
- Lighthouse scores
- User feedback on loading speed

---

**Note**: Always keep original high-quality files as backups before optimizing!

