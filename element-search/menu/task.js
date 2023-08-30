const menuSub = document.querySelectorAll('.menu_sub');
const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach(link => {
    link.onclick = () => {
        if (link.parentElement.querySelector('.menu_sub') !== null) {
            if (link.closest('ul').querySelector('.menu_active') !== null) {
                link.closest('ul').querySelector('.menu_active').classList.toggle('menu_active');
            }
            link.parentElement.querySelector('.menu_sub').classList.toggle('menu_active');
            return false;
        }
    }
});