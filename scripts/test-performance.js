#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Performance Optimizations...\n');

// Check if Next.js is running
function checkServer() {
  try {
    const response = execSync('curl -s http://localhost:3000', { encoding: 'utf8' });
    return response.includes('EnWretched') || response.includes('html');
  } catch (error) {
    return false;
  }
}

// Test performance with Lighthouse
function runLighthouse() {
  try {
    console.log('🔍 Running Lighthouse audit...');
    execSync('npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json --chrome-flags="--headless"', { stdio: 'inherit' });
    
    const report = JSON.parse(fs.readFileSync('./lighthouse-report.json', 'utf8'));
    const scores = report.categories;
    
    console.log('\n📊 Lighthouse Scores:');
    console.log(`Performance: ${Math.round(scores.performance.score * 100)}/100`);
    console.log(`Accessibility: ${Math.round(scores.accessibility.score * 100)}/100`);
    console.log(`Best Practices: ${Math.round(scores['best-practices'].score * 100)}/100`);
    console.log(`SEO: ${Math.round(scores.seo.score * 100)}/100`);
    
    return scores.performance.score;
  } catch (error) {
    console.log('❌ Lighthouse test failed. Make sure you have Lighthouse installed: npm install -g lighthouse');
    return 0;
  }
}

// Test Core Web Vitals
function testCoreWebVitals() {
  console.log('\n⚡ Testing Core Web Vitals...');
  
  const puppeteer = require('puppeteer');
  
  (async () => {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      
      // Enable performance monitoring
      await page.evaluateOnNewDocument(() => {
        window.addEventListener('load', () => {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime, 'ms');
              }
              if (entry.entryType === 'first-input') {
                console.log('FID:', entry.processingStart - entry.startTime, 'ms');
              }
              if (entry.entryType === 'layout-shift') {
                console.log('CLS:', entry.value);
              }
            }
          });
          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        });
      });
      
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
      
      // Wait for metrics to be collected
      await page.waitForTimeout(5000);
      
      const metrics = await page.evaluate(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        return {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        };
      });
      
      console.log(`📊 Page Load Time: ${Math.round(metrics.loadTime)}ms`);
      console.log(`📊 DOM Content Loaded: ${Math.round(metrics.domContentLoaded)}ms`);
      
      await browser.close();
    } catch (error) {
      console.log('❌ Puppeteer test failed. Make sure you have puppeteer installed: npm install puppeteer');
    }
  })();
}

// Check bundle size
function checkBundleSize() {
  console.log('\n📦 Checking bundle size...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    
    const buildDir = path.join(process.cwd(), '.next');
    if (fs.existsSync(buildDir)) {
      const stats = fs.statSync(buildDir);
      const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`📦 Build size: ${sizeInMB}MB`);
    }
  } catch (error) {
    console.log('❌ Build check failed');
  }
}

// Main test function
async function runPerformanceTests() {
  console.log('🚀 Starting performance tests...\n');
  
  if (!checkServer()) {
    console.log('❌ Server not running. Please start your development server: npm run dev');
    process.exit(1);
  }
  
  console.log('✅ Server is running on http://localhost:3000\n');
  
  // Run tests
  const performanceScore = runLighthouse();
  testCoreWebVitals();
  checkBundleSize();
  
  console.log('\n🎯 Performance Test Summary:');
  if (performanceScore >= 0.9) {
    console.log('✅ Excellent performance!');
  } else if (performanceScore >= 0.7) {
    console.log('⚠️ Good performance, but room for improvement');
  } else {
    console.log('❌ Performance needs optimization');
  }
  
  console.log('\n📋 Recommendations:');
  console.log('1. Use Next.js Image component for all images');
  console.log('2. Implement lazy loading for non-critical images');
  console.log('3. Minimize JavaScript bundle size');
  console.log('4. Enable compression (gzip/brotli)');
  console.log('5. Use CDN for static assets');
}

// Run tests if this script is executed directly
if (require.main === module) {
  runPerformanceTests();
}

module.exports = { runPerformanceTests }; 