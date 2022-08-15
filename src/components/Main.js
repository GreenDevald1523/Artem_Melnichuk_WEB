let izbrannaya = document.getElementById("izbrannaya");
let polnaya = document.getElementById("polnaya");
let filmsIzb = document.getElementById("section__filmography-items-izb");
let filmsPol = document.getElementById("section__filmography-items-pol");
let filmName = document.querySelectorAll("section__video-item-name");
let izbScroll = document.getElementById('scroll-line1')
let polScroll = document.getElementById('scroll-line2')

izbrannaya.addEventListener("click", () => {
  izbrannaya.classList.remove("unchoosed");
  polnaya.classList.add("unchoosed");
  filmsIzb.classList.remove("opacity-0");
  filmsPol.classList.add("opacity-0");
  izbScroll.classList.remove("opacity-0")
  polScroll.classList.add("opacity-0")
});

polnaya.addEventListener("click", () => {
  polnaya.classList.remove("unchoosed");
  izbrannaya.classList.add("unchoosed");
  filmsIzb.classList.add("opacity-0");
  filmsPol.classList.remove("opacity-0");
  izbScroll.classList.add("opacity-0")
  polScroll.classList.remove("opacity-0")
});

document.addEventListener("DOMContentLoaded", function () {
  if ("IntersectionObserver" in window) {
    var iframesLazy = document.querySelectorAll(
      "iframe.section__video-item-video"
    );
    var iframeObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.target.src.length == 0) {
          entry.target.src = entry.target.dataset.src;
          iframeObserver.unobserve(entry.target);
        }
      });
    });
    iframesLazy.forEach(function (iframe) {
      iframeObserver.observe(iframe);
    });
  } else {
    var iframesLazy = document.querySelector(
      "iframe.section__video-item-video"
    );
    for (var i = 0; i < iframesLazy.length; i++) {
      if (lazyVids[i].getAttribute("data-src")) {
        lazyVids[i].setAttribute("src", lazyVids[i].getAttribute("data-src"));
      }
    }
  }
});


