
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu__btn').forEach(function (menuBtn) {
        /*let active = true*/
        menuBtn.addEventListener('click', function (eventMenuBtn) {
            active = true
            const path = eventMenuBtn.currentTarget.dataset.path;
            document.querySelectorAll('.menu__btn').forEach(function (menuBtnActive) {
                menuBtnActive.classList.remove('menu__btn--active')
            });
            eventMenuBtn.currentTarget.classList.add('menu__btn--active');
            document.querySelectorAll('.dropdown-menu').forEach(function (tabContentMenu) {
                tabContentMenu.classList.remove('dropdown-menu--active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('dropdown-menu--active')

            if (active) {
                menuBtn.addEventListener('click', function (eventMenuBtn) {
                    eventMenuBtn.currentTarget.classList.toggle('menu__btn--active');
                    document.querySelector(`[data-target="${path}"]`).classList.toggle('dropdown-menu--active')
                    active = false
                })
            } else {
                document.querySelector(`[data-target="${path}"]`).classList.toggle('dropdown-menu--active')
            }
        });
    })
})