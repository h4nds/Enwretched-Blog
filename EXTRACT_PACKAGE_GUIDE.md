# 📦 Extracting Performance Optimizer Package Guide

This guide will help you extract the performance optimization features into a standalone package that can be used across different projects.

## 🚀 Quick Start

### 1. Build the Package
```bash
npm run build:perf-package
```

This creates a `performance-optimizer/` directory with everything needed for a standalone package.

### 2. Publish to GitHub
```bash
cd performance-optimizer
git init
git add .
git commit -m "Initial commit: Performance Optimizer Package"
```

Then create a new repository on GitHub and push:
```bash
git remote add origin https://github.com/yourusername/performance-optimizer.git
git push -u origin main
```

### 3. Publish to npm (Optional)
```bash
cd performance-optimizer
npm login
npm publish
```

## 📁 Package Structure

```
performance-optimizer/
├── src/
│   ├── components/
│   │   └── seo/
│   │       └── PerformanceOptimizer.tsx
│   ├── utils/
│   │   └── performanceMonitor.ts
│   └── index.ts
├── public/
│   └── sw.js
├── scripts/
│   └── test-performance.js
├── package.json
├── tsconfig.json
├── README.md
├── LICENSE
└── .gitignore
```

## 🔧 Package Features

### Core Components
- **PerformanceOptimizer**: Main React component for performance monitoring
- **PerformanceMonitor**: Singleton class for tracking metrics
- **ServiceWorker**: Caching and offline functionality
- **Utility Functions**: debounce, throttle, image optimization

### Key Features
- ✅ Core Web Vitals monitoring (LCP, FID, CLS)
- ✅ Resource hints and preloading
- ✅ Service worker for caching
- ✅ Performance analytics
- ✅ Image optimization utilities
- ✅ Bundle optimization helpers

## 📦 Using the Package in Other Projects

### Installation
```bash
npm install @enwretched/performance-optimizer
```

### Basic Usage
```jsx
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
```

### Advanced Usage
```jsx
import { 
  PerformanceOptimizer, 
  PerformanceMonitor, 
  debounce, 
  throttle 
} from '@enwretched/performance-optimizer';

// Monitor performance
const monitor = PerformanceMonitor.getInstance();
monitor.monitorCoreWebVitals();
monitor.logPerformanceReport();

// Optimize event handlers
const handleScroll = debounce(() => {
  // Your scroll logic
}, 100);

const handleResize = throttle(() => {
  // Your resize logic
}, 250);
```

## 🔄 Automated Publishing

### GitHub Actions Workflow
The package includes a GitHub Actions workflow (`.github/workflows/build-package.yml`) that:

1. **Triggers** on pushes to main branch or manual dispatch
2. **Builds** the package automatically
3. **Creates** releases when tags are pushed
4. **Uploads** artifacts for easy distribution

### Using the Workflow
1. Push changes to main branch
2. Workflow automatically builds package
3. Create a tag for release:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
4. GitHub automatically creates a release

## 🛠️ Customization Options

### 1. Modify Package Name
Edit `scripts/build-perf-package.js`:
```javascript
const packageJson = {
  "name": "@your-org/performance-optimizer", // Change this
  // ... rest of config
};
```

### 2. Add Custom Features
Add new files to the `filesToCopy` array:
```javascript
const filesToCopy = [
  'src/components/seo/PerformanceOptimizer.tsx',
  'src/utils/performanceMonitor.ts',
  'public/sw.js',
  'scripts/test-performance.js',
  'src/your-new-feature.tsx' // Add your custom features
];
```

### 3. Customize Dependencies
Modify the `package.json` template in the build script:
```javascript
const packageJson = {
  // ... existing config
  "peerDependencies": {
    "react": ">=18.0.0",
    "next": ">=14.0.0",
    "your-custom-dependency": "^1.0.0" // Add custom deps
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "your-dev-dependency": "^1.0.0" // Add dev deps
  }
};
```

## 📊 Package Analytics

### npm Analytics
Once published, you can track:
- Download statistics
- Version usage
- Dependency graphs
- Security vulnerabilities

### GitHub Analytics
- Repository traffic
- Clone statistics
- Issue tracking
- Pull request metrics

## 🔍 Testing the Package

### Local Testing
```bash
cd performance-optimizer
npm install
npm run build
npm run test:performance
```

### Integration Testing
Create a test project:
```bash
npx create-next-app@latest test-performance-optimizer
cd test-performance-optimizer
npm install ../performance-optimizer
```

Then integrate the package and test functionality.

## 📈 Version Management

### Semantic Versioning
- **Major** (1.0.0): Breaking changes
- **Minor** (1.1.0): New features, backward compatible
- **Patch** (1.1.1): Bug fixes

### Release Process
1. Update version in `package.json`
2. Create git tag: `git tag v1.1.0`
3. Push tag: `git push origin v1.1.0`
4. GitHub Actions creates release automatically

## 🚨 Troubleshooting

### Common Issues

#### 1. Build Fails
```bash
# Check TypeScript errors
cd performance-optimizer
npx tsc --noEmit

# Fix type issues
# Rebuild package
npm run build:perf-package
```

#### 2. Package Not Found
```bash
# Check npm registry
npm view @enwretched/performance-optimizer

# Verify package.json
cat performance-optimizer/package.json
```

#### 3. GitHub Actions Fail
- Check workflow file syntax
- Verify repository secrets
- Review action logs for errors

### Support
- Create issues on GitHub repository
- Check existing issues for solutions
- Review package documentation

## 🎯 Best Practices

### 1. Documentation
- Keep README.md updated
- Add JSDoc comments to functions
- Include usage examples

### 2. Testing
- Test on multiple Next.js versions
- Verify browser compatibility
- Run performance benchmarks

### 3. Maintenance
- Regular dependency updates
- Security vulnerability monitoring
- Performance regression testing

### 4. Community
- Respond to issues promptly
- Accept and review pull requests
- Share updates on social media

## 📋 Checklist for Publishing

- [ ] Package builds successfully
- [ ] All tests pass
- [ ] Documentation is complete
- [ ] License is included
- [ ] Repository is public
- [ ] GitHub Actions workflow is configured
- [ ] npm account is set up (if publishing to npm)
- [ ] Version number is updated
- [ ] Changelog is updated
- [ ] Release notes are prepared

## 🎉 Success!

Once published, your performance optimizer package can be used across all your projects:

```bash
npm install @enwretched/performance-optimizer
```

And imported in any Next.js project:

```jsx
import { PerformanceOptimizer } from '@enwretched/performance-optimizer';
```

This creates a reusable, maintainable performance optimization solution that you can share with the community and use across all your projects! 