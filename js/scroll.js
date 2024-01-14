document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  let index = 0;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetIndex = Array.from(sections).findIndex(section => section.id === entry.target.id);
        if (targetIndex !== -1 && targetIndex !== index) {
          index = targetIndex;
          scrollToSection(index);
        }
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed

  sections.forEach(section => {
    observer.observe(section);
  });

  const links = document.querySelectorAll('nav-right a');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetIndex = Array.from(sections).findIndex(section => section.id === targetId);

      if (targetIndex !== -1 && targetIndex !== index) {
        index = targetIndex;
        scrollToSection(index);
      }
    });
  });

  function scrollToSection(index) {
    const section = sections[index];
    const offsetTop = section.getBoundingClientRect().top + window.scrollY;

    // Scroll to the top of the selected section
    window.scrollTo({
      top: offsetTop,
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
    }, 200); // Adjust the delay as needed for the smooth transition
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
