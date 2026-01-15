# Premium Portfolio Website

A beautifully designed personal portfolio website showcasing HCI research and creative technology projects.

## Features

✨ **Premium Design**
- Clean, minimalist aesthetic with modern UI principles
- Smooth animations and interactive elements
- Fully responsive across all devices

🎨 **Design System**
- Typography: Inter font from Google Fonts
- Color Palette:
  - Background: Clean White (#FFFFFF)
  - Primary Accent: Violet (#5B4DFF)
  - Text: Dark Gray (#111827) for headings
  - Body: Slate Gray (#475569)

🎯 **Key Components**
- **Hero Section**: Text left, image right layout with perspective tilt effect on hover
- **Project Cards**: Minimalist white cards with subtle shadows that lift on hover
- **Category Badges**: Overlay badges on project images
- **Smooth Navigation**: Sticky navbar with smooth scroll behavior

💻 **Tech Stack**
- HTML5 semantic markup
- CSS3 (Flexbox/Grid layouts)
- Mobile-first responsive design
- No external dependencies (pure HTML/CSS)

## Project Structure

```
├── index.html              # Main website
├── styles.css             # All styling and animations
├── assets/                # Image assets (optional)
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment workflow
└── README.md              # This file
```

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vibe-coding-test.git
   cd vibe-coding-test
   ```

2. **Open in browser**
   - Open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     python -m http.server 8000
     # Visit http://localhost:8000
     ```

## Customization

### Update Content
Edit `index.html` to customize:
- Your name and role
- Bio and description
- Project details
- Social links and contact info

### Modify Colors
Update CSS variables in `styles.css`:
```css
:root {
    --color-accent: #5B4DFF;  /* Change primary color */
    --color-dark: #111827;     /* Change text color */
    /* ... more variables */
}
```

### Add Projects
Add more project cards by duplicating the `.project-card` block:
```html
<div class="project-card">
    <div class="card-image">
        <!-- SVG or image here -->
    </div>
    <div class="card-content">
        <h3>Project Title</h3>
        <p>Description...</p>
        <div class="card-meta">
            <span class="tag">Tag</span>
        </div>
    </div>
</div>
```

## GitHub Pages Deployment

The repository includes an automated GitHub Pages deployment workflow.

### Setup Instructions

1. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Set source to `GitHub Actions`

2. **Automatic Deployment**
   - Push to `main` branch
   - Workflow automatically deploys to GitHub Pages
   - Visit `https://yourusername.github.io/vibe-coding-test`

### Workflow Details
The `.github/workflows/deploy.yml` file handles:
- Automatic deployment on push to main branch
- Building and uploading artifacts to GitHub Pages
- Setting up GitHub Pages environment

## Features Breakdown

### Hero Section
- Gradient text effect on heading
- Left-aligned text content with CTA buttons
- Right-side image with perspective 3D transform
- Image straightens and glows on hover
- Smooth fade-in animations on page load

### Project Cards
- 3-column responsive grid (adapts to mobile)
- Hover lift effect with shadow enhancement
- Category badges with glass-morphism effect
- Tag system for project metadata
- Smooth transitions on all interactive elements

### Responsive Design
- **Desktop (1024px+)**: Full multi-column layouts
- **Tablet (768px - 1023px)**: 2-column layouts, optimized spacing
- **Mobile (<768px)**: Single column, touch-friendly buttons
- **Small Mobile (<480px)**: Minimal padding, maximum readability

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Zero external JavaScript dependencies
- Minimal CSS with efficient selectors
- SVG graphics for scalable assets
- Optimized animations using transform and opacity
- Fast page load with no render-blocking resources

## Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy (h1 → h3)
- Color contrast meets WCAG standards
- Keyboard navigation support
- Focus indicators on interactive elements

## License

This project is open source and available under the MIT License.

## Support

For questions or suggestions, please open an issue in the repository.

---

**Built with ❤️ as a premium portfolio template**