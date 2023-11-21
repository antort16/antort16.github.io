document.addEventListener('DOMContentLoaded', () => {
    const elementsCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementsCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 10,
        indicators: true,
        noWrap: false
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {
        inDuration: 300,
        outDuration: 250
    });
});
