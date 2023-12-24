document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  let index = 0;
  let isScrolling = false; // Variable to track if scrolling is in progress
  let lastScrollPos = 0;

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;

    // Determine scrolling direction
    const scrollingDown = scrollPos > lastScrollPos;
    lastScrollPos = scrollPos;

    // Calculate the bottom of the current section
    const sectionBottom = sections[index].offsetTop + sections[index].offsetHeight;

    // Buffer zone to stop scrolling before the effect
    const bufferZone = 200; // Adjust this value as needed

    // Handle scrolling down
    if (scrollingDown) {
      if (!isScrolling && scrollPos >= sectionBottom - window.innerHeight + bufferZone) {
        if (index < sections.length - 1) {
          isScrolling = true;
          index++;
          scrollToSection(index);
        }
      }
    } else {
      // Handle scrolling up
      if (!isScrolling && scrollPos < sections[index].offsetTop - bufferZone) {
        if (index > 0) {
          isScrolling = true;
          index--;
          scrollToSection(index);
        }
      }
    }
  });

  function scrollToSection(index) {
    const section = sections[index];

    // Scroll to the top of the selected section
    section.scrollIntoView({
      behavior: "smooth"
    });

    // Toggle visibility classes after a delay
    setTimeout(() => {
      sections.forEach((s, i) => {
        if (i === index) {
          s.classList.remove("off");
        } else {
          s.classList.add("off");
        }
      });

      isScrolling = false;
    }, 400); // Adjust the delay as needed for the smooth transition
  }
});


let scrollTimeout;

function shouldApplyScrollEffect() {
  return window.innerWidth > 768; // Adjust the width threshold as needed
}

function handleScroll() {
  clearTimeout(scrollTimeout);

  const header = document.getElementById("headerbar");

  if (shouldApplyScrollEffect()) {
    // Add a class to make the header disappear immediately
    header.classList.add("header-hidden");

    // Set a timeout to make the header reappear after 3 seconds of no scrolling
    scrollTimeout = setTimeout(function () {
      header.classList.remove("header-hidden");
    }, 3000);
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
