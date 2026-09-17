/**
 * AURA Smartwatch Landing Page — Interactive JavaScript
 * Handles mobile hamburger navigation, smooth scrolling, and scroll navbar state.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle Elements
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
        if (menuOpenIcon) menuOpenIcon.classList.add('hidden');
        if (menuCloseIcon) menuCloseIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        if (menuOpenIcon) menuOpenIcon.classList.remove('hidden');
        if (menuCloseIcon) menuCloseIcon.classList.add('hidden');
      }
    });

    // Close mobile menu when clicking any menu link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        if (menuOpenIcon) menuOpenIcon.classList.remove('hidden');
        if (menuCloseIcon) menuCloseIcon.classList.add('hidden');
      });
    });
  }

  // 2. Sticky Navbar Shadow Effect on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('shadow-lg', 'shadow-cyan-950/20', 'border-b', 'border-zinc-800');
    } else {
      navbar?.classList.remove('shadow-lg', 'shadow-cyan-950/20', 'border-b', 'border-zinc-800');
    }
  });

  // 3. Smooth Scrolling for Anchor Links
  const navAnchors = document.querySelectorAll('a[href^="#"]');
  navAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
