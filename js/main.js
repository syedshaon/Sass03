$(document).ready(function () {
    $('.mySlider').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        cssEse: 'ease-out',
        speed: 1000,
        autoplaySpeed: 2000
    });
    $('.mySlider2').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        cssEse: 'ease-out',
        speed: 1000,
        autoplaySpeed: 2000
    });

    $('.mySlider3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dots: true,
        arrows: true,
        cssEse: 'ease-out',
        speed: 1000,
        autoplaySpeed: 2000
    });

    $('.mySlider4').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.mySlider5').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true
    });

    $('.mySlider6').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        cssEse: 'ease-out',
        speed: 1000,
        autoplaySpeed: 2000
    });
    $('.mySlider7').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '160px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
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


    $('.mySlider8').slick({
        lazyLoad: 'ondemand',
        dots: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});