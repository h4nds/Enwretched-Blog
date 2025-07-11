'use client';

import { useEffect, useRef } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  preloadImages?: string[];
  enableAnalytics?: boolean;
}

export default function PerformanceOptimizer({
  children,
  preloadImages = [],
  enableAnalytics = false
}: PerformanceOptimizerProps) {
  const performanceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const firstInput = entry as any;
            console.log('FID:', firstInput.processingStart - firstInput.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            const layoutShift = entry as any;
            console.log('CLS:', layoutShift.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Monitor page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as any;
        if (navigation) {
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
          console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        }
      });

      return () => observer.disconnect();
    }
  }, []);

  // Add resource hints to document head
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // DNS prefetch for external domains
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = 'https://fonts.googleapis.com';
      document.head.appendChild(dnsPrefetch);

      const dnsPrefetch2 = document.createElement('link');
      dnsPrefetch2.rel = 'dns-prefetch';
      dnsPrefetch2.href = 'https://fonts.gstatic.com';
      document.head.appendChild(dnsPrefetch2);

      // Preconnect for critical resources
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.googleapis.com';
      preconnect.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(preconnect);

      const preconnect2 = document.createElement('link');
      preconnect2.rel = 'preconnect';
      preconnect2.href = 'https://fonts.gstatic.com';
      preconnect2.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(preconnect2);

      // Preload critical images
      preloadImages.forEach((image) => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = image;
        document.head.appendChild(preloadLink);
      });

      // Service Worker registration for caching
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
              console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
              console.log('SW registration failed: ', registrationError);
            });
        });
      }

      // Performance analytics
      if (enableAnalytics) {
        window.addEventListener('load', function() {
          const perfData = performance.getEntriesByType('navigation')[0] as any;
          if (perfData) {
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            console.log('Page Load Time:', loadTime + 'ms');
            
            // Send to analytics if needed
            if (typeof (window as any).gtag !== 'undefined') {
              (window as any).gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(loadTime)
              });
            }
          }
        });
      }
    }
  }, [preloadImages, enableAnalytics]);

  return (
    <div ref={performanceRef}>
      {children}
    </div>
  );
}

// Utility functions for performance optimization
export const optimizeImage = (src: string, width: number, height: number, quality = 75) => {
  // This would integrate with Next.js Image optimization
  return `${src}?w=${width}&h=${height}&q=${quality}&format=webp`;
};

export const lazyLoadImage = (src: string, alt: string, className?: string) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onLoad={(e) => {
        // Add fade-in effect
        const target = e.target as HTMLImageElement;
        target.style.opacity = '0';
        target.style.transition = 'opacity 0.3s ease-in';
        setTimeout(() => {
          target.style.opacity = '1';
        }, 100);
      }}
    />
  );
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function executedFunction(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}; 