$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

  // click to scroll top
  $('.move-up span').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})

// AOS Instance
AOS.init();