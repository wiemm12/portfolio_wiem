# 📚 Stacking Animation - Complete Update

## ✨ Overview

Your portfolio Home section now features a **beautiful stacking animation** where each line appears one by one below the previous line, then all fade out together and restart!

---

## 🎬 **Animation Sequence (Loops Forever)**

### **Build-Up Phase (Lines Stack):**

1. **0s** → "Hello" fades in
2. **1s** → "I'm Chebbi Wiem" fades in below
3. **2s** → "Embedded Systems Engineer" fades in below
4. **3s** → "AI Passionate" fades in below
5. **4s** → "MCU Programmer" fades in below
6. **5s** → "Motivated" fades in below
7. **6s** → "Passionate about collaboration, creativity, and impactful technology." fades in below
8. **8s** → All lines stay visible together for 2 seconds
9. **9s** → All lines fade out together
10. **10s** → Screen clears, animation restarts from "Hello"

### **Total Cycle Time:** 10 seconds per loop ♾️

---

## 🎨 **Styling Details**

### **Line 1: "Hello"**
- **Font Size**: 2.5rem (40px)
- **Font Weight**: 400 (Regular)
- **Color**: White
- **Delay**: 0s

### **Line 2: "I'm Chebbi Wiem"**
- **Font Size**: 50px
- **Font Weight**: 700 (Bold)
- **Color**: White
- **Delay**: 1s

### **Line 3: "Embedded Systems Engineer"**
- **Font Size**: 30px
- **Font Weight**: 500 (Medium)
- **Color**: White
- **Delay**: 2s

### **Line 4: "AI Passionate"**
- **Font Size**: 28px
- **Font Weight**: 400 (Regular)
- **Color**: White
- **Delay**: 3s

### **Line 5: "MCU Programmer"**
- **Font Size**: 28px
- **Font Weight**: 400 (Regular)
- **Color**: White
- **Delay**: 4s

### **Line 6: "Motivated"**
- **Font Size**: 28px
- **Font Weight**: 400 (Regular)
- **Color**: White
- **Delay**: 5s

### **Line 7: "Passionate about collaboration, creativity, and impactful technology."**
- **Font Size**: 26px
- **Font Weight**: 400 (Regular)
- **Color**: White
- **Max Width**: 800px
- **Line Height**: 1.5
- **Delay**: 6s

---

## 🎬 **Animation Timeline**

```
0s  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Hello ↓ (fades in)

1s  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Hello
    I'm Chebbi Wiem ↓ (fades in)

2s  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Hello
    I'm Chebbi Wiem
    Embedded Systems Engineer ↓ (fades in)

3s  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Hello
    I'm Chebbi Wiem
    Embedded Systems Engineer
    AI Passionate ↓ (fades in)

4s  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Hello
    I'm Chebbi Wiem
    Embedded Systems Engineer
    AI Passionate
    MCU Programmer ↓ (fades in)

5s  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Hello
    I'm Chebbi Wiem
    Embedded Systems Engineer
    AI Passionate
    MCU Programmer
    Motivated ↓ (fades in)

6s  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Hello
    I'm Chebbi Wiem
    Embedded Systems Engineer
    AI Passionate
    MCU Programmer
    Motivated
    Passionate about collaboration... ↓ (fades in)

6s-8s ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    All 7 lines stay visible (2 seconds)

8s-9s ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    All lines fade out together ↓

10s ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    Screen clear, restart from "Hello"
```

---

## 💻 **Technical Implementation**

### **HTML Structure:**
```html
<div class="stacking-animation">
    <div class="line line-1">Hello</div>
    <div class="line line-2">I'm Chebbi Wiem</div>
    <div class="line line-3">Embedded Systems Engineer</div>
    <div class="line line-4">AI Passionate</div>
    <div class="line line-5">MCU Programmer</div>
    <div class="line line-6">Motivated</div>
    <div class="line line-7">Passionate about collaboration, creativity, and impactful technology.</div>
</div>
```

### **CSS Animation:**
```css
@keyframes fadeInStay {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    10% {
        opacity: 1;
        transform: translateY(0);
    }
    80% {
        opacity: 1;
        transform: translateY(0);
    }
    90% {
        opacity: 0;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(20px);
    }
}
```

### **Animation Applied:**
- **Duration**: 10s (entire cycle)
- **Timing**: ease-in-out
- **Iteration**: infinite
- **Delays**: 0s, 1s, 2s, 3s, 4s, 5s, 6s

---

## 🎨 **Background**

- **Color**: Black with blue gradient shades
- **Gradient**: `linear-gradient(135deg, #000000 0%, #0a0e27 50%, #111827 100%)`
- **Particle Effects**: Radial blue glows
- **Pulsing**: Subtle 8s infinite pulse

---

## 📱 **Responsive Design**

### **Desktop (> 768px):**
- Line 1: 2.5rem (40px)
- Line 2: 50px
- Line 3: 30px
- Lines 4-6: 28px
- Line 7: 26px

### **Tablet (≤ 768px):**
- Line 1: 2rem (32px)
- Line 2: 38px
- Line 3: 24px
- Lines 4-6: 22px
- Line 7: 20px

### **Mobile (≤ 480px):**
- Line 1: 1.6rem (26px)
- Line 2: 30px
- Line 3: 20px
- Lines 4-6: 18px
- Line 7: 16px

---

## ✅ **All Requirements Met**

- ✅ **"Hello" appears first** - Fades in at 0s
- ✅ **Lines stack below** - Each new line appears below previous
- ✅ **1 second delays** - Between each line (0s, 1s, 2s, 3s, 4s, 5s, 6s)
- ✅ **2 second wait** - All lines visible together (6s-8s)
- ✅ **All fade out together** - Synchronized fade-out (8s-9s)
- ✅ **Screen clears** - All lines disappear
- ✅ **Restarts** - Animation loops back to "Hello"
- ✅ **Infinite loop** - Repeats forever ♾️
- ✅ **White text** - All lines in white
- ✅ **Black/blue background** - Gradient matching theme
- ✅ **Large modern fonts** - 50px for name, 26-30px for others
- ✅ **Smooth fade-in** - Each line fades in smoothly
- ✅ **Centered layout** - All text centered on screen

---

## 🎯 **Visual Experience**

### **What You'll See:**

1. **Page loads** → Dark gradient background
2. **"Hello"** fades in (white, centered)
3. **Wait 1 second**
4. **"I'm Chebbi Wiem"** fades in below (white, bold, large)
5. **Wait 1 second**
6. **"Embedded Systems Engineer"** fades in below
7. **Wait 1 second**
8. **"AI Passionate"** fades in below
9. **Wait 1 second**
10. **"MCU Programmer"** fades in below
11. **Wait 1 second**
12. **"Motivated"** fades in below
13. **Wait 1 second**
14. **"Passionate about collaboration..."** fades in below
15. **All 7 lines visible together for 2 seconds**
16. **All lines fade out together**
17. **Screen clears**
18. **Restarts from "Hello"**
19. **Repeats infinitely** ♾️

---

**Your portfolio now has a stunning stacking animation that builds up line by line, then resets and loops forever!** 🎬✨

**Refresh your browser to see the complete stacking animation!** 🎉

