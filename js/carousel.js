const carouselContent = document.getElementById('projects-content');

// Duplicate the carousel items for infinite scroll effect
carouselContent.innerHTML += carouselContent.innerHTML;

// JavaScript for infinite scrolling
let scrollPosition = 0;

function scrollCarousel() {
    scrollPosition += 1; // Adjust the scroll increment
    carouselContent.style.transform = `translateX(-${scrollPosition}px)`;

    const itemWidth = carouselContent.firstElementChild.offsetWidth + 20; // Adjust for margin
    const totalWidth = 2 * itemWidth * (carouselContent.childElementCount / 2);

    if (scrollPosition >= totalWidth) {
        // If scrolled past the total width, reset to the beginning
        scrollPosition = 0;
    }
}

setInterval(scrollCarousel, 50);
