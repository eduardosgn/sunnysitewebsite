const navMenu = document.querySelector('.nav-menu');
const burgerButton = document.querySelector('.nav-burger');


burgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-active');
    burgerButton.classList.toggle('nav-burger-active');
    
    const navMenuLis = document.querySelectorAll('.lis');
    setTimeout(() => {
        for(let i = 0; i < navMenuLis.length; i++) {
            navMenuLis[i].style.opacity = 1;
        };
    }, 300);

});