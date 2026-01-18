# Vercel Environment Variables Setup Guide

## Required Environment Variables

Your app needs these two environment variables:
1. `MONGODB_URI` - Your MongoDB connection string
2. `ADMIN_PASSWORD` - Password for the admin dashboard at `/admin/messages`

---

## Step-by-Step Instructions

### Step 1: Access Your Vercel Project
1. Go to [vercel.com](https://vercel.com) and log in
2. Click on your project (should be "Enwretched-Blog" or similar)
3. You should see your project dashboard

### Step 2: Navigate to Settings
1. Click on the **"Settings"** tab at the top of the page
2. In the left sidebar, click on **"Environment Variables"**

### Step 3: Add MONGODB_URI
1. Click the **"Add New"** button (or **"Add"** button)
2. In the **"Key"** field, type exactly: `MONGODB_URI`
   - ⚠️ **IMPORTANT**: Must be exactly `MONGODB_URI` (case-sensitive, no spaces)
3. In the **"Value"** field, paste your MongoDB connection string
   - Format should be: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`
   - Or: `mongodb://username:password@host:port/database`
4. **Environment**: Select **ALL** of these:
   - ☑️ Production
   - ☑️ Preview
   - ☑️ Development
5. Click **"Save"**

### Step 4: Add ADMIN_PASSWORD
1. Click **"Add New"** again
2. In the **"Key"** field, type exactly: `ADMIN_PASSWORD`
   - ⚠️ **IMPORTANT**: Must be exactly `ADMIN_PASSWORD` (case-sensitive, no spaces)
3. In the **"Value"** field, enter your desired admin password
   - Example: `MySecurePassword123!`
   - ⚠️ **IMPORTANT**: Remember this password - you'll need it to access `/admin/messages`
4. **Environment**: Select **ALL** of these:
   - ☑️ Production
   - ☑️ Preview
   - ☑️ Development
5. Click **"Save"**

### Step 5: Redeploy Your Application
⚠️ **CRITICAL**: Environment variables are only loaded when the app is built/deployed!

1. Go to the **"Deployments"** tab
2. Find your latest deployment
3. Click the **three dots (⋯)** menu on the right
4. Click **"Redeploy"**
5. Confirm the redeploy

**OR** trigger a new deployment by:
- Pushing a new commit to your GitHub repo
- Or clicking **"Redeploy"** from the deployments page

---

## Verification Steps

### Check 1: Verify Variables Are Set
1. Go to **Settings** → **Environment Variables**
2. You should see both:
   - `MONGODB_URI` (value will be hidden with dots)
   - `ADMIN_PASSWORD` (value will be hidden with dots)

### Check 2: Verify After Redeploy
1. After redeploying, go to **Deployments** tab
2. Click on the latest deployment
3. Check the build logs for any MongoDB connection errors
4. If you see "MongoDB URI not configured" - the variable wasn't loaded

### Check 3: Test Your App
1. Visit your live site: `https://your-site.vercel.app`
2. Try submitting the contact form - it should work
3. Try accessing `/admin/messages` - you should see a login page
4. Log in with your `ADMIN_PASSWORD`

---

## Common Issues & Troubleshooting

### ❌ Issue: "MongoDB URI not configured" error
**Solutions:**
- ✅ Make sure you selected **ALL environments** (Production, Preview, Development)
- ✅ Make sure the key is exactly `MONGODB_URI` (no typos, correct case)
- ✅ **Redeploy after adding the variable** (most common issue!)
- ✅ Check that your MongoDB URI is valid (test it locally first)

### ❌ Issue: "ADMIN_PASSWORD not set" error
**Solutions:**
- ✅ Make sure you selected **ALL environments**
- ✅ Make sure the key is exactly `ADMIN_PASSWORD` (no typos, correct case)
- ✅ **Redeploy after adding the variable**
- ✅ Check the deployment logs to see if the variable was loaded

### ❌ Issue: Variables work locally but not on Vercel
**Solutions:**
- ✅ Did you redeploy after adding the variables? (Variables only load on build)
- ✅ Are the variables set for the correct environment? (Check Production vs Preview)
- ✅ Try redeploying from the Vercel dashboard

### ❌ Issue: Can't log into admin dashboard
**Solutions:**
- ✅ Make sure `ADMIN_PASSWORD` is set correctly
- ✅ Make sure you're using the exact password (case-sensitive)
- ✅ Try clearing browser cookies and logging in again
- ✅ Check browser console for errors

### ❌ Issue: Contact form doesn't save to MongoDB
**Solutions:**
- ✅ Verify `MONGODB_URI` is correct and accessible
- ✅ Check MongoDB Atlas IP whitelist (if using Atlas)
- ✅ Make sure your MongoDB user has read/write permissions
- ✅ Check Vercel deployment logs for connection errors

---

## Quick Checklist

Before pushing/deploying:
- [ ] `MONGODB_URI` is set in Vercel (all environments)
- [ ] `ADMIN_PASSWORD` is set in Vercel (all environments)
- [ ] Variables are spelled correctly (case-sensitive!)
- [ ] You've redeployed after adding variables
- [ ] MongoDB connection string is valid
- [ ] MongoDB allows connections from Vercel IPs (if using Atlas)

---

## Testing Locally First

Before deploying, test locally:

1. Create/update `.env.local` in your project root:
```env
MONGODB_URI=mongodb+srv://your-connection-string
ADMIN_PASSWORD=YourTestPassword123
```

2. Run `npm run dev`
3. Test the contact form and admin login
4. If it works locally, it should work on Vercel (after setting variables and redeploying)

---

## Need Help?

If you're still having issues:
1. Check Vercel deployment logs (Deployments → Click deployment → View logs)
2. Check browser console for client-side errors
3. Verify your MongoDB connection string works (test in MongoDB Compass or locally)
4. Make sure you're looking at the correct Vercel project (if you have multiple)
