# 🚀 Performance Optimization Guide for EnWretched Art Website

## Overview

This guide will help you ensure your performance optimizer is working correctly and your site is running at optimal speed.

## ✅ What's Already Implemented

### 1. Enhanced Next.js Configuration (`next.config.js`)
- ✅ Image optimization with WebP/AVIF formats
- ✅ Bundle splitting for better caching
- ✅ Compression enabled
- ✅ Security headers
- ✅ Cache headers for static assets

### 2. Performance Optimizer Component (`src/components/seo/PerformanceOptimizer.tsx`)
- ✅ Core Web Vitals monitoring (LCP, FID, CLS)
- ✅ Resource hints (DNS prefetch, preconnect)
- ✅ Critical image preloading
- ✅ Service worker registration
- ✅ Performance analytics

### 3. Service Worker (`public/sw.js`)
- ✅ Caching for critical resources
- ✅ Offline functionality
- ✅ Cache versioning

### 4. Performance Monitoring (`src/utils/performanceMonitor.ts`)
- ✅ Real-time performance metrics
- ✅ Performance scoring
- ✅ Utility functions for optimization

## 🧪 How to Test Your Performance Optimizer

### 1. Start Your Development Server
```bash
npm run dev
```

### 2. Run Performance Tests
```bash
npm run test:performance
```

This will run:
- Lighthouse audit
- Core Web Vitals testing
- Bundle size analysis

### 3. Manual Testing in Browser

#### Check Console for Performance Metrics
Open your browser's developer tools and look for:
- 🚀 LCP (Largest Contentful Paint) values
- ⚡ FID (First Input Delay) values  
- 📐 CLS (Cumulative Layout Shift) values
- 📊 Page Load Time metrics

#### Verify Service Worker
1. Open DevTools → Application → Service Workers
2. Check if your service worker is registered
3. Verify cached resources in Cache Storage

#### Test Image Optimization
1. Check Network tab in DevTools
2. Verify images are loading with proper formats (WebP/AVIF)
3. Confirm lazy loading is working

## 📊 Performance Benchmarks

### Target Metrics:
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds  
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Page Load Time**: < 3 seconds
- **Lighthouse Performance Score**: > 90

### How to Check Your Scores:

#### 1. Lighthouse Audit
```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json
```

#### 2. Chrome DevTools
1. Open DevTools → Performance tab
2. Click "Record" and refresh page
3. Stop recording and analyze metrics

#### 3. Real User Monitoring
The PerformanceOptimizer component logs metrics to console:
```javascript
// Check browser console for:
🚀 LCP: 1200ms
⚡ FID: 45ms  
📐 CLS: 0.05
📊 Page Load Time: 1800ms
```

## 🔧 Troubleshooting Common Issues

### Issue: High LCP (Largest Contentful Paint)
**Solutions:**
1. Optimize hero images:
```jsx
import Image from 'next/image';

<Image
  src="/images/showcase/deamon.png"
  alt="Hero Image"
  width={1200}
  height={630}
  priority // Add this for above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

2. Preload critical images in PerformanceOptimizer:
```jsx
<PerformanceOptimizer
  preloadImages={[
    '/images/showcase/deamon.png',
    '/images/showcase/memory_gif.gif'
  ]}
>
```

### Issue: High FID (First Input Delay)
**Solutions:**
1. Reduce JavaScript bundle size:
```jsx
// Use dynamic imports for non-critical components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

2. Optimize event handlers with debounce/throttle:
```jsx
import { debounce } from '@/utils/performanceMonitor';

const handleScroll = debounce(() => {
  // Your scroll logic
}, 100);
```

### Issue: High CLS (Cumulative Layout Shift)
**Solutions:**
1. Set explicit dimensions for images:
```jsx
<img 
  src="/image.jpg" 
  width={400} 
  height={300} 
  style={{ aspectRatio: '4/3' }}
/>
```

2. Reserve space for dynamic content:
```css
.image-container {
  min-height: 300px;
  aspect-ratio: 16/9;
}
```

## 🚀 Advanced Optimizations

### 1. Image Optimization
```jsx
// Use Next.js Image component for all images
import Image from 'next/image';

<Image
  src="/images/showcase/artwork.jpg"
  alt="Artwork"
  width={800}
  height={600}
  quality={85}
  placeholder="blur"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 2. Code Splitting
```jsx
// Lazy load non-critical components
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div>Loading gallery...</div>
});
```

### 3. Font Optimization
```jsx
// In your layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevents layout shift
  preload: true,
});
```

### 4. Critical CSS Inlining
```jsx
// Add critical CSS to head
<style dangerouslySetInnerHTML={{
  __html: `
    .hero { 
      background: linear-gradient(45deg, #8B5CF6, #A855F7);
      min-height: 100vh;
    }
  `
}} />
```

## 📈 Monitoring Performance in Production

### 1. Google Analytics 4
Add to your layout:
```jsx
// In layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

### 2. Real User Monitoring
```jsx
// Add to PerformanceOptimizer
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'timing_complete', {
    name: 'load',
    value: Math.round(loadTime)
  });
}
```

## 🎯 Performance Checklist

- [ ] All images use Next.js Image component
- [ ] Critical images are preloaded
- [ ] Service worker is registered
- [ ] Core Web Vitals are monitored
- [ ] Bundle size is optimized
- [ ] Compression is enabled
- [ ] Caching headers are set
- [ ] Lazy loading is implemented
- [ ] Fonts are optimized
- [ ] JavaScript is code-split

## 🔍 Tools for Performance Analysis

1. **Lighthouse** - Comprehensive performance audit
2. **WebPageTest** - Real-world performance testing
3. **GTmetrix** - Performance monitoring
4. **Chrome DevTools** - Real-time analysis
5. **Bundle Analyzer** - JavaScript bundle analysis

## 📞 Getting Help

If you're experiencing performance issues:

1. Check the browser console for error messages
2. Run `npm run test:performance` for automated testing
3. Use Chrome DevTools Performance tab for detailed analysis
4. Check the Network tab for slow-loading resources

Remember: Performance optimization is an ongoing process. Monitor your metrics regularly and optimize based on real user data! 