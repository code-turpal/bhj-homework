const dropdownValue = document.querySelectorAll('.dropdown__value');
const dropdownList = document.querySelectorAll('.dropdown__list');
const links = document.querySelectorAll('.dropdown__link');

dropdownValue.forEach(element => {
    element.addEventListener("click", () => {
        element.parentElement.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
    })
});

// Хотелось бы понять почему данный шаг не получается выполнить с помощью метода "addEventListener" ?
links.forEach(link => {
    link.onclick = () => {
        link.closest('.dropdown').querySelector('.dropdown__value').textContent = link.textContent;
        link.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        return false;
    }
});