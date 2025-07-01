// Portfolio JavaScript functionality

// Project data
const projectsData = [
    {
        name: "Gmail Summarizer",
        description: "Automated Gmail parsing & summarization via script",
        tech: ["Python", "GenAI" , "NLP"],
        status: "✅ Fully done",
        github: "#",
        demo: "#",
        category: "ai-ml"
    },
    {
        name: "GuardianAI",
        description: "",
        tech: ["Python", "Deep Learning", "Object Detection","Face Detection", "Image Processing"],
        status: "✅ Fully done",
        github: "#",
        demo: "#",
        category: "ai-ml"
    },
    {
        name: "RSNA Lumbar Classification",
        description: "Medical image classification attempt",
        tech: ["CNN", "Tensorflow", "Medical Imaging"],
        status: "⚠️ Needs refinement",
        github: "#",
        demo: "#",
        category: "ai-ml"
    },
    {
        name: "Monocular Depth Estimation",
        description: "Depth from RGB using AdaBins",
        tech: ["TensorFlow", "AdaBins", "Computer Vision"],
        status: "✅ Done",
        github: "#",
        demo: "#",
        category: "cv"
    },
    {
        name: "Object Tracking Turret",
        description: "CV-controlled turret system",
        tech: ["OpenCV", "Python", "Arduino" , "Object detection"],
        status: "⚠️ Needs documentation",
        github: "#",
        demo: "#",
        category: "cv"
    },
    {
        name: "DNA-Based Encryption (VAE)",
        description: "Bio-inspired encryption using autoencoders",
        tech: ["VAE", "NumPy", "Cryptography"],
        status: "💤 Stalled",
        github: "#",
        demo: "#",
        category: "ai-ml"
    },
    {
        name: "CUDA Image Processor",
        description: "Basic GPU image processing in CUDA",
        tech: ["CUDA C", "GPU Computing"],
        status: "⚠️ Needs testing",
        github: "#",
        demo: "#",
        category: "cv"
    },
    {
        name: "Smart Garden Sensor",
        description: "IoT plant monitoring device",
        tech: ["Arduino", "IoT", "Sensors"],
        status: "✅ Patent published",
        github: "#",
        demo: "#",
        category: "iot"
    },
    {
        name: "AWS Chat App",
        description: "Encrypted real-time messaging",
        tech: ["AWS", "JavaScript", "Python"],
        status: "✅ Documented",
        github: "#",
        demo: "#",
        category: "web"
    },
    {
        name: "AWS E-Commerce Cart",
        description: "Amazon-style checkout flow",
        tech: ["AWS", "Python", "E-commerce"],
        status: "✅ Documented",
        github: "#",
        demo: "#",
        category: "web"
    },
    {
        name: "Chronic Kidney Disease Predictor",
        description: "Disease risk prediction model",
        tech: ["ML", "Pandas", "Healthcare"],
        status: "⚠️ Needs polish",
        github: "#",
        demo: "#",
        category: "ai-ml"
    },
    {
        name: "NASA Space Apps Challenge",
        description: "Fire detection from satellite imagery",
        tech: ["Satellite CV", "ML", "Remote Sensing"],
        status: "⚠️ Needs work",
        github: "#",
        demo: "#",
        category: "cv"
    }
];

// DOM Elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeMobileMenu();
    initializeScrollToTop();
    initializeSmoothScrolling();
    initializeScrollReveal();
    generateProjects();
    initializeProjectFilters();
    initializeContactForm();
    handleNavbarScroll();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    const themeIcon = themeToggle.querySelector('.theme-icon');
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Mobile Menu Management
function initializeMobileMenu() {
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target) || mobileMenuToggle.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Scroll to Top Button
function initializeScrollToTop() {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scrolling for Navigation Links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(var(--color-background), 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(var(--color-background), 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
}

// Scroll Reveal Animation
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements and observe them
    const elementsToReveal = document.querySelectorAll('section, .project-card, .certification-card, .research-item');
    elementsToReveal.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Generate Project Cards
function generateProjects() {
    projectsGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.category}`;
    card.setAttribute('data-category', project.category);
    
    const statusClass = getStatusClass(project.status);
    
    card.innerHTML = `
        <h3 class="project-title">${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-status ${statusClass}">${project.status}</div>
        <div class="project-links">
            <a href="${project.github}" class="project-link" target="_blank">GitHub</a>
            <a href="${project.demo}" class="project-link" target="_blank">Demo</a>
        </div>
    `;
    
    return card;
}

function getStatusClass(status) {
    if (status.includes('✅')) return 'status--success';
    if (status.includes('⚠️')) return 'status--warning';
    if (status.includes('💤')) return 'status--info';
    if (status.includes('⏳')) return 'status--info';
    return '';
}

// Project Filtering
function initializeProjectFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.classList.add('hidden');
            }, 300);
        }
    });
}

// Contact Form Management
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Send data to Formspree
        fetch('https://formspree.io/f/xeoknqvl', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification('Oops! There was a problem submitting your form.', 'error');
            }
        })
        .catch(() => {
            showNotification('Network error. Please try again later.', 'error');
        });
    });
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
        color: var(--color-btn-primary-text);
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    // Add close button styles
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Add scroll listener for active nav link
window.addEventListener('scroll', updateActiveNavLink);

// Typing animation for hero title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add loading animation
window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.add('loaded');
    
    // Optional: Add subtle entrance animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease forwards';
    }
});

// Add fadeInUp animation
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .hero-content {
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-link.active {
        color: var(--color-primary);
        position: relative;
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--color-primary);
        border-radius: 1px;
    }
    
    @media (max-width: 768px) {
        .nav-link.active::after {
            display: none;
        }
    }
`;
document.head.appendChild(additionalStyles);

// Error handling for images and external resources
function handleResourceErrors() {
    // Handle broken images
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
        }
    }, true);
}

// Initialize error handling
handleResourceErrors();

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    updateActiveNavLink();
    // Other scroll handlers can be debounced here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Accessibility improvements
function initializeAccessibility() {
    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-primary);
        color: var(--color-btn-primary-text);
        padding: 8px;
        border-radius: 4px;
        text-decoration: none;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.id = 'main-content';
        heroSection.setAttribute('tabindex', '-1');
    }
    
    // Improve keyboard navigation for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const firstLink = this.querySelector('.project-link');
                if (firstLink) {
                    firstLink.click();
                }
            }
        });
    });
}

// Initialize accessibility features
initializeAccessibility();
