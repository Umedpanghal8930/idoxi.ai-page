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
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
