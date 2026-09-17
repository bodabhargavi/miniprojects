# AURA Smartwatch — Responsive Product Landing Page

A modern, premium, dark-themed responsive product landing page for **AURA Smartwatch**, built as an academic **Web Development Mini Project 2**.

> *"Your day. Your data. Your AURA."*

---

## 📌 Project Overview

**AURA** is a fictional premium smartwatch brand designed to deliver a modern, startup-grade web experience. This project demonstrates core front-end web development principles including semantic HTML5 structure, custom CSS3 styling, Flexbox layout management, CSS Grid responsive card layouts, and Tailwind CSS utility-first styling.

The UI features a minimal dark aesthetic (`zinc-950` background), glowing ambient lights, glassmorphism cards (`backdrop-blur`), smooth scrolling, and micro-interactions.

---

## ✨ Features

- 📱 **Fully Responsive Layout**: Fits mobile phones, tablets, laptops, and wide desktop screens seamlessly without horizontal scroll.
- 🎨 **Premium Aesthetic**: Minimalist dark theme with cyan/blue gradient accents, glassmorphism components, floating animations, and soft shadows.
- 🍔 **Interactive Navigation**: Sticky backdrop-blur navigation bar with smooth scrolling links and a mobile hamburger menu overlay.
- ⚡ **Performance & Zero Build Overhead**: Integrated via Tailwind CSS CDN and standalone CSS3 script for direct browser execution.
- ⌚ **Self-Contained Scalable Visuals**: High-resolution vector SVG smartwatch graphic embedded locally.
- ♿ **Semantic Accessibility**: Clean HTML5 structure using proper sectioning tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags, metadata, accessibility attributes (`aria-expanded`, `aria-label`).
- **CSS3**: Custom properties (variables), keyframe floating animations, backdrop filter, custom scrollbars, gradient text styling.
- **Flexbox**: Navigation bar, button groups, metrics rows, footer copyright row, card alignment.
- **CSS Grid**: Responsive 5-card feature grid, testimonial reviews grid, two-column hero/benefit layouts.
- **Tailwind CSS**: Utility classes for responsive design, color palettes, spacing, and typography.
- **Vanilla JavaScript**: DOM manipulation for mobile navbar toggle, backdrop scroll shadow, and smooth scrolling anchor handlers.

---

## 📄 Sections Included

1. **Navigation Bar**: Logo, desktop menu links, CTA button, sticky blur header, mobile hamburger toggle.
2. **Hero Section**: Headline, tagline, description, dual action buttons (Buy Now / Explore Features), live metrics badge, floating smartwatch product visual.
3. **Features Section**: 5 Feature cards (Health Tracking, 7-Day Battery, Water Resistant, Smart Notifications, Sleep Tracking) in a responsive grid.
4. **Benefits Section**: Two-column layout showcasing *Stay Active*, *Sleep Better*, and *Stay Connected* alongside an interactive product progress visual.
5. **Testimonials / Reviews Section**: 3 User review cards with 5-star ratings (Ananya R., Rahul M., Priya K.).
6. **Pricing / CTA Section**: Prominent highlight card with original price (₹9,999), current discounted price (**₹7,999**), perks list, and interactive purchase button.
7. **Footer**: Brand description, Product/Company/Social links, and copyright text.

---

## 📐 Responsive Design Details

| Breakpoint | Screen Width | Grid Columns / Layout |
|---|---|---|
| **Mobile** | `< 768px` | 1 Column, vertical menu toggle, stacked hero text + image |
| **Tablet** | `768px – 1024px` | 2 Column Feature Grid, horizontal navbar, side-by-side elements |
| **Desktop** | `> 1024px` | 3 Column Feature & Testimonial Grids, 12-column Hero/Benefit split |

---

## 📁 Project Structure

```text
responsive_product_page/
│
├── index.html            # Main semantic HTML5 document with Tailwind & CSS integration
├── css/
│   └── style.css         # Custom CSS3 styles, keyframe animations, glassmorphic filters
├── js/
│   └── script.js         # Mobile navigation toggle & scroll interaction script
├── images/
│   └── smartwatch.svg    # Vector smartwatch product visual asset
└── README.md             # Project documentation & viva guide
```

---

## 🚀 How to Run the Project

### Option 1: Direct Browser (Simplest Method)
1. Double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. The page will load immediately using CDN-hosted Tailwind CSS.

### Option 2: Live Server (VS Code Extension)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (if not already installed).
3. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🖼️ Screenshots Placeholder

| Hero Section | Feature Cards | Pricing CTA |
|---|---|---|
| *(Add hero screenshot here)* | *(Add features screenshot here)* | *(Add pricing screenshot here)* |

---

## 💡 Future Improvements

- [ ] Add interactive watch face color switcher (Silver, Space Gray, Rose Gold).
- [ ] Implement dark/light theme toggle.
- [ ] Connect pricing CTA to an actual payment gateway sandbox (Razorpay/Stripe).
- [ ] Include interactive watch screen simulator with tabbed metrics.

---

## 🎓 Viva Questions & Academic Implementation Guide

During your project viva, use these key points to explain your code:

### 1. HTML5 Semantics
- **Question**: *"Where have you used semantic HTML5 in this project?"*
- **Answer**: *"I used `<header>` for the sticky top navigation, `<nav>` for navigation links, `<main>` for the core body content, `<section>` with unique `id` attributes for distinct content areas (#home, #features, #benefits, #reviews, #pricing), `<article>` for feature and testimonial cards, and `<footer>` for bottom links and copyright."*

### 2. Flexbox Usage
- **Question**: *"Where is Flexbox applied and why?"*
- **Answer**: *"Flexbox is used in the navigation bar (`flex items-center justify-between`) to align the logo, nav links, and CTA button horizontally. It is also used for button groups, metric pills, icon-text alignment, and footer copyright rows where one-dimensional alignment is needed."*

### 3. CSS Grid Usage
- **Question**: *"Where is CSS Grid applied?"*
- **Answer**: *"CSS Grid is used in the Features section (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) to create a 5-card responsive layout, in the 3-card Testimonials grid, and in the Hero/Benefits sections using 12-column grid splits (`lg:grid-cols-12`)."*

### 4. Tailwind CSS Integration
- **Question**: *"How did you configure and use Tailwind CSS?"*
- **Answer**: *"Tailwind is imported via CDN script with inline theme configuration for custom brand colors (`aura.cyan`, `aura.dark`). Responsive breakpoint prefixes (`md:`, `lg:`) control font size scaling, padding, grid columns, and mobile menu visibility."*

---

## 👤 Author Section

**Student Name**: [Your Name]  
**Course / Branch**: Computer Science & Engineering / Web Development  
**Academic Year**: 2026  
**Mini Project 2**: Responsive Product Landing Page  
