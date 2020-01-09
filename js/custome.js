$(document).ready(function(){
  $(".en").click(function(){
  $(".pt").slideToggle("slow");
  });
  });
$(document).ready(function(){
  $('.icon').click(function(){
      $('.search').toggleClass('active');
  });
});

$('.banner-heading').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: '<button class="next-arrow"><i class="fas fa-arrow-right"></i> </button>',
    prevArrow: '<button class="back-arrow"><i class="fas fa-arrow-left"></i></button>',
    responsive: [

      {
       breakpoint: 992,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
      },
     {
       breakpoint: 525,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   
     ]
     
     });

