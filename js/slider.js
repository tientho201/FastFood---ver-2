
$(document).ready(function () {
  $('.slideshow-container').slick({
    autoplaySpeed: 2000,
    autoplay: true,
    Infinity: true,
  });
  $('.slideshow-container').on('mouseenter', function () {
    $('.slideshow-container').slick('slickPlay');
  });

  // Chạy lại slick khi rời chuột
  $('.slideshow-container').on('mouseleave', function () {
    $('.slideshow-container').slick('slickPlay');
  });
});
