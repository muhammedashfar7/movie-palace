document.addEventListener("DOMContentLoaded",function(){if(window.jQuery){if($("div.details__bg").data("bg")){let e=$("div.details__bg").data("bg");$("div.details__bg").css({background:`url(${e}) no-repeat center/cover`,height:"550px"})}$("#owl-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",mouseDrag:!0,touchDrag:!0,responsive:{0:{items:2},600:{items:3},1000:{items:5}},loop:!1,autoplay:!0,nav:!0,dots:!1,smartSpeed:600,lazyLoad:!0}),$("#owl-carousel-cast").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",mouseDrag:!0,touchDrag:!0,responsive:{0:{items:2},600:{items:3},1000:{items:4}},loop:!1,autoplay:!0,nav:!0,dots:!1,smartSpeed:600,lazyLoad:!0})}});
//# sourceMappingURL=owl.carousel-init.js.map