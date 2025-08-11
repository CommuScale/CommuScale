# CommuScale - High-Performance Business Scaling Website

A blazingly fast, modern website built with Astro, React, and Tailwind CSS featuring smooth animations, gradient themes, and mobile-first design.

## 🚀 Features

- **Lightning Fast Performance**: Built with Astro for optimal loading speeds
- **Smooth Animations**: Framer Motion powered animations with performance optimization
- **Gradient Theme**: Dynamic color transitions based on scroll position (#b855f2 to #c659fc)
- **Mobile Optimized**: Responsive design for mobile and iPad with touch-friendly interactions
- **Floating Navigation**: Round navbar with gradient styling and smart hide/show behavior
- **Preloader**: Beautiful animated preloader with smooth transitions
- **VSL Section**: Video Sales Letter placeholder with modern design
- **Services Showcase**: Detailed service offerings with animated cards
- **Book Call Integration**: Calendly integration ready for scheduling
- **Contact Forms**: Multiple contact options with modern styling

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Fast, modern static site generator
- **UI Library**: React with TypeScript
- **Styling**: Tailwind CSS with custom gradients and animations
- **Animations**: Framer Motion for smooth, performant animations
- **Icons**: Lucide React for crisp, modern icons
- **Font**: Inter from Google Fonts for optimal readability

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd commuscale-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors & Gradients

The site uses a primary gradient theme from `#b855f2` to `#c659fc`. To customize:

1. **Update CSS variables** in `src/styles/global.css`
2. **Modify gradient classes** in Tailwind configuration
3. **Update component gradients** in individual React components

### Content Updates

- **Hero Section**: Edit `src/components/HeroSection.tsx`
- **Services**: Modify the services array in `src/components/ServicesSection.tsx`
- **Contact Info**: Update contact details in `src/components/ContactSection.tsx`

### Calendly Integration

Replace the Calendly placeholder in `src/components/ContactSection.tsx` and `src/components/BookCallSection.tsx` with your actual Calendly embed code.

## 📱 Mobile Optimization

The site includes several mobile-specific optimizations:

- **Viewport Height Handling**: Accounts for mobile browser UI
- **Touch Targets**: Minimum 44px touch targets for accessibility
- **Safe Area Support**: Handles device notches and rounded corners
- **Performance Monitoring**: Built-in Core Web Vitals tracking
- **Reduced Motion Support**: Respects user accessibility preferences

## 🔧 Performance Features

- **Lazy Loading**: Components load only when needed
- **Image Optimization**: Astro's built-in image optimization
- **CSS Purging**: Unused CSS automatically removed
- **Bundle Splitting**: Automatic code splitting for optimal loading
- **Preloading**: Critical resources preloaded for faster initial render

## 📊 SEO & Analytics

The site is optimized for search engines with:

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Meta Tags**: Complete Open Graph and Twitter card support
- **Performance**: Fast loading speeds improve SEO rankings
- **Accessibility**: WCAG compliant design patterns

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Traditional Hosting
```bash
npm run build
# Upload the 'dist' folder to your web server
```

## 🔨 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 📁 Project Structure

```
commuscale-site/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── App.tsx     # Main app component
│   │   ├── Preloader.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── BookCallSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FloatingNavbar.tsx
│   │   └── ScrollColorTransition.tsx
│   ├── layouts/         # Astro layouts
│   ├── pages/          # Astro pages
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎯 Key Components

### Preloader
- Animated loading screen with CommuScale branding
- Smooth transition to main content
- Customizable duration and animations

### Floating Navbar
- Gradient background with backdrop blur
- Hide/show on scroll behavior
- Mobile-responsive with hamburger menu
- Book Now button prominently displayed

### Hero Section
- Gradient text effects for key messaging
- Statistics showcase with animated counters
- VSL (Video Sales Letter) section with play button
- Scroll indicator for user guidance

### Services Section
- Grid layout with hover animations
- Feature lists with checkmark icons
- Call-to-action buttons for each service
- Responsive design for all screen sizes

### Contact Integration
- Multiple contact methods
- Calendly integration placeholder
- Contact form with validation ready
- Social proof with testimonials

## 💡 Customization Tips

1. **Replace placeholders**: Update all placeholder content with your actual business information
2. **Add real images**: Replace gradient placeholders with actual photos/videos
3. **Integrate Calendly**: Add your Calendly embed code for live booking
4. **Update contact info**: Change email, phone, and address in multiple components
5. **Customize animations**: Adjust Framer Motion parameters for your preferred feel

## 🐛 Troubleshooting

### Development Server Issues
- Ensure Node.js version 18+ is installed
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Build Issues
- Check TypeScript errors: `npm run astro check`
- Verify all imports are correct
- Ensure all dependencies are installed

### Performance Issues
- Enable production mode for testing: `npm run build && npm run preview`
- Check browser dev tools for performance bottlenecks
- Optimize images and reduce bundle size if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for CommuScale. All rights reserved.

---

Built with ❤️ using Astro, React, and modern web technologies for optimal performance and user experience.