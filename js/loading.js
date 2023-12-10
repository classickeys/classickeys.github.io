document.addEventListener("DOMContentLoaded", function () {
    const filler = document.getElementById("filler");
    const pageContent = document.getElementById("page-content");
  
    filler.addEventListener("animationend", function () {
      document.getElementById("loader-container").style.display = "none";
      pageContent.style.opacity = 1;
    });
  
    // Simulate smooth opening of the page content
    setTimeout(() => {
      pageContent.classList.remove(".exitLoad");
    }, 4000); // Adjust the delay according to your animation duration
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
  
      sections.forEach((section, index) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;
  
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });