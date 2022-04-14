const btns = document.querySelectorAll('.gallery__description');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const closeBtn = document.querySelector('.modal__btn');
console.log(closeBtn);

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});

closeBtn.addEventListener('click', (e) => {
    modals.forEach((el) => {
        modalOverlay.classList.remove('modal-overlay--visible');
        el.classList.remove('modal--visible');
    });
});