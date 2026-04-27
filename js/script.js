// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Header scroll effect (Hide notch after hero section)
const header = document.getElementById('site-header');
const appInner = document.querySelector('.app-inner');
const hero = document.getElementById('inicio');

if (appInner && header && hero) {
    appInner.addEventListener('scroll', () => {
        // Hide header if we scrolled past the hero section
        if (appInner.scrollTop > hero.offsetHeight - 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
    }, { passive: true });
}

// Update intersection observer to work within app-inner context
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    revealObserver.observe(el);
});
