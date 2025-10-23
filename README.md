# LinkedIn Text Formatter - Landing Page

A professional one-page website for the LinkedIn Text Formatter Chrome extension.

## Live Demo

To view this landing page live using GitHub Pages, you have two options:

### Option 1: Enable GitHub Pages from this branch

1. Go to your repository on GitHub: `https://github.com/kreiseder-it-services/Playground`
2. Navigate to **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `claude/linkedin-text-formatter-landing-011CULsvnei6tGzKHEK8qcRg`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait a few minutes for GitHub to build and deploy
6. Your site will be available at: `https://kreiseder-it-services.github.io/Playground/`

### Option 2: Merge to main branch first (Recommended)

1. Create a Pull Request to merge this branch to `main`
2. After merging, follow the same steps above but select `main` as the branch
3. This keeps your main branch as the production version

**Note:** Once enabled, any changes pushed to the selected branch will automatically update the live site!

## Features

- Modern, responsive design
- LinkedIn-inspired color scheme
- Interactive animations
- Email signup form for early access
- Browser mockup showcase
- Mobile-friendly layout

## Local Development

Simply open `index.html` in your web browser to view the page locally.

## Files

- `index.html` - Main landing page
- `styles.css` - Styling and responsive design
- `script.js` - Interactive functionality

## Technologies

- Pure HTML5
- CSS3 with animations
- Vanilla JavaScript
- Formspree for email notifications

## Email Notification Setup

The landing page includes a signup form that sends subscriber emails directly to your inbox using **Formspree** (free service).

### Setup Instructions (5 minutes):

1. **Sign up for Formspree (Free)**
   - Go to: https://formspree.io/register
   - Create a free account using your email: `office@kreiseder.org`
   - Verify your email address

2. **Create a New Form**
   - After logging in, click **"+ New Form"**
   - Name it: `LinkedIn Text Formatter Waitlist`
   - Click **"Create Form"**

3. **Get Your Form Endpoint**
   - Copy the form endpoint URL (looks like: `https://formspree.io/f/xyzabc123`)
   - The endpoint contains your unique Form ID

4. **Update index.html**
   - Open `index.html` (line 220)
   - Find: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual Form ID from step 3
   - Example: `action="https://formspree.io/f/xyzabc123"`

5. **Save and Deploy**
   - Commit and push your changes
   - The form is now live!

### What happens when someone signs up:

✅ You receive an email at `office@kreiseder.org` with subject: "New LinkedIn Text Formatter Signup!"
✅ The email contains the subscriber's email address
✅ Subscriber gets an auto-response confirming their signup
✅ User sees a success message on the page

### Free Tier Limits:
- Formspree Free: 50 submissions/month
- Upgrade to Formspree Gold ($10/mo) for unlimited submissions if needed

### Alternative: Manual Testing
If you want to test the form immediately without setting up Formspree:
- The form will store emails in browser's localStorage
- Check the browser console to see submitted emails
- You can export them later from localStorage
