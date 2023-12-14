document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  let index = 0;
  let lastScrollPos = 0;

  window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine scrolling direction
      const scrollingDown = scrollPos > lastScrollPos;
      lastScrollPos = scrollPos;

      // Handle scrolling down
      if (scrollingDown) {
          if (scrollPos >= windowHeight * (index + 1)) {
              if (index < sections.length - 1) {
                  index++;
                  scrollToSection(index);
              }
          }
      } else { // Handle scrolling up
          if (scrollPos < windowHeight * index) {
              if (index > 0) {
                  index--;
                  scrollToSection(index);
              }
          }
      }
  });

  function scrollToSection(index) {
      sections.forEach((section, i) => {
          if (i === index) {
              section.classList.remove("off");
          } else {
              section.classList.add("off");
          }
      });

      // Scroll to the selected section
      sections[index].scrollIntoView({ behavior: "smooth" });
  }
});
