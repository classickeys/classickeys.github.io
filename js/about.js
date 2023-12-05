const filterImage = document.getElementById('profile-img');

        filterImage.addEventListener('mouseenter', () => {
            filterImage.classList.remove('bounce'); // Add the 'bounce' class
        });

        filterImage.addEventListener('mouseleave', () => {
            filterImage.classList.add('bounce'); // Remove the 'bounce' class
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
                    element.textContent += originalText[index];
                    index++;
        
                    if (index === originalText.length) {
                        clearInterval(intervalId);
                        setTimeout(loadNextElement, 500);
                    }
                }, 100);
            }
        
            function loadNextElement() {
                if (elementIndex < elements.length) {
                    loadTextOneLetterAtATime(elements[elementIndex]);
                    elementIndex++;
                } else {
                    // Reset elementIndex to loop through the elements again
                    elementIndex = 0;
                    // Clear text content for all elements
                    elements.forEach(clearText);
                    // Start loading the text for the first element
                    loadNextElement();
                }
            }
        
            elements.forEach(element => {
                element.setAttribute('data-original-text', element.textContent);
                clearText(element);
            });
        
            loadNextElement();
        });
        


        