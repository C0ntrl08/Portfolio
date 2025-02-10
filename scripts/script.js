function toggleMenu() {
    // Targeting the elements in parentheses
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // On clicking add or remove the "open" class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function loadDate()
    {
        var data = document.getElementById('spanDate');
        data.innerHTML = new Date().getFullYear().toString();
    }

window.onload = loadDate();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}