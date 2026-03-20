// WebLaunch Studio - Smooth Scroll & Animations

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll animation for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate service cards
document.querySelectorAll('.service-card, .price-card, .benefit-item').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.wl-header');
  if (window.scrollY > 100) {
    header.style.background = 'linear-gradient(135deg, #5568d3 0%, #6941a0 100%)';
    header.style.padding = '0.7rem 0';
  } else {
    header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    header.style.padding = '1rem 0';
  }
});

console.log('WebLaunch Studio - Ready! 🚀');