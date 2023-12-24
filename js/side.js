
function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.style.display = 'block'; 
    setTimeout(() => {
        sideMenu.classList.toggle('menu-open');
    }, 0); 
}

function closeMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('menu-open');
    setTimeout(() => {
        sideMenu.style.display = 'none'; 
    }, 300); 
}