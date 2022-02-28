document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn--person').forEach(function (stepBtn) {
        stepBtn.addEventListener('click', function (eventStep) {
            const path = eventStep.currentTarget.dataset.path;
            document.querySelectorAll('.btn--person').forEach(function (btn) {
                btn.classList.remove('btn--person-active')
            });
            eventStep.currentTarget.classList.add('person--active');
            document.querySelectorAll('.person').forEach(function (tabContent) {
                tabContent.classList.remove('person--active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('person--active')
        });
    })
})
