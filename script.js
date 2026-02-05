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

 
  
const footerHTML = `
  <div class="container">
    <p>&copy; 2026 ATCON Construction LTD | Civil Engineer</p>

    <div class="social-icons">
      <a href="https://www.linkedin.com/in/dennis-munene-567150271" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.instagram.com/atconltd" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/share/17pWvXxoYp/" target="_blank" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.tiktok.com/@intellistructbuil" target="_blank" aria-label="TikTok">
        <i class="fab fa-tiktok"></i>
      </a>
    </div>
  </div>
`;


document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = footerHTML;
  }
});



