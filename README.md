# Personal Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. This portfolio showcases your work, skills, background, and provides a way for potential clients to get in touch.

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects showcase page
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Image assets
│       ├── profile.jpg     # Profile photo (recommended: 300x300px)
│       ├── about.jpg       # About section image
│       ├── project1.jpg    # Project 1 main image
│       ├── project2.jpg    # Project 2 main image
│       ├── project1-detail1.jpg
│       ├── project1-detail2.jpg
│       ├── project1-detail3.jpg
│       ├── project2-detail1.jpg
│       ├── project2-detail2.jpg
│       ├── project2-detail3.jpg
│       ├── project3.jpg    # Additional projects
│       ├── project4.jpg
│       ├── project5.jpg
│       └── project6.jpg
└── README.md               # This file
```

## 🚀 Features

### Pages Included

1. **Home Page (index.html)**
   - Hero section with profile photo and introduction
   - Featured projects showcase
   - Skills & technologies section
   - Contact section with social links

2. **About Page (about.html)**
   - Detailed biography
   - Work experience timeline
   - Education history
   - Detailed skills with progress bars
   - Activities and interests

3. **Projects Page (projects.html)**
   - Large detailed project cards with multiple images
   - Smaller project cards for additional projects
   - Project descriptions, technologies, and impact metrics
   - Links to live demos and source code

### Key Functionality

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Mobile hamburger menu
- ✅ Smooth scrolling navigation
- ✅ Animated elements on scroll
- ✅ Skill progress bars
- ✅ Contact information section
- ✅ Social media links
- ✅ Modern gradient design
- ✅ Accessibility features
- ✅ Performance optimized

## 🎨 Design Features

- **Color Scheme**: Purple, pink, and teal gradient theme
- **Typography**: Clean, modern sans-serif fonts
- **Layout**: Grid-based responsive design
- **Animations**: Smooth transitions and fade-in effects
- **Icons**: Font Awesome icons for visual enhancement

## 📝 Customization Guide

### 1. Update Personal Information

Edit the following files to replace placeholder content:

**index.html** (Home Page):
```html
<h1 class="hero-title">Your Name Here</h1>
<p class="hero-subtitle">Your Title Here</p>
<p class="hero-description">Your introduction text here</p>
```

**about.html**:
```html
<h1>About Me</h1>
<!-- Update your background, experience, education -->
```

**projects.html**:
```html
<h2>Your Project Title</h2>
<p>Your project description</p>
```

### 2. Add Images

Replace the placeholder images in the `assets/images/` folder:

- `profile.jpg` - Your profile photo (recommended: 300x300px or larger)
- `about.jpg` - A photo of yourself (recommended: 400x300px)
- `project*.jpg` - Screenshots or images of your projects

**Image Size Recommendations:**
- Profile image: 300×300px (square)
- Project main images: 600×400px
- Project detail images: 400×300px
- Minimum width: 800px for best quality

### 3. Update Contact Information

In **index.html**, update the contact section:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+1234567890">Your Phone Number</a>
<p>Your City, Your Country</p>
```

Update social media links:
```html
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://twitter.com/yourprofile">Twitter</a>
<a href="https://instagram.com/yourprofile">Instagram</a>
```

### 4. Customize Colors

Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --accent-color: #14b8a6;       /* Highlight color */
    --text-dark: #1e293b;          /* Dark text */
    --text-light: #64748b;         /* Light text */
}
```

### 5. Update Skills Section

Edit the skills grid in **index.html** or **about.html**:
```html
<div class="skill-category">
    <h3>Your Skill Category</h3>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
    </ul>
</div>
```

### 6. Add Your Projects

Edit **projects.html** to showcase your actual projects:
- Update project titles and descriptions
- Replace placeholder images
- Update technology stacks
- Add real links to live demos and GitHub repos
- Include relevant metrics and impacts

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6)** - Interactive features
- **Font Awesome** - Icon library
- **Responsive Design** - Mobile-first approach

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment Options

### 1. GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then enable GitHub Pages in repository settings (deploy from main branch).

### 2. Netlify
- Connect your GitHub repository
- Automatic deployments on push
- Free hosting with custom domain support

### 3. Vercel
- Similar to Netlify
- Optimized for static sites
- Free hosting tier available

### 4. Traditional Hosting
- Upload files via FTP to your web host
- Ensure all file paths are correct
- Test all links and functionality

## 📊 SEO Optimization Tips

1. Update meta tags in each HTML file
2. Add descriptive alt text to all images
3. Use semantic HTML5 elements
4. Optimize images for web (compress before uploading)
5. Add a sitemap and robots.txt
6. Use descriptive page titles and descriptions

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Color contrast compliance
- Focus visible states
- Alt text for images
- Screen reader friendly

## 🚀 Performance Tips

1. Optimize images (use tools like TinyPNG or ImageOptim)
2. Minimize CSS and JavaScript
3. Use lazy loading for images (can be added to script.js)
4. Leverage browser caching
5. Use a CDN for static assets

## 📧 Maintenance

- Update project descriptions regularly
- Add new projects as they're completed
- Keep skills section current
- Update dates and experience
- Review and fix any broken links
- Test on different devices and browsers

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support

If you encounter any issues:
1. Check that all images are in the correct paths
2. Ensure all HTML files are in the root directory
3. Verify CSS and JavaScript files are properly linked
4. Test in different browsers
5. Check browser console for errors (F12 Developer Tools)

## 💡 Future Enhancements

Consider adding:
- Contact form with backend integration
- Blog section
- Dark mode toggle
- Resume/CV download
- Project filtering by category
- Search functionality
- Comments on projects
- Newsletter signup

---

**Happy portfolio building! 🎉**

For questions or improvements, feel free to customize this template to your needs.
