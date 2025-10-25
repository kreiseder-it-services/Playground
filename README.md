# PostCraft for LinkedIn - Landing Page

A modern, conversion-optimized landing page for the PostCraft Chrome extension.

## Overview

PostCraft is a Chrome extension that seamlessly integrates into LinkedIn, providing powerful text formatting and AI-powered features to create engaging, professional posts.

## Live Demo

To view this landing page live using GitHub Pages:

### Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/kreiseder-it-services/Playground`
2. Navigate to **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `claude/linkedin-text-formatter-landing-011CULsvnei6tGzKHEK8qcRg`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait a few minutes for GitHub to build and deploy
6. Your site will be available at: `https://kreiseder-it-services.github.io/Playground/`

**Note:** Once enabled, any changes pushed to the selected branch will automatically update the live site!

## Features

### Website Sections

1. **Hero Section** - Eye-catching introduction with CTAs to Chrome Web Store
2. **Stats Section** - Social proof with user counts and metrics
3. **Demo Carousel** - Interactive image carousel showcasing the extension
4. **Features Section** - Split into Free and PRO tiers
5. **Pricing** - Side-by-side comparison of Free vs Pro (€50/month)
6. **How It Works** - 3-step process
7. **Testimonials** - Social proof from placeholder users
8. **FAQ** - Accordion-style frequently asked questions
9. **Final CTA** - Strong call-to-action to download
10. **Footer** - Navigation and links

### Design Features

- Purple gradient color scheme matching the extension
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Interactive carousel with auto-advance
- FAQ accordion functionality
- Animated statistics counters
- Touch/swipe support for mobile carousel
- Keyboard navigation support

## Setup Instructions

### 1. Add Screenshots

Place your 4 screenshot images in the `images/` folder:
- `screenshot1.png` - PostCraft popup interface
- `screenshot2.png` - Text formatting example
- `screenshot3.png` - AI Rephrase feature
- `screenshot4.png` - Emojify and Hashtags features

**Recommended specs:** 1200x800px, PNG format, optimized for web

### 2. Customize Content

#### Update Pricing
Edit `index.html` line 354 to change the price

#### Update Statistics
Edit `index.html` lines 139-154 to update user counts and metrics

#### Update Testimonials
Edit `index.html` lines 415-444 to customize testimonial content

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # Interactive functionality
├── images/            # Screenshot images folder
│   └── README.md      # Instructions for adding images
└── README.md          # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No dependencies
- **Google Fonts** - Inter font family

## Color Palette

```css
Primary Purple: #8B5CF6
Dark Purple: #7C3AED
Light Purple: #A78BFA
Secondary Blue: #6366F1
Accent Pink: #EC4899
LinkedIn Blue: #0A66C2
Pro Yellow: #FCD34D
```

## Interactive Features

### Carousel
- Auto-advance every 5 seconds
- Previous/Next buttons
- Indicator dots
- Keyboard navigation (arrow keys)
- Touch/swipe support

### FAQ Accordion
- Click to expand/collapse
- Only one item open at a time
- Keyboard support (Escape to close)

### Scroll Animations
- Feature cards fade in on scroll
- Steps slide in from left
- Pricing cards fade up
- Stats cards scale in

## Chrome Web Store Link

The extension is available at:
```
https://chromewebstore.google.com/detail/text-formatter-for-linked/eiakhjhplfajenfencccljodfdcgcplo
```

## License

Copyright © 2024 PostCraft for LinkedIn. All rights reserved.
