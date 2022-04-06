/*бургер*/
window.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('#burger');
  const burger__menu = document.querySelector('#burger-menu');
  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger-icon-active');
    if (burgerBtn.classList.contains('burger-icon-active')) {
      burger__menu.classList.add('burger-menu-active');
    } else {
      burger__menu.classList.remove('burger-menu-active');
    };
  });
});

/*---search---*/
window.addEventListener('DOMContentLoaded', function () {
  const btnSearchOpen = document.querySelector('#btn-search-open');
  const searchForm = document.querySelector('#search-form');

  btnSearchOpen.addEventListener('click', function () {
    btnSearchOpen.classList.toggle('btn--close-active');
    if (btnSearchOpen.classList.contains('btn--close-active')) {
      searchForm.classList.add('form-active');
    } else {
      searchForm.classList.remove('form-active');
    };
  });
});
