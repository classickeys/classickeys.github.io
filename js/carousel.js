const carouselContent = document.getElementById('projects-content');

// Duplicate the carousel items for infinite scroll effect
carouselContent.innerHTML += carouselContent.innerHTML;

// JavaScript for infinite scrolling
let scrollPosition = 0;

function scrollCarousel() {
    scrollPosition += 1; // Adjust the scroll increment
    carouselContent.style.transform = `translateX(-${scrollPosition}px)`;

    if (scrollPosition >= carouselContent.scrollWidth / 2) {
        // If scrolled halfway, reset to the beginning
        scrollPosition = 0;
    }
}

setInterval(scrollCarousel, 50); 
   