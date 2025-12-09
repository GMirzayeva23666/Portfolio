# ⚡ Portfolio Website - Quick Reference Card

## 📍 File Locations

```
portfolio/
├── index.html ..................... Home page
├── about.html ..................... About page
├── projects.html .................. Projects page
├── placeholder-generator.html ..... Image placeholder tool
│
├── assets/
│   ├── css/style.css ............. All styling
│   ├── js/script.js .............. All scripts
│   └── images/ ................... Your images go here
│
└── Documentation/
    ├── INDEX.md (you are here)
    ├── GETTING-STARTED.md ........ 5-min quick start
    ├── CUSTOMIZATION.md .......... Detailed customization
    └── README.md ................. Full documentation
```

## 🎬 5-Minute Quick Start

1. **Open** → Right-click `index.html` → "Open with Live Server"
2. **Preview** → Click through all pages
3. **Generate** → Open `placeholder-generator.html`, download images
4. **Customize** → Edit HTML with your info
5. **Deploy** → Push to GitHub / Netlify

## 📝 Key Things to Change

### Personal Info
- [ ] "John Doe" → Your Name
- [ ] "john@example.com" → Your Email
- [ ] "+1 (234) 567-890" → Your Phone
- [ ] "San Francisco" → Your Location

### Images (Recommended Sizes)
- [ ] `profile.jpg` - 300×300px (square, profile photo)
- [ ] `about.jpg` - 400×300px (about page photo)
- [ ] `project1.jpg` - 600×400px (main project image)
- [ ] `project2.jpg` - 600×400px (main project image)
- [ ] `project3-6.jpg` - 400×300px (additional projects)

### Skills & Content
- [ ] Update skills in about.html
- [ ] Add your projects in projects.html
- [ ] Update work experience timeline
- [ ] Add education details

### Colors (Optional)
In `assets/css/style.css`, change `:root` colors:
```css
--primary-color: #6366f1;        /* Main color */
--secondary-color: #ec4899;      /* Accent 1 */
--accent-color: #14b8a6;         /* Accent 2 */
```

## 🎨 Popular Color Combinations

**Professional Blue**
```css
--primary-color: #0066cc;
--secondary-color: #ff6600;
--accent-color: #00cc99;
```

**Tech Purple**
```css
--primary-color: #9333ea;
--secondary-color: #ec4899;
--accent-color: #0891b2;
```

**Corporate Red**
```css
--primary-color: #dc2626;
--secondary-color: #7c3aed;
--accent-color: #0891b2;
```

**Ocean Blue**
```css
--primary-color: #0369a1;
--secondary-color: #06b6d4;
--accent-color: #14b8a6;
```

## 🔍 Where to Find Things

| Need to Change | Look in | Search for |
|---|---|---|
| Your name | All HTML files | "John Doe" |
| Your email | index.html | "john@example.com" |
| Your phone | index.html | "+1 (234)" |
| Your skills | about.html | "Frontend" / "Backend" |
| Your projects | projects.html | "Project 1" / "Project 2" |
| Colors | assets/css/style.css | ":root" |
| Navigation text | All HTML files | `<nav>` section |
| Social links | index.html | "github.com" / "linkedin" |

## 🖼️ Image Checklist

- [ ] `assets/images/profile.jpg` - 300×300px
- [ ] `assets/images/about.jpg` - 400×300px
- [ ] `assets/images/project1.jpg` - 600×400px
- [ ] `assets/images/project2.jpg` - 600×400px
- [ ] `assets/images/project1-detail1.jpg` - 400×300px
- [ ] `assets/images/project1-detail2.jpg` - 400×300px
- [ ] `assets/images/project1-detail3.jpg` - 400×300px
- [ ] `assets/images/project2-detail1.jpg` - 400×300px
- [ ] `assets/images/project2-detail2.jpg` - 400×300px
- [ ] `assets/images/project2-detail3.jpg` - 400×300px
- [ ] `assets/images/project3.jpg` - 400×300px
- [ ] `assets/images/project4.jpg` - 400×300px
- [ ] `assets/images/project5.jpg` - 400×300px
- [ ] `assets/images/project6.jpg` - 400×300px

## 📱 Device Testing

