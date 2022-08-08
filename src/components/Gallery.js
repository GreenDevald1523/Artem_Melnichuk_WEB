jQuery("#animated-thumbnails")
  .justifiedGallery({
    captions: false,
    rowHeight: 180,
    margins: 8,
  })
  .on("jg.complete", function () {
    window.lightGallery(document.getElementById("animated-thumbnails"), {
      pager: true,
      galleryId: "nature",
      plugins: [lgZoom, lgThumbnail],
      mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false,
        rotate: false,
      },
    });
  });

// lightGallery(document.getElementById('aniimated-thumbnials'), {
//   thumbnail:true
// });
