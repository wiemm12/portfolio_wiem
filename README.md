# Personal Portfolio Website - Chebbi Wiem

Welcome to your personal portfolio website! This is a modern, responsive portfolio built with HTML, CSS, and JavaScript.

## 🎯 Hero Section

Your hero section features:
- **Left side**: Circular profile photo (350px diameter)
- **Right side**:
  - **Name**: Chebbi Wiem (large, bold, white text)
  - **Title**: Embedded Systems Engineer (bold, golden color)
  - **Description**: Your professional summary about AI and embedded systems
- **Responsive**: Adapts beautifully to mobile devices

## 📁 Project Structure

```
portfolio_wiem/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── images/             # Folder for your images (profile, projects, etc.)
└── README.md           # This file
```

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient colors and smooth animations
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **Multiple Sections**:
  - Home: Eye-catching hero section with circular profile photo
  - About: Tell your story
  - Experience: Professional timeline with interactive image carousel
  - Skills: Showcase your abilities
  - Projects: Display your work
  - Contact: Contact form and social links
- **Interactive Image Carousel**: Swipe/click through project images
- **Scroll Animations**: Elements fade in as you scroll
- **Scroll to Top Button**: Easy navigation back to the top

## 🚀 How to Use

1. **Open the website**: Simply double-click on `index.html` to open it in your browser
2. **Customize your content**: Edit the `index.html` file to add your personal information
3. **Add your images**: Place your photos in the `images` folder and update the image paths

## ✏️ Customization Guide

### 1. Update Your Personal Information

Open `index.html` and replace the following:

- **Your Name**: Search for "Wiem" and replace with your name
- **Email**: Replace "your.email@example.com" with your actual email
- **Phone**: Replace "+123 456 7890" with your phone number
- **Location**: Replace "Your City, Country" with your location
- **About Text**: Update the paragraphs in the About section with your story

### 2. Add Your Profile Picture

**IMPORTANT: This is already set up for you!**

1. Save your profile picture in the `images` folder with the name `profile.jpg`
   - Supported formats: JPG, PNG, JPEG
   - Recommended: Square image (e.g., 500x500 pixels or larger)
   - The image will automatically display in a circular frame

2. If your image has a different name (e.g., `my-photo.png`), update line 37 in `index.html`:
   ```html
   <img src="images/profile.jpg" alt="Chebbi Wiem">
   ```
   Change to:
   ```html
   <img src="images/my-photo.png" alt="Chebbi Wiem">
   ```

3. Until you add your photo, a placeholder icon will be displayed

### 3. Add Experience Images (QuetraTech Project)

Your QuetraTech experience includes an **interactive image carousel** with 2 images:

1. **System Photo** (Hardware Device):
   - Save as: `images/experience/quetratech-system.jpg`
   - Photo of your ESP32 (LilyGO) and SIM800L setup

2. **App Screenshot** (Flutter App):
   - Save as: `images/experience/quetratech-app.jpg`
   - Screenshot of your Flutter driver app interface

**Carousel Features:**
- Click arrow buttons to navigate
- Click indicator dots to jump to specific images
- Swipe left/right on mobile devices
- Use keyboard arrows (left/right) for navigation
- Smooth transitions and animations

**Image Recommendations:**
- Hardware photos: 800x600px to 1200x900px (landscape)
- App screenshots: 400x800px to 600x1200px (portrait)
- Formats: JPG, PNG, or WebP
- Keep file size under 2MB

See `images/experience/README.md` for detailed instructions!

### 4. Update Your Projects

In the Projects section, update each project card with:
- Project title
- Project description
- Technologies used (tags)
- Project link (replace `#` with actual URL)

### 4. Add Project Images

1. Save project screenshots in the `images` folder
2. Replace the icon placeholders with actual images:
   ```html
   <div class="project-image">
       <img src="images/project1.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
   </div>
   ```

### 5. Update Social Media Links

In the Contact section, replace `#` with your actual social media URLs:
- LinkedIn: `https://linkedin.com/in/your-profile`
- GitHub: `https://github.com/your-username`
- Twitter: `https://twitter.com/your-handle`
- Instagram: `https://instagram.com/your-handle`

### 6. Customize Colors

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --dark-color: #1e293b;         /* Dark text */
    --light-color: #f8fafc;        /* Light background */
}
```

### 7. Update Skills

In the Skills section, you can:
- Change skill titles and descriptions
- Add more skill cards by copying and pasting existing ones
- Change icons (find more at [Font Awesome](https://fontawesome.com/icons))

## 🌐 Publishing Your Website

### Option 1: GitHub Pages (Free)
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository named `your-username.github.io`
3. Upload all your files to the repository
4. Your site will be live at `https://your-username.github.io`

### Option 2: Netlify (Free)
1. Create an account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

### Option 3: Vercel (Free)
1. Create an account at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## 📱 Testing Your Website

1. **Desktop**: Open `index.html` in Chrome, Firefox, or Edge
2. **Mobile View**: Press F12 in your browser, then click the mobile device icon
3. **Different Browsers**: Test in multiple browsers to ensure compatibility

## 🎯 Tips for Beginners

- **Don't be afraid to experiment**: Try changing colors, text, and layouts
- **Save often**: Press Ctrl+S (or Cmd+S on Mac) to save your changes
- **Refresh your browser**: Press F5 to see your changes after saving
- **Use browser developer tools**: Press F12 to inspect elements and debug
- **Start small**: Make one change at a time and test it

## 🆘 Need Help?

- **HTML Tutorial**: [W3Schools HTML](https://www.w3schools.com/html/)
- **CSS Tutorial**: [W3Schools CSS](https://www.w3schools.com/css/)
- **JavaScript Tutorial**: [W3Schools JavaScript](https://www.w3schools.com/js/)
- **Icons**: [Font Awesome](https://fontawesome.com/icons)

## 📝 Next Steps

1. ✅ Customize all text content with your information
2. ✅ Add your profile picture and project images
3. ✅ Update social media links
4. ✅ Test on different devices
5. ✅ Deploy your website online

## 🎉 Congratulations!

You now have a professional portfolio website! Keep updating it as you learn and grow.

---

**Built with ❤️ for Wiem**

