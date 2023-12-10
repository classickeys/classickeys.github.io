const filterImage = document.getElementById('profile-img');
const filterImage2 = document.getElementById('hoverImg');
const socialIcons = document.getElementsByClassName('social');
const endElements = document.querySelectorAll('.end');
let isAnimationPaused = false;
let timeoutId;

filterImage2.addEventListener('mouseenter', () => {
    filterImage.classList.remove('bounce');
    filterImage2.classList.remove('bounce');
    endElements.forEach(endElement => {
        endElement.style.display = 'block';
    });
    // Clear any existing timeout
    clearTimeout(timeoutId);
});

filterImage2.addEventListener('mouseleave', () => {
    filterImage.classList.add('bounce');
    filterImage2.classList.add('bounce');
    // Set a timeout to fade out after 15 seconds
    timeoutId = setTimeout(() => {
        endElements.forEach(endElement => {
            endElement.style.display = 'none';
        });
    }, 5000);
});

socialIcons[0].addEventListener('mouseenter', () => {
    // Clear the timeout when mouse enters socialIcons
    clearTimeout(timeoutId);
});

socialIcons[0].addEventListener('mouseleave', () => {
    // Set a timeout to fade out after 15 seconds when mouse leaves socialIcons
    timeoutId = setTimeout(() => {
        endElements.forEach(endElement => {
            endElement.style.display = 'none';
        });
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.loading-text');
    let elementIndex = 0;

    function clearText(element) {
        element.textContent = '';
    }

    function loadTextOneLetterAtATime(element) {
        const originalText = element.getAttribute('data-original-text');
        let index = 0;
        const intervalId = setInterval(function () {
            if (!isAnimationPaused) {
                element.textContent += originalText[index];
                index++;

                if (index === originalText.length) {
                    clearInterval(intervalId);
                    setTimeout(loadNextElement, 500);
                }
            }
        }, 100);
    }

    function loadNextElement() {
        if (!isAnimationPaused) {
            if (elementIndex < elements.length) {
                loadTextOneLetterAtATime(elements[elementIndex]);
                elementIndex++;
            } else {
                // All elements have finished loading, check if .end elements are visible
                checkEndElementsVisibility();

                // Reset elementIndex to loop through the elements again
                elementIndex = 0;

                // Clear text content for all elements
                elements.forEach(clearText);

                // Start loading the text for the first element
                setTimeout(() => {
                    // Reset isAnimationPaused after the delay
                    isAnimationPaused = false;
                    loadNextElement();
                }, 100);
            }
        }
    }

    function checkEndElementsVisibility() {
        const areEndElementsVisible = Array.from(endElements).some(endElement => {
            return window.getComputedStyle(endElement).display === 'block';
        });

        if (areEndElementsVisible) {
            // Pause the animation
            isAnimationPaused = true;
        } else {
            // Resume the animation
            isAnimationPaused = false;
        }
    }

    elements.forEach(element => {
        element.setAttribute('data-original-text', element.textContent);
        clearText(element);
    });

    // Periodically check the visibility of .end elements
    setInterval(checkEndElementsVisibility, 1000);

    // Start loading the text for the first element after a delay
    setTimeout(() => {
        loadNextElement();
    }, 200);
});
