# Experience Images Guide

This folder contains images for your professional experience section.

## 📁 Required Images

### QuetraTech Startup Images

For the QuetraTech experience, you need **2 images** that will appear in an interactive carousel:

1. **quetratech-system.jpg** - Photo of the hardware device/system
   - The ESP32 (LilyGO) and SIM800L setup
   - GPS tracking hardware
   - Recommended size: 800x600px or similar aspect ratio

2. **quetratech-app.jpg** - Screenshot of the Flutter app interface
   - The driver app you developed
   - Firebase integration interface
   - Recommended size: 400x800px (mobile app screenshot)

## 📸 Image Specifications

### Recommended Formats:
- JPG/JPEG (preferred for photos)
- PNG (preferred for screenshots with transparency)
- WebP (for smaller file sizes)

### Recommended Sizes:
- **Hardware photos**: 800x600px to 1200x900px
- **App screenshots**: 400x800px to 600x1200px (portrait)
- **Maximum file size**: Keep under 2MB for faster loading

### Image Quality Tips:
- Use good lighting for hardware photos
- Ensure screenshots are clear and readable
- Crop unnecessary parts
- Use landscape orientation for hardware, portrait for mobile apps

## 🎨 How the Carousel Works

When visitors view your QuetraTech experience:
1. They'll see the first image (system photo) by default
2. They can click the **arrow buttons** to navigate between images
3. They can click the **indicator dots** at the bottom to jump to a specific image
4. On mobile, they can **swipe left/right** to change images
5. They can use **keyboard arrows** (left/right) to navigate

## 📝 Adding Your Images

### Step 1: Prepare Your Images
- Take/capture your images
- Edit and crop them as needed
- Optimize file size if needed

### Step 2: Save Images in This Folder
Save your images with these exact names:
```
images/experience/quetratech-system.jpg
images/experience/quetratech-app.jpg
```

### Step 3: Refresh Your Portfolio
- Open your portfolio in the browser
- Scroll to the Experience section
- Your images will automatically appear in the carousel!

## 🔄 Placeholder Behavior

If you haven't added images yet:
- A placeholder icon will be displayed
- The carousel will still work
- Once you add images, they'll automatically replace the placeholders

## 🎯 Future Experiences

If you want to add images to other experiences (Sipraw or ACTIA):

1. Add the images to this folder with descriptive names
2. Edit `index.html` in the respective experience card
3. Copy the gallery structure from QuetraTech experience
4. Update the image paths

Example for Sipraw:
```html
<div class="experience-gallery">
    <div class="gallery-container">
        <div class="gallery-slides">
            <div class="gallery-slide active">
                <img src="images/experience/sipraw-system.jpg" alt="Sipraw System">
            </div>
        </div>
    </div>
</div>
```

## ✅ Checklist

- [ ] Take/capture hardware system photo
- [ ] Take screenshot of Flutter app
- [ ] Edit and optimize images
- [ ] Save as `quetratech-system.jpg` in this folder
- [ ] Save as `quetratech-app.jpg` in this folder
- [ ] Refresh portfolio to see images
- [ ] Test carousel navigation (arrows, dots, swipe)

## 🆘 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in the correct folder
- Check file format (JPG, PNG, WebP)
- Try refreshing the browser (Ctrl+F5)

**Images look stretched?**
- Use recommended aspect ratios
- Hardware photos: landscape (4:3 or 16:9)
- App screenshots: portrait (9:16)

**File too large?**
- Compress images using online tools
- Recommended: TinyPNG, Squoosh, or ImageOptim
- Target: Under 500KB per image

---

Need help? Check the main README.md in the project root!

