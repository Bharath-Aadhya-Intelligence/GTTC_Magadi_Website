document.addEventListener('DOMContentLoaded', () => {
    // Accessibility Controls
    const btnIncrease = document.getElementById('font-increase');
    const btnDecrease = document.getElementById('font-decrease');
    const btnReset = document.getElementById('font-reset');
    
    let fontSize = 100;

    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            fontSize += 10;
            document.body.style.fontSize = `${fontSize}%`;
        });
    }

    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            fontSize -= 10;
            document.body.style.fontSize = `${fontSize}%`;
        });
    }

    if (btnReset) {
        btnReset.addEventListener('click', () => {
            fontSize = 100;
            document.body.style.fontSize = `100%`;
        });
    }

    // Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
        });
    }

    // Dropdown Toggles for Mobile
    const navLinks = document.querySelectorAll('.main-nav ul li > a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const nextUl = link.nextElementSibling;
                if (nextUl && nextUl.tagName === 'UL') {
                    e.preventDefault();
                    e.stopPropagation();
                    nextUl.style.display = nextUl.style.display === 'block' ? 'none' : 'block';
                    
                    // Toggle chevron icon if exists
                    const icon = link.querySelector('.fa-chevron-down');
                    if (icon) {
                        icon.style.transform = nextUl.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0)';
                    }
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav && mainNav.classList.contains('active')) {
            if (!mainNav.contains(e.target) && e.target !== navToggle) {
                mainNav.classList.remove('active');
            }
        }
    });
});
