window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const header = document.querySelector('header');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.top = '-50px';
    } else {
        header.style.top = '0';
    }
}
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