// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Record<string, number> = {};

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Monitor Core Web Vitals
  monitorCoreWebVitals() {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            this.metrics.LCP = entry.startTime;
            console.log('🚀 LCP:', entry.startTime, 'ms');
            break;
          case 'first-input':
            const firstInput = entry as any;
            this.metrics.FID = firstInput.processingStart - firstInput.startTime;
            console.log('⚡ FID:', this.metrics.FID, 'ms');
            break;
          case 'layout-shift':
            const layoutShift = entry as any;
            this.metrics.CLS = layoutShift.value;
            console.log('📐 CLS:', layoutShift.value);
            break;
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }

  // Monitor page load performance
  monitorPageLoad() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as any;
      if (navigation) {
        this.metrics.pageLoadTime = navigation.loadEventEnd - navigation.loadEventStart;
        this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        
        console.log('📊 Page Load Time:', this.metrics.pageLoadTime, 'ms');
        console.log('📊 DOM Content Loaded:', this.metrics.domContentLoaded, 'ms');
      }
    });
  }

  // Get performance score
  getPerformanceScore(): number {
    let score = 100;

    // LCP scoring (should be < 2.5s)
    if (this.metrics.LCP > 2500) {
      score -= 25;
    } else if (this.metrics.LCP > 4000) {
      score -= 50;
    }

    // FID scoring (should be < 100ms)
    if (this.metrics.FID > 100) {
      score -= 25;
    } else if (this.metrics.FID > 300) {
      score -= 50;
    }

    // CLS scoring (should be < 0.1)
    if (this.metrics.CLS > 0.1) {
      score -= 25;
    } else if (this.metrics.CLS > 0.25) {
      score -= 50;
    }

    return Math.max(0, score);
  }

  // Get all metrics
  getMetrics() {
    return {
      ...this.metrics,
      score: this.getPerformanceScore()
    };
  }

  // Log performance report
  logPerformanceReport() {
    const metrics = this.getMetrics();
    console.log('🎯 Performance Report:', metrics);
    
    if (metrics.score >= 90) {
      console.log('✅ Excellent performance!');
    } else if (metrics.score >= 70) {
      console.log('⚠️ Good performance, but room for improvement');
    } else {
      console.log('❌ Performance needs optimization');
    }
  }
}

// Utility functions for performance optimization
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    // Add lazy loading
    if (!img.loading) {
      img.loading = 'lazy';
    }
    
    // Add decoding attribute
    if (!img.decoding) {
      img.decoding = 'async';
    }
  });
};

export const preloadCriticalResources = () => {
  const criticalImages = [
    '/images/showcase/deamon.png',
    '/images/showcase/memory_gif.gif'
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
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