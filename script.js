window.onload = function () {
    window.scrollTo(0, 0);
};

// Fade-in animation
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => observer.observe(el));


// Theme toggle
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        toggleButton.textContent = "🌑";
    } else {
        toggleButton.textContent = "☀";
    }
});

