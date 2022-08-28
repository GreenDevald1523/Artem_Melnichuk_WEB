$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoWidth: true
  });

  jQuery(function () {
    jQuery("a.bla-1").YouTubePopUp({ autoplay: 0 }); // Disable autoplay
  });
});
