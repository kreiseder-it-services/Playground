// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===== Email Form Submission =====
const notifyForm = document.getElementById('notifyForm');
const emailInput = document.getElementById('email');
const successMessage = document.getElementById('successMessage');

notifyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Hide form and show success message
    notifyForm.style.display = 'none';
    successMessage.classList.add('show');

    // Store email in localStorage (in production, you'd send to a backend)
    const emails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
    if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('waitlistEmails', JSON.stringify(emails));
    }

    // Log for development purposes
    console.log('Email submitted:', email);
    console.log('All waitlist emails:', emails);
});

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe steps
document.querySelectorAll('.step').forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-30px)';
    step.style.transition = `all 0.6s ease ${index * 0.2}s`;
    observer.observe(step);
});

// ===== Formatting Toolbar Demo Animation =====
const formatButtons = document.querySelectorAll('.format-btn');
let currentButtonIndex = 0;

function animateFormatButtons() {
    formatButtons.forEach(btn => btn.classList.remove('active'));
    formatButtons[currentButtonIndex].classList.add('active');
    currentButtonIndex = (currentButtonIndex + 1) % formatButtons.length;
}

// Start animation after a delay
setTimeout(() => {
    setInterval(animateFormatButtons, 2000);
}, 1000);

// ===== Console Easter Egg =====
console.log('%c🚀 LinkedIn Text Formatter', 'font-size: 20px; font-weight: bold; color: #0a66c2;');
console.log('%cInterested in early access? Sign up on the page!', 'font-size: 14px; color: #666;');
console.log('%cBuilt with ❤️ for LinkedIn power users', 'font-size: 12px; color: #999;');

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus email input
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const ctaSection = document.getElementById('cta');
        ctaSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => emailInput.focus(), 500);
    }
});

// ===== Preload animations =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
