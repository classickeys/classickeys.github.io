document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('neon-section');
    const hoverImg = document.getElementById('hoverImg');
    const colorChangeDiv = document.getElementById('bg-color');
    const textToChangeColor = document.getElementById('about-txt');
    const buttons = document.getElementById('buttonsC');

    let timeoutId;

    hoverImg.addEventListener('mouseenter', () => {
        if (!container.classList.contains('neon-bars-created')) {
            createNeonBars();
            container.classList.add('neon-bars-created');
            changeButtons(buttons, 'ghostwhite', 'rgb(38, 38, 38)');
            changeColor(colorChangeDiv, 'rgb(41, 41, 41)'); // Change color of a div
            changeFontColor(textToChangeColor, 'ghostwhite'); // Change color of text
        }
    });

    hoverImg.addEventListener('mouseleave', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            removeNeonBars();
            container.classList.remove('neon-bars-created');
            changeButtons(buttons, 'rgb(38, 38, 38)', 'ghostwhite');
            changeColor(colorChangeDiv, 'linear-gradient(to bottom, hsla(240, 100%, 99%, 0.826), rgba(38, 38, 38, 0.17),rgba(250, 250, 255, 0.826)), linear-gradient(to bottom, rgba(38, 38, 38, 0.17), rgba(250, 250, 255, 0.826))'); // Revert color of a div
            changeFontColor(textToChangeColor, 'rgb(82, 82, 82)'); // Revert color of text
        }, 3000);
    });

    function createNeonBars() {
        const numberOfBars = 40;

        for (let i = 0; i < numberOfBars; i++) {
            const bar = document.createElement('div');
            bar.className = 'neon-bar rotate-' + getRandomRotation();
            container.appendChild(bar);

            const width = Math.random() * 20 + 10; // Random width between 10 and 40 pixels
            const height = Math.random() * 100 + 50; // Random height between 50 and 150 pixels
            const left = Math.random() * (container.offsetWidth - width);
            const top = Math.random() * (container.offsetHeight - height);

            const neonColor = getRandomBrightNeonColor();
            bar.style.backgroundColor = neonColor;

            bar.style.width = `${width}px`;
            bar.style.height = `${height}px`;
            bar.style.left = `${left}px`;
            bar.style.top = `${top}px`;
        }
    }

    function removeNeonBars() {
        const neonBars = document.querySelectorAll('.neon-bar');
        neonBars.forEach(bar => {
            container.removeChild(bar);
        });
    }

    function changeColor(element, color) {
        element.style.background = color;
    }

    function changeFontColor(element, color) {
        element.style.color = color;
    }

    function changeButtons(element, color, color2) {
        element.style.background = color;
        element.style.color = color2;
    }

    function getRandomBrightNeonColor() {
        const neonColors = ['#ff00ff', '#00ffff', '#ffcc00', '#cc00ff', '#00ff00', '#ff0000', '#ffff00'];
        return neonColors[Math.floor(Math.random() * neonColors.length)];
    }

    function getRandomRotation() {
        const rotations = ['45deg', '90deg', '135deg']; // Add more rotation angles as needed
        return rotations[Math.floor(Math.random() * rotations.length)];
    }
});
