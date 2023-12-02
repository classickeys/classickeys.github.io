const filterImage = document.getElementById('profile-img');

        filterImage.addEventListener('mouseenter', () => {
            filterImage.style.filter = 'grayscale(100%)';
            filterImage.classList.remove('bounce'); // Add the 'bounce' class
        });

        filterImage.addEventListener('mouseleave', () => {
            filterImage.style.filter = 'none';
            filterImage.classList.add('bounce'); // Remove the 'bounce' class
        });

        document.addEventListener("DOMContentLoaded", function() {
            const elements = document.querySelectorAll('.loading-text');
            let elementIndex = 0;

            function clearText(element) {
                element.textContent = '';
            }

            function loadTextOneLetterAtATime(element) {
                const originalText = element.getAttribute('data-original-text');
                let index = 0;
                const intervalId = setInterval(function() {
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
                }
            }

            elements.forEach(element => {
                element.setAttribute('data-original-text', element.textContent);
                clearText(element);
            });

            loadNextElement();
        });