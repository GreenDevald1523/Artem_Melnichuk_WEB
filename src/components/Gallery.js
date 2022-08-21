jQuery("#animated-thumbnails")
  .justifiedGallery({
    captions: false,
    rowHeight: 145,
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

jQuery("#animated-thumbnails-mob")
  .justifiedGallery({
    captions: false,
    rowHeight: 145,
    margins: 8,
  })
  .on("jg.complete", function () {
    window.lightGallery(document.getElementById("animated-thumbnails-mob"), {
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
