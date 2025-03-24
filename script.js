// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Resume download functionality
document.querySelector('a[href="resume.pdf"]').addEventListener('click', () => {
  alert('Your resume will start downloading!');
});
