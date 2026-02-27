// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('active'));
    }

    // Header hide/show on scroll for mobile
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('hide');
                return;
            }
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.classList.add('hide');
            } else if (currentScroll < lastScroll) {
                header.classList.remove('hide');
            }
            
            lastScroll = currentScroll;
        }
    });
});
