$(document).ready(function () {

    $('.hero_slider').slick({
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
   
    });
    $('.display_book_slider').slick({
      infinite: true,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            cssEase: 'linear',
            // dots: true
          }
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          }
        },
        {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            }
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            
          }
        }
       
      ]

   
    });
    
  });