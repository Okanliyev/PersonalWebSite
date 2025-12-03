// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const contactForm = document.getElementById('contactForm');
const currentYearSpan = document.getElementById('currentYear');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Contact Form Submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for anchor links (alternative to CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.project-card, .stat-card, .contact-item').forEach(el => {
    observer.observe(el);
});

// Simple typing effect for hero subtitle (optional)
const heroSubtitle = document.querySelector('.hero-subtitle');
const originalText = heroSubtitle.textContent;

function typeWriter(text, i, callback) {
    if (i < text.length) {
        heroSubtitle.textContent = text.substring(0, i + 1);
        setTimeout(function() {
            typeWriter(text, i + 1, callback);
        }, 100);
    } else if (typeof callback == 'function') {
        setTimeout(callback, 1000);
    }
}

// Start typing effect when page loads
window.addEventListener('load', function() {
    heroSubtitle.textContent = '';
    setTimeout(function() {
        typeWriter(originalText, 0, function() {
            // Typing complete
        });
    }, 500);
});