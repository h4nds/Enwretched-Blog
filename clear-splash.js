// Simple script to clear session storage for testing splash screen
// Run this in your browser console to clear the splash screen state

if (typeof window !== 'undefined') {
  sessionStorage.removeItem('splashShown');
  console.log('Splash screen state cleared! Refresh the page to see the splash screen again.');
}
