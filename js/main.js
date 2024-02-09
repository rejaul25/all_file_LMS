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
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            
          }
        }
       
      ]

   
    });

    // when scrollamount > 100 header position fixed in top 0
/*
    $(window).scroll(function(){
      if($(this).scrollTop() > 100) {
          $('#myHeader').css({'position':'fixed', 'top':'0'});
      } else {
          $('#myHeader').css({'position':'static'});
      }
  });
  */

  

    
  });

  

    //  this is single page book display slider
    $(document).ready(function(){
      // Initialize first slider
      $('#slider1').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
         
        ] 
      });
  
      // Initialize second slider
      $('#slider2').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
         
        ] 
      });

          // Initialize second slider
          $('#slider3').slick({
            infinite: true,
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
                responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
         
        ] 
          });

              // Initialize second slider
      $('#slider4').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
         
        ] 
      });

          // Initialize second slider
          $('#slider5').slick({
            infinite: true,
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
                responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
         
        ] 
          });

              // Initialize second slider
      $('#slider6').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            }
          },
          
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          }
         
        ] 
      });
  
      // Custom button click events
      $('.prev_btn').click(function(){
        var sliderId = $(this).data('slider');
        $(sliderId).slick('slickPrev');
      });
  
      $('.next_btn').click(function(){
        var sliderId = $(this).data('slider');
        $(sliderId).slick('slickNext');
      });
    });