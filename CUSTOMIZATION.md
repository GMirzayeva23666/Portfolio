# Portfolio Website - Customization Quick Start

## Quick Steps to Personalize Your Portfolio

### Step 1: Add Your Images

You need to add images to the `assets/images/` folder. Here are the required images:

#### Required Images:
1. **profile.jpg** - Your profile photo
   - Size: 300×300 pixels (square)
   - Format: JPG or PNG
   - Purpose: Main hero section image

2. **about.jpg** - A photo of yourself
   - Size: 400×300 pixels
   - Format: JPG or PNG
   - Purpose: About page introduction

3. **project1.jpg** - First project screenshot
   - Size: 600×400 pixels
   - Format: JPG or PNG

4. **project2.jpg** - Second project screenshot
   - Size: 600×400 pixels
   - Format: JPG or PNG

5. **project1-detail1.jpg, project1-detail2.jpg, project1-detail3.jpg**
   - Size: 400×300 pixels each
   - Details/screenshots of project 1

6. **project2-detail1.jpg, project2-detail2.jpg, project2-detail3.jpg**
   - Size: 400×300 pixels each
   - Details/screenshots of project 2

7. **project3.jpg through project6.jpg**
   - Size: 400×300 pixels each
   - Additional project thumbnails

### Step 2: Edit HTML Content

#### Update index.html:
```html
<!-- Find and replace these sections -->
<h1 class="hero-title">John Doe</h1>
<!-- Change to your name -->

<p class="hero-subtitle">Full-Stack Developer & Creative Designer</p>
<!-- Change to your title -->

<p class="hero-description">
    Welcome to my portfolio. I'm a passionate developer with expertise in building 
    modern web applications. I transform ideas into elegant, functional digital solutions.
</p>
<!-- Update with your introduction -->
```

**Update Contact Information:**
```html
<a href="mailto:john@example.com">john@example.com</a>
<!-- Replace with your email -->

<a href="tel:+1234567890">+1 (234) 567-890</a>
<!-- Replace with your phone -->

<p>San Francisco, California</p>
<!-- Replace with your location -->
```

**Update Social Links:**
```html
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourprofile">
<a href="https://twitter.com/yourprofile">
<a href="https://instagram.com/yourprofile">
```

#### Update about.html:
- Change your background and biography
- Update work experience in the timeline
- Add your education details
- Modify skills to match your expertise
- Update activities and interests

#### Update projects.html:
- Add your actual project titles
- Write project descriptions
- Update technology stacks
- Replace metrics with your actual data
- Update demo and GitHub links

### Step 3: Customize Colors

Edit `assets/css/style.css` - Find the `:root` section:

```css
:root {
    --primary-color: #6366f1;      /* Purple - main brand color */
    --secondary-color: #ec4899;    /* Pink - accent color */
    --accent-color: #14b8a6;       /* Teal - highlight color */
    --dark-bg: #0f172a;            /* Very dark blue */
    --light-bg: #f8fafc;           /* Light gray */
    --text-dark: #1e293b;          /* Dark text */
    --text-light: #64748b;         /* Light text */
}
```

**Color Palette Suggestions:**

Professional Blue:
```css
--primary-color: #0066cc;
--secondary-color: #ff6600;
--accent-color: #00cc99;
```

Modern Purple:
```css
--primary-color: #9333ea;
--secondary-color: #ec4899;
--accent-color: #0891b2;
```

Green Tech:
```css
--primary-color: #16a34a;
--secondary-color: #2563eb;
--accent-color: #0891b2;
```

### Step 4: Update Skills

In `assets/css/style.css`, update the skills grid. Replace skill categories:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <ul>
        <li>React</li>
        <li>Vue.js</li>
        <li>HTML5 & CSS3</li>
        <li>JavaScript</li>
        <li>Responsive Design</li>
    </ul>
</div>
```

### Step 5: Search and Replace Guide

Use Find & Replace (Ctrl+H) in your editor to quickly update:

| Find | Replace With |
|------|--------------|
| John Doe | Your Name |
| john@example.com | your-email@example.com |
| +1 (234) 567-890 | Your Phone |
| San Francisco, California | Your Location |
| 8 years | Your Experience |

### Step 6: Test Your Site

1. Open `index.html` in your web browser
2. Check all links work
3. Test on mobile (right-click → Inspect → Toggle Device Mode)
4. Verify all images display correctly
5. Click through all navigation links
6. Test the contact links

### Step 7: Deploy

Choose one of these options:

**GitHub Pages (Free):**
1. Create GitHub account
2. Create new repository
3. Push your portfolio files
4. Enable GitHub Pages in settings
5. Your site is live at `username.github.io/portfolio`

**Netlify (Free):**
1. Go to netlify.com
2. Connect GitHub repository
3. Automatic deployment on push
4. Get free domain or use custom domain

**Your Own Hosting:**
1. Get web hosting (GoDaddy, Bluehost, etc.)
2. Upload files via FTP
3. Point domain to hosting
4. Your site is live

## Image Creation Tips

### Using Free Tools:

**Profile Photo:**
- Use a professional headshot
- Good lighting, solid background
- 300×300 pixels minimum
- Crop to square format

**Project Screenshots:**
- Take high-quality screenshots of your work
- Show the full interface
- Include important features
- Resize to 600×400 pixels

**Online Tools:**
- Canva.com - Design images
- Unsplash.com - Free stock photos
- Pexels.com - Free quality images
- Remove.bg - Remove backgrounds

## Common Issues & Solutions

**Images not showing:**
- Check file paths are correct
- Ensure image files are in `assets/images/`
- Use lowercase filenames
- Use supported formats (JPG, PNG, WebP)

**Styling looks wrong:**
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure style.css is linked in HTML
- Check CSS file path is correct

**Navigation not working:**
- Ensure all HTML files are in root directory
- Check href paths in links
- Use relative paths like `about.html`

**Mobile menu not showing:**
- Check JavaScript file is linked
- Open browser console for errors
- Test in different browsers

## SEO Optimization

Add to each page's `<head>`:

```html
<meta name="description" content="Your Name - Portfolio & Projects">
<meta name="keywords" content="developer, designer, portfolio, projects">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Check out my latest projects and work">
<meta property="og:image" content="assets/images/profile.jpg">
```

## Next Steps

1. ✅ Add your personal information
2. ✅ Upload your images
3. ✅ Customize the colors
4. ✅ Update all project details
5. ✅ Test thoroughly
6. ✅ Deploy to the web
7. ✅ Share your portfolio!

## Keep It Updated

- Add new projects as you complete them
- Update skills as you learn new technologies
- Keep contact information current
- Review and update periodically
- Fix broken links
- Add testimonials from clients

---

**You're all set! Your portfolio is ready to showcase your work to the world! 🚀**
