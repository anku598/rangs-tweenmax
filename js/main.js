// var mySwiper = new Swiper('.swiper-container', {
//   speed: 1400,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//   },
//   mousewheel:true,
//   fadeEffect: {
//     crossFade: true
//   },
//   effect:'fade'
// });


var swiper__left = new Swiper('.container-left', {
  pagination: false,
  paginationClickable: false,
  direction: 'horizontal',
  speed: 1400,
  loop: false,
  autoplay: false,
  effect:"fade",
  simulateTouch: false,
  mousewheelControl: true
});

var swiper__right = new Swiper('.container-right', {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  direction: 'horizontal',
  loop: false,
  speed: 1400,
  autoplay: false,
  effect:"fade",
  simulateTouch: false,
  mousewheelControl: true
});

// var mySwiper = new Swiper(".swiper-container ", {
//   pagination: ".swiper-pagination",
//   paginationClickable: true,
//   speed: 1400,
// });


swiper__left.params.control = swiper__right;
swiper__right.params.control = swiper__left;