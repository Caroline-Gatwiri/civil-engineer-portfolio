// Auto-highlight current page in nav
const currentLocation = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentLocation) {
    link.classList.add('active');
  }
});
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
      });
    }
  });