document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    let index = 0;
  
    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
  
      if (scrollPos >= windowHeight * index) {
        if (index < sections.length - 1) {
          index++;
          scrollToSection(index);
        }
      }
    });
  
    function scrollToSection(index) {
      sections[index].classList.remove("off");
      sections[index].scrollIntoView({ behavior: "smooth" });
  
      // Hide previous sections
      for (let i = 0; i < index; i++) {
        sections[i].classList.add("off");
      }
    }
  });
  