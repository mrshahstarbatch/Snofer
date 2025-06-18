// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .about-content, .contact');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  
  // Add current year to footer
  document.querySelector('footer p:first-child').innerHTML = 
    `© ${new Date().getFullYear()} <strong>Meet Shah Marketing</strong>`;
});
