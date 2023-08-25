const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modal = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal__close');
const showSucces = document.querySelector('.show-success');

modalMain.className = 'modal modal_active';

modalClose.forEach(element => {
    element.onclick = function() {
        modal.forEach(e => {
            e.className = 'modal';
        })
    }
    });

showSucces.onclick = () => {
    modalSuccess.className = 'modal modal_active';
}

