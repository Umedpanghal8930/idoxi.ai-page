$('.frist_sldr').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: true,
    cssEase: 'linear',
});


$('.Testimonials-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1.7,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,

    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});