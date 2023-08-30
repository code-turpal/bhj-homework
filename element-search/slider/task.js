const sliderItem = Array.from(document.querySelectorAll(".slider__item"));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const sliderDot = document.querySelectorAll('.slider__dot');

const remove = () => {
    sliderItem.forEach(element => element.classList.remove('slider__item_active'));
};

const add = (i) => {
    sliderItem[i].classList.add('slider__item_active');
};

const dotActive = (i) => {
    sliderDot.forEach((dot) => {
        dot.classList.remove('slider__dot_active');
        sliderDot[i].classList.add('slider__dot_active');
    })
};

next.onclick = () => {
    let getIndex = sliderItem.findIndex(element => element.classList.contains('slider__item_active'))
    if (getIndex == sliderItem.length - 1) {
        getIndex = -1;
    }
    remove();
    add(getIndex + 1);
    dotActive(getIndex + 1);
};

prev.onclick = () => {
    let getIndex = sliderItem.findIndex(element => element.classList.contains('slider__item_active'))
    if (getIndex <= 0) {
        getIndex = sliderItem.length;
    }
    remove();
    add(getIndex - 1);
    dotActive(getIndex - 1);
};

sliderDot.forEach((dot, i) => {
    dot.onclick = () => {
        remove();
        add(i);
        dotActive(i);
    }
});
