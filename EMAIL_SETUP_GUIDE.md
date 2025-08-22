# Email Setup Guide for Contact Forms

## Current Status
Your contact forms are now fully functional and will store submissions in your MongoDB database. However, to receive actual email notifications when someone submits a contact form, you'll need to set up an email service.

## Option 1: Resend (Recommended)
Resend is a modern email API that's easy to set up and has a generous free tier.

### Setup Steps:
1. **Sign up at [resend.com](https://resend.com)**
2. **Get your API key** from the dashboard
3. **Add to your environment variables**:
   ```env
   RESEND_API_KEY=your_api_key_here
   ```
4. **Install the package**:
   ```bash
   npm install resend
   ```

### Update the Contact API Route:
Replace the console.log in `/src/app/api/contact/route.ts` with:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your POST function, after storing in MongoDB:
await resend.emails.send({
  from: 'contact@enwretched.com', // Your verified domain
  to: 'wretchray@gmail.com',
  subject: `New Contact Form Submission: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `
});
```

## Option 2: Nodemailer with Gmail
If you prefer to use Gmail, you can set up Nodemailer.

### Setup Steps:
1. **Install nodemailer**:
   ```bash
   npm install nodemailer @types/nodemailer
   ```
2. **Set up Gmail App Password**:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password
3. **Add to environment variables**:
   ```env
   GMAIL_USER=wretchray@gmail.com
   GMAIL_APP_PASSWORD=your_app_password_here
   ```

### Update the Contact API Route:
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// In your POST function, after storing in MongoDB:
await transporter.sendMail({
  from: process.env.GMAIL_USER,
  to: 'wretchray@gmail.com',
  subject: `New Contact Form Submission: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `
});
```

## Option 3: Vercel Edge Functions with Resend
For better performance, you can use Vercel Edge Functions:

1. **Create `/src/app/api/contact/route.ts` as an Edge Function**:
```typescript
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Your existing code here, but with edge runtime
}
```

## Testing Your Setup
1. **Test the contact form** on your website
2. **Check your MongoDB** to see if submissions are stored
3. **Check your email** for notifications
4. **Check the browser console** for any errors

## Security Considerations
- Always validate email addresses on both client and server
- Implement rate limiting to prevent spam
- Consider adding CAPTCHA for production
- Use environment variables for sensitive data

## Next Steps
1. Choose an email service (Resend recommended)
2. Set up the environment variables
3. Update the API route with email sending
4. Test the complete flow
5. Consider adding email templates for better formatting

Your contact forms are now fully functional and ready for production use!
