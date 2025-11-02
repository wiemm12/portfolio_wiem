// Interactive Skills Section - Expandable Categories
document.addEventListener('DOMContentLoaded', function() {
    const categoryHeaders = document.querySelectorAll('.category-header');

    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            const content = document.getElementById(categoryId);

            // Toggle active class on header
            this.classList.toggle('active');

            // Toggle active class on content
            content.classList.toggle('active');

            // Close other categories (optional - comment out for multiple open)
            categoryHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    const otherContent = document.getElementById(otherHeader.getAttribute('data-category'));
                    otherContent.classList.remove('active');
                }
            });
        });
    });

    // Linux Tools - No longer using dropdown/slide-out panel
    // Linux skills are now displayed as static rounded boxes

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle internal links (starting with #)
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 25, 48, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(27, 163, 247, 0.15)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 25, 48, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
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

// Observe all sections and cards
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Add typing effect to home section
const typingText = document.querySelector('.home-text h2');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    setTimeout(() => {
        const typeWriter = () => {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }, 1000);
}

// Add counter animation for skills
const skillCards = document.querySelectorAll('.skill-card');
let hasAnimated = false;

const animateOnScroll = () => {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (skillsPosition < screenPosition && !hasAnimated) {
        skillCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
        hasAnimated = true;
    }
};

window.addEventListener('scroll', animateOnScroll);

// Initialize skill cards as hidden
skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add hover effect sound (optional - commented out by default)
// Uncomment if you want to add sound effects
/*
const hoverSound = new Audio('path/to/hover-sound.mp3');
document.querySelectorAll('.btn, .skill-card, .project-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});
*/

// Scroll to top button (optional enhancement)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #5A9BD8, #1BA3F7);
    color: white;
    border: 2px solid #1BA3F7;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 0 20px rgba(27, 163, 247, 0.3);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px) scale(1.05)';
    scrollToTopBtn.style.boxShadow = '0 0 25px rgba(0, 191, 255, 0.4), 0 0 35px rgba(27, 163, 247, 0.2)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0) scale(1)';
    scrollToTopBtn.style.boxShadow = '0 0 20px rgba(27, 163, 247, 0.3)';
});

// Image Carousel/Gallery Functionality for Experience Section
function changeSlide(button, direction) {
    const galleryContainer = button.closest('.gallery-container');
    const slides = galleryContainer.querySelectorAll('.gallery-slide');
    const indicators = galleryContainer.querySelectorAll('.indicator');

    let currentIndex = 0;
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
        }
    });

    // Remove active class from current slide and indicator
    slides[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');

    // Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }

    // Add active class to new slide and indicator
    slides[newIndex].classList.add('active');
    indicators[newIndex].classList.add('active');
}

function goToSlide(indicator, index) {
    const galleryContainer = indicator.closest('.gallery-container');
    const slides = galleryContainer.querySelectorAll('.gallery-slide');
    const indicators = galleryContainer.querySelectorAll('.indicator');

    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Add active class to selected slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

// Touch/Swipe support for mobile devices
document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.gallery-container');

    galleries.forEach(gallery => {
        let touchStartX = 0;
        let touchEndX = 0;

        gallery.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        gallery.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe(gallery);
        }, { passive: true });

        function handleSwipe(galleryElement) {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                const nextButton = galleryElement.querySelector('.gallery-next');
                const prevButton = galleryElement.querySelector('.gallery-prev');

                if (diff > 0) {
                    // Swipe left - next slide
                    changeSlide(nextButton, 1);
                } else {
                    // Swipe right - previous slide
                    changeSlide(prevButton, -1);
                }
            }
        }
    });

    // Auto-play carousel (optional - commented out by default)
    // Uncomment to enable auto-play
    /*
    galleries.forEach(gallery => {
        setInterval(() => {
            const nextButton = gallery.querySelector('.gallery-next');
            changeSlide(nextButton, 1);
        }, 5000); // Change slide every 5 seconds
    });
    */
});

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    const galleries = document.querySelectorAll('.gallery-container');

    galleries.forEach(gallery => {
        if (e.key === 'ArrowLeft') {
            const prevButton = gallery.querySelector('.gallery-prev');
            changeSlide(prevButton, -1);
        } else if (e.key === 'ArrowRight') {
            const nextButton = gallery.querySelector('.gallery-next');
            changeSlide(nextButton, 1);
        }
    });
});

// Auto-Slide Carousel for QuetraTech Experience
document.addEventListener('DOMContentLoaded', function() {
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let carouselInterval;

    function showSlide(index) {
        // Remove active class from all slides and dots
        carouselSlides.forEach(slide => slide.classList.remove('active'));
        carouselDots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        if (carouselSlides[index]) {
            carouselSlides[index].classList.add('active');
        }
        if (carouselDots[index]) {
            carouselDots[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    }

    // Auto-slide every 3 seconds
    if (carouselSlides.length > 0) {
        carouselInterval = setInterval(nextSlide, 3000);
    }

    // Manual navigation with dots
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);

            // Reset auto-slide timer
            clearInterval(carouselInterval);
            carouselInterval = setInterval(nextSlide, 3000);
        });
    });

    // Pause on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function() {
            clearInterval(carouselInterval);
        });

        carouselContainer.addEventListener('mouseleave', function() {
            carouselInterval = setInterval(nextSlide, 3000);
        });
    }
});

// Console message for developers
console.log('%c👋 Welcome to my portfolio!', 'color: #00BFFF; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #00FF7F; font-size: 14px;');
