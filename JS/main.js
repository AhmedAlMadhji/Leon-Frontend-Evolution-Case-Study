(function () {
    'use strict';

    document.documentElement.classList.add('js');

    var nav = document.querySelector('header .Links');
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('primary-nav');
    var menuLinks = menu ? menu.querySelectorAll('a[href^="#"]') : [];
    var revealSections = document.querySelectorAll('.reveal');

    function setMenuOpen(isOpen) {
        if (!nav || !toggle) {
            return;
        }

        nav.classList.toggle('is-open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            setMenuOpen(!nav.classList.contains('is-open'));
        });

        document.addEventListener('click', function (event) {
            if (!nav.contains(event.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeMenu();
                toggle.focus();
            }
        });

        menuLinks.forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    }

    if (revealSections.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { root: null, threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        revealSections.forEach(function (section) {
            revealObserver.observe(section);
        });
    } else {
        revealSections.forEach(function (section) {
            section.classList.add('is-visible');
        });
    }
})();
