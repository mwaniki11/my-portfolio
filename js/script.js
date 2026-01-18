// Fade & slide animations on scroll
const elements = document.querySelectorAll('.fade-in, .slide-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Contact form interaction
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        document.querySelector(".form-message").textContent =
            "✅ Message sent successfully (demo).";
        form.reset();
    });
}
