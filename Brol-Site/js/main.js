 jQuery(document).ready(function(){

   "use strict"
    $('.slider').ripples({
      dropRadius: 10,
      perturbance: 0.00001,

    });

     $(".text").typed({
        strings:["<strong>Strength in</strong><strong class='primary'> Circularity.</strong>","<strong>all taste</strong><strong class='primary'> No Waste.</strong>"],
         typespeed:0,
         backspeed:0,
         loop:true

     });

    $(window).scroll(function(){

       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary');
        }

        else
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary');
            }
    });

      $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
      enabled: true
       }

    });

      $("#team-members").owlCarousel({
          items:3,
          autoplay:true,
          smartSpeed:700,
          loop:true,
          autoplayHoverPause:true,
            responsive:{
              0:{

                 items:1
              },
             480:{

                 items:2
              },

             768:{

                 items:3
              }
            }



      });
     $('.counter').counterUp({
                delay: 10,
                time: 4000
            });

      $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
     new WOW().init();



     $('.navbar-nav>li>a').on('click', function(){
         $('.navbar-collapse').collapse('hide');
     });



 });
