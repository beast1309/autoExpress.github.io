$(function () {

    $('.slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 611,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

});