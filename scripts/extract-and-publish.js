#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Extracting and Publishing Performance Optimizer Package...\n');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  log('❌ Error: package.json not found. Please run this script from the project root.', 'red');
  process.exit(1);
}

try {
  // Step 1: Build the package
  log('📦 Step 1: Building performance optimizer package...', 'blue');
  execSync('npm run build:perf-package', { stdio: 'inherit' });
  log('✅ Package built successfully!', 'green');

  // Step 2: Check if performance-optimizer directory exists
  const packageDir = path.join(process.cwd(), 'performance-optimizer');
  if (!fs.existsSync(packageDir)) {
    log('❌ Error: performance-optimizer directory not found after build.', 'red');
    process.exit(1);
  }

  // Step 3: Ask user what they want to do
  log('\n🎯 What would you like to do?', 'yellow');
  log('1. Publish to GitHub only');
  log('2. Publish to npm only');
  log('3. Publish to both GitHub and npm');
  log('4. Just build the package (no publishing)');

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('\nEnter your choice (1-4): ', (choice) => {
    rl.close();

    switch (choice) {
      case '1':
        publishToGitHub();
        break;
      case '2':
        publishToNpm();
        break;
      case '3':
        publishToBoth();
        break;
      case '4':
        log('✅ Package built successfully! Check the performance-optimizer/ directory.', 'green');
        break;
      default:
        log('❌ Invalid choice. Exiting.', 'red');
        process.exit(1);
    }
  });

} catch (error) {
  log(`❌ Error: ${error.message}`, 'red');
  process.exit(1);
}

function publishToGitHub() {
  log('\n🌐 Publishing to GitHub...', 'blue');
  
  try {
    // Change to package directory
    process.chdir('performance-optimizer');
    
    // Initialize git if not already done
    if (!fs.existsSync('.git')) {
      execSync('git init', { stdio: 'inherit' });
      log('✅ Git repository initialized', 'green');
    }
    
    // Add all files
    execSync('git add .', { stdio: 'inherit' });
    log('✅ Files added to git', 'green');
    
    // Commit
    execSync('git commit -m "feat: Performance Optimizer Package v1.0.0"', { stdio: 'inherit' });
    log('✅ Changes committed', 'green');
    
    log('\n📋 Next steps for GitHub:', 'yellow');
    log('1. Create a new repository on GitHub');
    log('2. Run these commands:');
    log('   git remote add origin https://github.com/yourusername/performance-optimizer.git');
    log('   git push -u origin main');
    log('3. Create a release tag:');
    log('   git tag v1.0.0');
    log('   git push origin v1.0.0');
    
  } catch (error) {
    log(`❌ Error publishing to GitHub: ${error.message}`, 'red');
  }
}

function publishToNpm() {
  log('\n📦 Publishing to npm...', 'blue');
  
  try {
    // Change to package directory
    process.chdir('performance-optimizer');
    
    // Check if user is logged in to npm
    try {
      execSync('npm whoami', { stdio: 'pipe' });
    } catch (error) {
      log('❌ Not logged in to npm. Please run: npm login', 'red');
      return;
    }
    
    // Build the package
    execSync('npm run build', { stdio: 'inherit' });
    log('✅ Package built for npm', 'green');
    
    // Publish
    execSync('npm publish', { stdio: 'inherit' });
    log('✅ Package published to npm successfully!', 'green');
    
  } catch (error) {
    log(`❌ Error publishing to npm: ${error.message}`, 'red');
  }
}

function publishToBoth() {
  log('\n🚀 Publishing to both GitHub and npm...', 'blue');
  
  try {
    // Change to package directory
    process.chdir('performance-optimizer');
    
    // Build the package
    execSync('npm run build', { stdio: 'inherit' });
    log('✅ Package built', 'green');
    
    // Initialize git if not already done
    if (!fs.existsSync('.git')) {
      execSync('git init', { stdio: 'inherit' });
      log('✅ Git repository initialized', 'green');
    }
    
    // Add and commit
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "feat: Performance Optimizer Package v1.0.0"', { stdio: 'inherit' });
    log('✅ Changes committed to git', 'green');
    
    // Check npm login
    try {
      execSync('npm whoami', { stdio: 'pipe' });
    } catch (error) {
      log('❌ Not logged in to npm. Please run: npm login', 'red');
      log('📋 GitHub steps:', 'yellow');
      log('1. Create a new repository on GitHub');
      log('2. Run: git remote add origin https://github.com/yourusername/performance-optimizer.git');
      log('3. Run: git push -u origin main');
      return;
    }
    
    // Publish to npm
    execSync('npm publish', { stdio: 'inherit' });
    log('✅ Package published to npm successfully!', 'green');
    
    log('\n📋 Next steps for GitHub:', 'yellow');
    log('1. Create a new repository on GitHub');
    log('2. Run these commands:');
    log('   git remote add origin https://github.com/yourusername/performance-optimizer.git');
    log('   git push -u origin main');
    log('3. Create a release tag:');
    log('   git tag v1.0.0');
    log('   git push origin v1.0.0');
    
  } catch (error) {
    log(`❌ Error: ${error.message}`, 'red');
  }
}

// Handle process exit
process.on('exit', (code) => {
  if (code === 0) {
    log('\n🎉 Performance Optimizer Package extraction completed!', 'green');
    log('📁 Check the performance-optimizer/ directory for your package.', 'blue');
  }
}); 