const lightModeToggle = document.getElementById('lightModeToggle');
let isLightMode = false;

// Check if the user has a preference for dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Default to dark mode if the system preference is dark
    isLightMode = false;
    document.body.classList.add('bg-dark', 'text-white');
    document.querySelectorAll('.navbar').forEach(navbar => {
        navbar.classList.add('navbar-dark', 'bg-dark');
    });
    document.querySelectorAll('.footer').forEach(footer => {
        footer.classList.add('bg-dark', 'text-white');
    });
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('bg-secondary');
    });
    document.querySelectorAll('a').forEach(link => {
        link.classList.add('text-light');
    });
} else {
    // Default to light mode if the system preference is light
    isLightMode = true;
    document.body.classList.add('bg-light', 'text-dark');
    document.querySelectorAll('.navbar').forEach(navbar => {
        navbar.classList.add('navbar-light', 'bg-light');
    });
    document.querySelectorAll('.footer').forEach(footer => {
        footer.classList.add('bg-light', 'text-dark');
    });
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('bg-light');
    });
    document.querySelectorAll('a').forEach(link => {
        link.classList.add('text-dark');
    });
}

lightModeToggle.addEventListener('click', () => {
    if (isLightMode) {
        // Passa alla modalità scura
        document.body.classList.remove('bg-light', 'text-dark');
        document.body.classList.add('bg-dark', 'text-white');
        document.querySelectorAll('.navbar').forEach(navbar => {
            navbar.classList.remove('navbar-light', 'bg-light');
            navbar.classList.add('navbar-dark', 'bg-dark');
        });
        document.querySelectorAll('.footer').forEach(footer => {
            footer.classList.remove('bg-light', 'text-dark');
            footer.classList.add('bg-dark', 'text-white');
        });
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.remove('bg-light');
            card.classList.add('bg-secondary');
        });
        document.querySelectorAll('a').forEach(link => {
            link.classList.remove('text-dark');
            link.classList.add('text-light');
        });

        // Cambia lo stile della sezione "pinned" per la modalità scura
        document.querySelectorAll('.pinned').forEach(item => {
            item.classList.remove('bg-light');
            item.classList.add('bg-dark');
        });

        lightModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        lightModeToggle.classList.remove('btn-dark');
        lightModeToggle.classList.add('btn-light');
        isLightMode = false;
    } else {
        // Passa alla modalità chiara
        document.body.classList.remove('bg-dark', 'text-white');
        document.body.classList.add('bg-light', 'text-dark');
        document.querySelectorAll('.navbar').forEach(navbar => {
            navbar.classList.remove('navbar-dark', 'bg-dark');
            navbar.classList.add('navbar-light', 'bg-light');
        });
        document.querySelectorAll('.footer').forEach(footer => {
            footer.classList.remove('bg-dark', 'text-white');
            footer.classList.add('bg-light', 'text-dark');
        });
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.remove('bg-secondary');
            card.classList.add('bg-light');
        });
        document.querySelectorAll('a').forEach(link => {
            link.classList.remove('text-light');
            link.classList.add('text-dark');
        });

        // Cambia lo stile della sezione "pinned" per la modalità chiara
        document.querySelectorAll('.pinned').forEach(item => {
            item.classList.remove('bg-dark');
            item.classList.add('bg-light');
        });

        lightModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        lightModeToggle.classList.remove('btn-light');
        lightModeToggle.classList.add('btn-dark');
        isLightMode = true;
    }
});
