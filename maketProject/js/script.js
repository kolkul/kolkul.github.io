$(document).ready(function(){
  $('.advantages__general-box').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: true,
          slidesToShow: 2,
          prevArrow: '<button class="prev arrow"></div>',
          nextArrow: '<button class="next arrow"></div>',
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          prevArrow: '<button class="prev arrow"></div>',
          nextArrow: '<button class="next arrow"></div>',
          slidesToScroll: 1
        }
      }
    ]
  });
});
