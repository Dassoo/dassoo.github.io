// Pinned content
document.addEventListener("DOMContentLoaded", function() {
    fetch("pinned.json")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("pinned-list");
            data.pinned.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a> - ${item.comment}`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error loading pinned items:", error));
});

// CV download functionality
document.getElementById("downloadCVBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const cv1Link = document.createElement('a');
    cv1Link.href = 'assets/cvs/Federico Dassiè_CV_it.pdf';
    cv1Link.download = 'Federico Dassiè_CV_it.pdf';
    cv1Link.click();

    const cv2Link = document.createElement('a');
    cv2Link.href = 'assets/cvs/Federico Dassiè_CV_en.pdf';
    cv2Link.download = 'Federico Dassiè_CV_en.pdf';
    cv2Link.click();
});

// Interests section
const typed = new Typed('#interests-text', {
  strings: ['Cultural Heritage', 'Agentic AI', 'Textual Analysis', '3D Reconstruction', 'Digital Humanities', 'Image Processing'],
  typeSpeed: 40,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});




document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', (e) => {
      // POP animation
      gsap.fromTo(icon,
        { scale: 1 },
        {
          scale: 1.5,
          duration: 0.2,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(icon, {
              scale: 1,
              duration: 0.3,
              ease: "elastic.out(1, 0.4)"
            });
          }
        }
      );

      // CONFETTI burst
      const rect = icon.getBoundingClientRect();
      confetti({
        particleCount: 5,
        startVelocity: 20,
        spread: 100,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight
        }
      });
    });
});



