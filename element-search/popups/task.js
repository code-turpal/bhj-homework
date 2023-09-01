const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const showSuccess = document.querySelector('.show-success');
const modalClose = document.querySelectorAll('.modal__close');

modalMain.classList.add('modal_active');

modalClose.forEach((element) => {
    element.onclick = () => {
        element.closest('.modal').classList.remove('modal_active');
    }
});

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add("modal_active");
}
