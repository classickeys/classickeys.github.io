document.addEventListener("DOMContentLoaded", function () {
    var bouncingBox = document.querySelector('.bouncing-box');

    function getRandomAnimation() {
      var animations = ['bounceAnimation', 'bounceAnimation1', 'bounceAnimation2', 'bounceAnimation3'];
      var randomIndex = Math.floor(Math.random() * animations.length);
      return animations[randomIndex];
    }

    setInterval(function () {
        var bouncingBox = document.querySelector('.bouncing-box');
        var bouncingBox2 = document.querySelector('.bouncing-box-left-to-right');
        
    
      bouncingBox.style.animationName = getRandomAnimation();
      bouncingBox2.style.animationName = getRandomAnimation();
    }, 9000); // Switch every 15 seconds
  });