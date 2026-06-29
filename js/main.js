/* =============================================
   ALEX RIVERA PORTFOLIO — main.js
   ============================================= */

/* === CURSOR GLOW === */
let cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', function(e) {
  cursorGlow.style.transform = 'translate(' + (e.clientX - 190) + 'px, ' + (e.clientY - 190) + 'px)';
});

/* === NAVBAR SCROLL STATE === */
let navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* === MOBILE NAV TOGGLE === */
let navToggle = document.getElementById('navToggle');
let navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function() {
  let isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

/* Close nav when a link is clicked */
navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

/* === SCROLL ANIMATIONS — INTERSECTION OBSERVER === */

/* Hero fade-ups — trigger immediately */
let heroItems = document.querySelectorAll('.hero-content .fade-up');
heroItems.forEach(function(el) {
  el.classList.add('visible');
});

/* Reveal on scroll */
let revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(function(el) {
  revealObserver.observe(el);
});

/* === SMOOTH SCROLL OFFSET for fixed nav === */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    let target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    let offset = navbar.offsetHeight + 16;
    let targetY = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  });
});