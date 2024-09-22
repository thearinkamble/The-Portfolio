// Smooth Scroll for navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Resume download functionality
document.getElementById('resume-btn')?.addEventListener('click', () => {
    window.open('resume.pdf', '_blank');
});
s