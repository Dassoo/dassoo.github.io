function loadParticles() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 1000 } },
            color: { value:  "#ff4081" }, // color
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 5, random: true },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out" },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ff4081",
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

function updateParticles() {
    document.getElementById("particles-js").innerHTML = ""; // Reset
    loadParticles();
}

// Carica le particelle iniziali
document.addEventListener("DOMContentLoaded", function () {
    loadParticles();
});

