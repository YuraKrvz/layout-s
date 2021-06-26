$(function(){
   $(function(){

      $('.slider').slick({
         nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/about/arrow-next.svg" alt=""></button>',
         prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/about/arrow-prev.svg" alt=""></button>',
         autoplay: true,
         responsive: [
            {
              breakpoint: 620,
              settings: {
               arrows: false,
              }
            },
      
          ]
          
      });
   
      // $('select').styler();
   
      $('.header__menu-btn').on('click', function(){
         $('.header__menu ul').slideToggle();
      });
   
   
   });
});



