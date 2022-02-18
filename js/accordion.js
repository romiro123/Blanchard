$(function () {
    $('.accordion').accordion({
        active: true,
        icons: false,
        collapsible: true,
        heightStyle: "content",
        classes: {
            'ui-accordion': 'question__list',
            'ui-state-default': 'btn--question::after',
        },
    });
});
