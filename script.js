
const galleryDatabase = {

  Flat_roof: [
    "flat-roof.jpeg",
    "flatroof1.jpg",
    "flatroof2.jpg",
    "flatroof3.jpeg",
    "flatroof4.jpeg",
    "flatroof5.jpeg",
    "flatroof6.jpeg",
    "flatroof7.jpeg",
    "flatroof8.jpeg",
    "flatroom9.jpg",
    "flatroom10.jpeg",
    "flatroom11.jpeg",
    "flatroom12.jpeg",
    "flatroom13.png",
    "flatroom14.png",
    "flatroom15.png",
    "flatroom16.png",
    "flatroom17.jpg",
    "flatroom18.jpeg",
    "flatroom19.jpeg",
    "flatroom20.jpeg",
    "flatroom21.jpeg",
    "flatroom22.jpeg"
  ],

  /* later you add */
  Apartments: [],
  Hybrid_roof: [],
  Hidden_roof: ["hidden-roof.png"]

};


const navbarHTML = `
  <div class="container">
    <h1 class="logo">ATCON CONSTRUCTION LTD</h1>

    <nav>
      <button class="hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
`;

const footerHTML = `
  <div class="container">
    <p>&copy; 2026 ATCON Construction LTD | Architectural Firm & Civil Engineering</p>

    <div class="social-icons">
      <a href="https://www.linkedin.com/in/dennis-munene-567150271" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.instagram.com/atconltd" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/share/17pWvXxoYp/" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.tiktok.com/@intellistructbuil" target="_blank">
        <i class="fab fa-tiktok"></i>
      </a>
    </div>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {

  /* Inject Navbar */
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = navbarHTML;
  }

  /* Inject Footer */
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = footerHTML;
  }

  /* Hamburger toggle */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburger.classList.toggle("active");
    });
  }

  /* Active link highlight */
  const currentLocation = window.location.pathname.split("/").pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    }
  });

});

let currentIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  
});

function openLightbox(index){
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(step){
  currentIndex += step;
  if(currentIndex < 0) currentIndex = images.length - 1;
  if(currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.getElementById("gallery");

  if (gallery) {

    const category = gallery.dataset.category;
    const files = galleryDatabase[category];

    const folder = "images/" + category + "/";

    images = [];

    files.forEach((file, index) => {

      const img = document.createElement("img");
      img.src = folder + file;
      img.alt = "Project Image";

      img.addEventListener("click", () => openLightbox(index));

      gallery.appendChild(img);

      images.push(img.src);

    });

  }

});


