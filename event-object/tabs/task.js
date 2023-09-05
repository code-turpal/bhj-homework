const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        if (tab.parentElement.querySelector('.tab_active')) {
            tab.parentElement.querySelector('.tab_active').classList.remove('tab_active');
        }
        tab.classList.add('tab_active');
        if (tabsContent[index].parentElement.querySelector('.tab__content_active')) {
            tabsContent[index].parentElement.querySelector('.tab__content_active').classList.remove('tab__content_active');
        }
        tabsContent[index].classList.add('tab__content_active');
    })
})