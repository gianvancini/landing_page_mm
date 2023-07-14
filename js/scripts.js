// Rolagem suavizada
var scrollLinks = document.getElementsByClassName('scroll-link');

for (var i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  
  var targetId = this.getAttribute('href');
  var targetElement = document.querySelector(targetId);
  
  targetElement.scrollIntoView({ behavior: 'smooth' });
}


// Galeria

var currentImageIndex = 0;

function openGallery(galleryId) {
    document.getElementById(`overlay-${galleryId}`).style.display = "block";
    showImage(galleryId, 0);
}

function closeGallery(galleryId) {
    document.getElementById(`overlay-${galleryId}`).style.display = "none";
    currentImageIndex = 0;
    images = [''];
}

function changeImage(gallery, n) {
    const images = document.querySelectorAll(`.gallery-images-${gallery}`);

    currentImageIndex += n;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    showImage(gallery, currentImageIndex);
}

function showImage(gallery, index) {
    const images = document.querySelectorAll(`.gallery-images-${gallery}`);
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";

    }
    images[index].style.display = "block";

    console.log[images]
}

// Menu mobile
function toggleMenu() {
    var menu = document.querySelector('.menu');
    var nav = document.querySelector('nav');
    
    menu.classList.toggle('open');
    nav.classList.toggle('open');
}

