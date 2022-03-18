document.addEventListener("DOMContentLoaded", function () {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [48.872185073737896, 2.354223999999991],
            zoom: 14,
            controls: []
        }, {
            suppressMapOpenBlock: true
        });

        var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/subtract.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-15, -42]
        });

        myMap.geoObjects.add(myPlacemark);
    }
});
