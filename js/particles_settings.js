function loadParticles(color) {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 1000 } },
            color: { value: color },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 2.5, random: true },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out" },
            line_linked: {
                enable: true,
                distance: 150,
                color: color,
                opacity: 0.3,
                width: 1
            }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
            modes: { repulse: { distance: 80 }, push: { particles_nb: 3 } }
        }
    });
}

function getCurrentTheme() {
    return isLightMode ? "#000000" : "#ffffff";
}

function updateParticles() {
    document.getElementById("particles-js").innerHTML = ""; // Reset
    loadParticles(getCurrentTheme());
}

// Carica le particelle iniziali
document.addEventListener("DOMContentLoaded", function () {
    loadParticles(getCurrentTheme());
});

// Ricarica le particelle quando si cambia modalità
lightModeToggle.addEventListener("click", function () {
    setTimeout(updateParticles, 0);
});
