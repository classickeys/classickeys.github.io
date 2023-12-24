document.addEventListener("DOMContentLoaded", function () {
  const filler = document.getElementById("filler");
  const pageContent = document.getElementById("page-content");

  filler.addEventListener("animationend", function () {
    const loader = document.querySelector('#loader-container');
    
    // Add the 'loader-close' class to trigger the transition out of view
    loader.classList.add('loader-close');
    pageContent.style.opacity = 1;


    setTimeout(() => {
      loader.style.display = "none"; // Optionally hide the loader after transition
      
    }, 1000); // Adjust the timeout to match the transition duration
    
  });
});

  
