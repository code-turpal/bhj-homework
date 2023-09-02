const menuSub = document.querySelectorAll('.menu_sub');
const menuLink = document.querySelectorAll('.menu__link');
let activeMenuSub;

menuLink.forEach((link, index) => {
    link.onclick = () => {  

        if (link.parentElement.querySelector('.menu_sub') !== null) {
            if (activeMenuSub === index) {
                link.parentElement.querySelector('.menu_sub').classList.toggle('menu_active');
                return false;
            }
            if (link.closest('ul').querySelector('.menu_active') !== null) {
                link.closest('ul').querySelector('.menu_active').classList.remove('menu_active');
            } 

            activeMenuSub = index;
            
            link.parentElement.querySelector('.menu_sub').classList.add('menu_active');
            return false;
        }
    }
});
