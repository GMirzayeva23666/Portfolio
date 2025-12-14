// ==========================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// ==========================================

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ==========================================
// ACTIVE NAV LINK UPDATE
// ==========================================

function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Update active link based on current page
    const currentPath = window.location.pathname;
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes(currentFile) || (currentFile === '' && href.includes('index'))) {
            link.classList.add('active');
        }
    });
}

// Update on load
window.addEventListener('load', updateActiveLink);

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.section-title, .featured-card, .skill-category, .activity-card, .project-card, .education-card').forEach(el => {
    observer.observe(el);
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// SKILL PROGRESS BARS ANIMATION
// ==========================================

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Bar width is already set in HTML, just trigger animation
                    entry.target.style.animation = 'none';
                    setTimeout(() => {
                        entry.target.style.animation = '';
                    }, 10);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
}

animateSkillBars();

// ==========================================
// PROJECT IMAGE LAZY LOADING
// ==========================================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Images are already loaded, but this could be extended for lazy loading
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// ==========================================
// COUNTER ANIMATION
// ==========================================

function animateCounters() {
    const statElements = document.querySelectorAll('.stat strong');
    
    statElements.forEach(el => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class or effect
                    entry.target.style.animation = 'fadeInUp 0.6s ease';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(el);
    });
}

animateCounters();

// ==========================================
// FORM INTERACTION (if needed in future)
// ==========================================

// Example: Handle contact form submission
const handleFormSubmit = (e) => {
    if (e.target.matches('form')) {
        e.preventDefault();
        // Add form handling logic here
        console.log('Form submitted');
    }
};

document.addEventListener('submit', handleFormSubmit);

// ==========================================
// SCROLL TO TOP BUTTON (Optional)
// ==========================================

function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #6366f1;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
            scrollBtn.style.alignItems = 'center';
            scrollBtn.style.justifyContent = 'center';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseover', () => {
        scrollBtn.style.backgroundColor = '#4f46e5';
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseout', () => {
        scrollBtn.style.backgroundColor = '#6366f1';
        scrollBtn.style.transform = 'scale(1)';
    });
}

// Create scroll to top button on page load
window.addEventListener('load', createScrollToTopButton);

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================

// Add focus visible for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.style.outlineOffset = '2px';
    }
});

// ==========================================
// DYNAMIC YEAR IN FOOTER
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = footerText.textContent.replace('2024', year);
    }
});

// ==========================================
// PAGE TRANSITION
// ==========================================

// Add smooth page transitions
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.5';
    document.body.style.transition = 'opacity 0.3s ease';
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==========================================
// MOBILE DETECTION
// ==========================================

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Use for mobile-specific optimizations
if (isMobileDevice()) {
    document.body.classList.add('is-mobile');
}

// ==========================================
// CONSOLE LOG FOR DEBUGGING
// ==========================================

console.log('%cWelcome to my portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cMade with HTML, CSS, and JavaScript', 'color: #64748b; font-size: 14px;');
