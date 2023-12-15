let prevScrollPos = window.scrollY;
        const navbar = document.getElementById("navbar");

        window.onscroll = function () {
            const currentScrollPos = window.scrollY;

            if (prevScrollPos > currentScrollPos) {
                // Scroll up
                navbar.classList.remove("hidden");
            } else {
                // Scroll down
                navbar.classList.add("hidden");
            }

            prevScrollPos = currentScrollPos;
        };

        // Detect when scrolling stops
        let scrollTimeout;
        window.addEventListener("scroll", function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                navbar.classList.remove("hidden");
            }, 200); // Adjust the delay as needed
        });


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  let index = 0;
  let isScrolling = false; // Variable to track if scrolling is in progress
  let lastScrollPos = 0;

  window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine scrolling direction
      const scrollingDown = scrollPos > lastScrollPos;
      lastScrollPos = scrollPos;

      // Calculate the bottom of the current section
      const sectionBottom = sections[index].offsetTop + sections[index].offsetHeight;

      // Buffer zone to stop scrolling before the effect
      const bufferZone = 1; // Adjust this value as needed

      // Handle scrolling down
      if (scrollingDown) {
          if (!isScrolling && scrollPos >= sectionBottom - windowHeight - bufferZone) {
              if (index < sections.length - 1) {
                  isScrolling = true;
                  index++;
                  scrollToSection(index);
              }
          }
      } else { // Handle scrolling up
          if (!isScrolling && scrollPos < sections[index].offsetTop + bufferZone) {
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
      const sectionHeight = section.offsetHeight;
      const offsetTop = section.offsetTop;

      // Calculate the scrolling distance
      const scrollTop = index === 0 ? 0 : offsetTop - (window.innerHeight - sectionHeight) / 2;

      // Scroll to the top of the selected section
      window.scrollTo({
          top: scrollTop,
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
      }, 1600); // Adjust the delay as needed for the smooth transition
  }
});