Test on these screen sizes:
- [ ] Desktop (1200px+)
- [ ] Tablet (768px - 1199px)
- [ ] Mobile (Below 768px)

In VS Code: F12 → Toggle Device Mode (Ctrl+Shift+M)

## 🚀 Deployment Options

### GitHub Pages (Free)
```bash
git init
git add .
git commit -m "My portfolio"
git remote add origin <repo-url>
git push
# Enable Pages in repository settings
```

### Netlify (Free)
1. Sign up at netlify.com
2. Connect GitHub repo
3. Deploy automatically

### Vercel (Free)
1. Sign up at vercel.com
2. Import GitHub repo
3. Deploy automatically

## 🔗 Important Links

| Resource | URL |
|---|---|
| Image Compression | tinypng.com |
| Stock Photos | unsplash.com, pexels.com |
| Color Tools | coolors.co |
| GitHub Pages | pages.github.com |
| Netlify | netlify.com |
| Vercel | vercel.com |

## ✅ Pre-Launch Checklist

- [ ] All personal info updated
- [ ] All images added and optimized
- [ ] No broken links
- [ ] No spelling mistakes
- [ ] Mobile responsive (tested)
- [ ] Contact info works
- [ ] Social links correct
- [ ] Colors finalized
- [ ] Deployed to web
- [ ] Tested on live domain

## ❌ Common Mistakes to Avoid

❌ Using large, uncompressed images
✅ Compress to 100-300KB per image

❌ Breaking links in HTML
✅ Use relative paths like `about.html`

❌ Placing images in wrong folder
✅ Always use `assets/images/`

❌ Forgetting to link CSS/JS
✅ Check HTML `<link>` and `<script>` tags

❌ Not testing on mobile
✅ Always test responsive design

❌ Generic content
✅ Personalize with your actual info

## 📞 Emergency Troubleshooting

**Images don't show?**
- Check folder: `assets/images/`
- Check filename matches exactly
- Try JPG or PNG format

**Styling broken?**
- Clear cache: Ctrl+Shift+Delete
- Check: `assets/css/style.css` exists
- Verify CSS link in HTML

**Menu not working?**
- Check: `assets/js/script.js` exists
- Open console: F12
- Look for error messages

**Links don't work?**
- Use relative paths: `about.html`
- Not absolute: `file:///C:/...`

## 💡 Pro Tips

1. **Image Quality**: Use 72-96 DPI for web
2. **File Names**: Keep lowercase, no spaces
3. **Backup**: Use Git to track changes
4. **Analytics**: Add Google Analytics
5. **SEO**: Update meta descriptions
6. **Mobile**: Always test on phone
7. **Speed**: Compress all images
8. **Updates**: Add new projects regularly

## 📊 Before & After Sizes

| Item | Before | After |
|------|--------|-------|
| Profile JPG | 2MB | 150KB |
| Project PNGs | 3MB each | 200KB each |
| Styles | 1500 lines | Minified |
| Scripts | 400 lines | Minified |

## 🎯 Success Metrics

Your portfolio is successful when:
- ✅ Clean, professional appearance
- ✅ Mobile responsive
- ✅ Fast load times (<2s)
- ✅ All links working
- ✅ Easy to navigate
- ✅ Shows your best work
- ✅ Clear contact info
- ✅ Regular updates

## 🆘 When You Need Help

1. **Quick questions** → Check GETTING-STARTED.md
2. **How to change X?** → Check CUSTOMIZATION.md
3. **Full details** → Check README.md
4. **Can't find answer?** → Check INDEX.md
5. **Technical issue?** → Check browser console (F12)

## 🎓 Learning Path

- **Day 1**: Personalize content
- **Day 2**: Add images
- **Day 3**: Customize design
- **Day 4**: Test thoroughly
- **Day 5**: Deploy online
- **Day 6+**: Monitor & improve

## 📈 After Launch

- Share on LinkedIn
- Update monthly
- Add new projects
- Write blog posts
- Gather testimonials
- Monitor analytics
- Improve based on feedback

---

**Remember**: You have everything you need. This is just a quick reference!

For detailed help, read the full guides in this folder. 📚

**Ready to launch? Start here:** [GETTING-STARTED.md](GETTING-STARTED.md)
