$(function(){
   $('.rewiews__slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [
         {
           breakpoint: 1140,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           }
         },
      ]
      
   });

   $('.btn__menu').on('click', function(){
      $('.menu__list').slideToggle();
   });
});