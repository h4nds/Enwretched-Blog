#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📦 Building Performance Optimizer Package...\n');

// Create package directory
const packageDir = path.join(process.cwd(), 'performance-optimizer');
const srcDir = path.join(packageDir, 'src');
const distDir = path.join(packageDir, 'dist');

// Clean and create directories
if (fs.existsSync(packageDir)) {
  fs.rmSync(packageDir, { recursive: true, force: true });
}
fs.mkdirSync(packageDir, { recursive: true });
fs.mkdirSync(srcDir, { recursive: true });
fs.mkdirSync(distDir, { recursive: true });

// Copy source files
const filesToCopy = [
  'src/components/seo/PerformanceOptimizer.tsx',
  'src/utils/performanceMonitor.ts',
  'public/sw.js',
  'scripts/test-performance.js'
];

filesToCopy.forEach(file => {
  const sourcePath = path.join(process.cwd(), file);
  const destPath = path.join(packageDir, file);
  
  if (fs.existsSync(sourcePath)) {
    // Create directory structure
    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    // Copy file
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Copied ${file}`);
  }
});

// Create package.json for the performance optimizer
const packageJson = {
  "name": "@enwretched/performance-optimizer",
  "version": "1.0.0",
  "description": "A comprehensive performance optimization package for Next.js applications",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "src",
    "public",
    "scripts"
  ],
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "test:performance": "node scripts/test-performance.js"
  },
  "keywords": [
    "performance",
    "optimization",
    "nextjs",
    "react",
    "core-web-vitals",
    "lighthouse",
    "service-worker",
    "caching"
  ],
  "author": "Ray Wretch",
  "license": "MIT",
  "peerDependencies": {
    "react": ">=18.0.0",
    "next": ">=14.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/h4nds/performance-optimizer.git"
  },
  "bugs": {
    "url": "https://github.com/h4nds/performance-optimizer/issues"
  },
  "homepage": "https://github.com/h4nds/performance-optimizer#readme"
};

fs.writeFileSync(
  path.join(packageDir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);

// Create TypeScript configuration
const tsConfig = {
  "compilerOptions": {
    "target": "es2017",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": false,
    "esModuleInterop": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "declaration": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
};

fs.writeFileSync(
  path.join(packageDir, 'tsconfig.json'),
  JSON.stringify(tsConfig, null, 2)
);

// Create main index file
const indexContent = `export { default as PerformanceOptimizer } from './components/seo/PerformanceOptimizer';
export { PerformanceMonitor, optimizeImages, preloadCriticalResources, debounce, throttle } from './utils/performanceMonitor';
export { default as ServiceWorker } from './public/sw.js';

// Re-export types
export type { PerformanceOptimizerProps } from './components/seo/PerformanceOptimizer';
`;

fs.writeFileSync(path.join(srcDir, 'index.ts'), indexContent);

// Create README for the package
const readmeContent = `# 🚀 Performance Optimizer

A comprehensive performance optimization package for Next.js applications.

## Features

- ✅ Core Web Vitals monitoring (LCP, FID, CLS)
- ✅ Resource hints and preloading
- ✅ Service worker for caching
- ✅ Performance analytics
- ✅ Image optimization utilities
- ✅ Bundle optimization helpers

## Installation

\`\`\`bash
npm install @enwretched/performance-optimizer
\`\`\`

## Quick Start

\`\`\`jsx
import { PerformanceOptimizer } from '@enwretched/performance-optimizer';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <PerformanceOptimizer
          preloadImages={[
            '/images/hero.jpg',
            '/images/logo.png'
          ]}
          enableAnalytics={true}
        >
          {children}
        </PerformanceOptimizer>
      </body>
    </html>
  );
}
\`\`\`

## Usage

### Performance Optimizer Component

\`\`\`jsx
import { PerformanceOptimizer } from '@enwretched/performance-optimizer';

<PerformanceOptimizer
  preloadImages={['/critical-image.jpg']}
  enableAnalytics={true}
>
  <YourApp />
</PerformanceOptimizer>
\`\`\`

### Performance Monitoring

\`\`\`jsx
import { PerformanceMonitor } from '@enwretched/performance-optimizer';

const monitor = PerformanceMonitor.getInstance();
monitor.monitorCoreWebVitals();
monitor.monitorPageLoad();
monitor.logPerformanceReport();
\`\`\`

### Utility Functions

\`\`\`jsx
import { debounce, throttle, optimizeImages } from '@enwretched/performance-optimizer';

// Debounce scroll events
const handleScroll = debounce(() => {
  // Your scroll logic
}, 100);

// Throttle resize events
const handleResize = throttle(() => {
  // Your resize logic
}, 250);

// Optimize all images on page
optimizeImages();
\`\`\`

## Configuration

### Next.js Config

Add to your \`next.config.js\`:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression
  compress: true,
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
\`\`\`

## Performance Testing

\`\`\`bash
npm run test:performance
\`\`\`

## License

MIT
`;

fs.writeFileSync(path.join(packageDir, 'README.md'), readmeContent);

// Create .gitignore
const gitignoreContent = `node_modules/
dist/
*.log
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
`;

fs.writeFileSync(path.join(packageDir, '.gitignore'), gitignoreContent);

// Create LICENSE
const licenseContent = `MIT License

Copyright (c) 2024 Ray Wretch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

fs.writeFileSync(path.join(packageDir, 'LICENSE'), licenseContent);

console.log('\n✅ Performance Optimizer Package Built Successfully!');
console.log('\n📁 Package Location:', packageDir);
console.log('\n🚀 To publish to npm:');
console.log('1. cd performance-optimizer');
console.log('2. npm login');
console.log('3. npm publish');
console.log('\n🌐 To publish to GitHub:');
console.log('1. cd performance-optimizer');
console.log('2. git init');
console.log('3. git add .');
console.log('4. git commit -m "Initial commit"');
console.log('5. Create new repo on GitHub');
console.log('6. git remote add origin https://github.com/yourusername/performance-optimizer.git');
console.log('7. git push -u origin main'); 