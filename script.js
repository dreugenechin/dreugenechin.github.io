// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');
if (toggle) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

// Basic contact form handler (mailto fallback)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`
    );
    // TODO: replace with Formspree or serverless function endpoint if desired
    window.location.href = `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}

// Smooth scroll for 'back to top' anchors (already enabled via CSS, but ensure focus)
document.querySelectorAll('a[href="#top"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
  });
});

// --- SCROLL REVEAL (LAZY LOADING) ANIMATIONS ---
document.addEventListener("DOMContentLoaded", () => {
  // Set up the Intersection Observer
  const observerOptions = {
    root: null, // use the viewport
    rootMargin: "0px",
    threshold: 0.15 // trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the visible class to trigger the CSS animation
        entry.target.classList.add("is-visible");
        // Stop observing the element so it doesn't fade out when scrolling up
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  // Find all elements with the 'fade-in' class and observe them
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(el => observer.observe(el));
});
