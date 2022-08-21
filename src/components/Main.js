let izbrannaya = document.getElementById("izbrannaya");
let polnaya = document.getElementById("polnaya");
let izbrannayaMob = document.getElementById("izbrannayaMob");
let polnayaMob = document.getElementById("polnayaMob");
let filmsIzb = document.getElementById("section__filmography-items-izb");
let filmsPol = document.getElementById("section__filmography-items-pol");
let filmsIzbMob = document.getElementById("section__filmography-items-izb-mob");
let filmsPolMob = document.getElementById("section__filmography-items-pol-mob");
let filmName = document.querySelectorAll("section__video-item-name");
let izbScroll = document.getElementById("scroll-line1");
let polScroll = document.getElementById("scroll-line2");

let progressLine = document.querySelector(".progress-line");

window.addEventListener("scroll", () => {
  let secFilmMobScroll = jQuery(".sec__filmography-mob").offset().top - 10;
  let secVideoMobScroll = jQuery(".sec__video-mob").offset().top - 10;
  let secPhotoMobScroll = jQuery(".sec__photo-mob").offset().top - 10;
  let secRezumeMobScroll = jQuery(".sec__rezume-mob").offset().top - 10;
  let secNewsMobScroll = jQuery(".sec__news-mob").offset().top - 10;
  let secTheatreMobScroll = jQuery(".sec__theatre-mob").offset().top - 10;
  let secContactsMobScroll = jQuery(".sec__contacts-mob").offset().top - 500;
  if (document.documentElement.scrollTop < secFilmMobScroll) {
    progressLine.style.width = "0";
  }
  if (document.documentElement.scrollTop > secFilmMobScroll) {
    progressLine.style.width = "calc(100% / 7)";
  }
  if (document.documentElement.scrollTop > secVideoMobScroll) {
    progressLine.style.width = "calc(100% / 7 * 2)";
  }
  if (document.documentElement.scrollTop > secPhotoMobScroll) {
    progressLine.style.width = "calc(100% / 7 * 3)";
  }
  if (document.documentElement.scrollTop > secRezumeMobScroll) {
    progressLine.style.width = "calc(100% / 7 * 4)";
  }
  if (document.documentElement.scrollTop > secNewsMobScroll) {
    progressLine.style.width = "calc(100% / 7 * 5)";
  }
  if (document.documentElement.scrollTop > secTheatreMobScroll) {
    progressLine.style.width = "calc(100% / 7 * 6)";
  }
  if (document.documentElement.scrollTop > secContactsMobScroll) {
    progressLine.style.width = "calc(100%)";
  }
});

let allIzb = document.querySelectorAll(".section__filmography-item-izb");
let allPol = document.querySelectorAll(".section__filmography-item-pol");
let allVideo = document.querySelectorAll(".section__video-item-mob");
let allPhoto = document.querySelectorAll(".section__photo-item-mob");
let allIzbLength = allIzb.length;
let allPolLength = allPol.length;
let allVideoLength = allVideo.length;
let allPhotoLength = allPhoto.length;
let showFilmographyIzb = document.getElementById("showFilmographyIzb");
let showFilmographyPol = document.getElementById("showFilmographyPol");
let showVideo = document.getElementById("showVideo");
let showPhoto = document.getElementById("showPhoto");

for (let i = 0; i < allIzbLength; i++) {
  if (i > 2) {
    allIzb[i].classList.add("opacity-0");
  }
}

for (let i = 0; i < allPolLength; i++) {
  if (i > 2) {
    allPol[i].classList.add("opacity-0");
  }
}

for (let i = 0; i < allVideoLength; i++) {
  if (i > 7) {
    allVideo[i].classList.add("opacity-0");
  }
}

for (let i = 0; i < allPhotoLength; i++) {
  if (i > 9) {
    allPhoto[i].classList.add("opacity-0");
  }
}

showFilmographyIzb.addEventListener("click", () => {
  for (let i = 3; i < allIzbLength; i++) {
    allIzb[i].classList.remove("opacity-0");
  }
  showFilmographyIzb.classList.add("opacity-0");
});

showFilmographyPol.addEventListener("click", () => {
  for (let i = 3; i < allPolLength; i++) {
    allPol[i].classList.remove("opacity-0");
  }
  showFilmographyPol.classList.add("opacity-0");
});

showVideo.addEventListener("click", () => {
  for (let i = 8; i < allVideoLength; i++) {
    allVideo[i].classList.remove("opacity-0");
  }
  showVideo.classList.add("opacity-0");
});

showPhoto.addEventListener("click", () => {
  for (let i = 8; i < allPhotoLength; i++) {
    allPhoto[i].classList.remove("opacity-0");
  }
  showPhoto.classList.add("opacity-0");
});

izbrannaya.addEventListener("click", () => {
  izbrannaya.classList.remove("unchoosed");
  polnaya.classList.add("unchoosed");
  filmsIzb.classList.remove("opacity-0");
  filmsPol.classList.add("opacity-0");
  izbScroll.classList.remove("opacity-0");
  polScroll.classList.add("opacity-0");
});

polnaya.addEventListener("click", () => {
  polnaya.classList.remove("unchoosed");
  izbrannaya.classList.add("unchoosed");
  filmsIzb.classList.add("opacity-0");
  filmsPol.classList.remove("opacity-0");
  izbScroll.classList.add("opacity-0");
  polScroll.classList.remove("opacity-0");
});

polnayaMob.addEventListener("click", () => {
  polnayaMob.classList.remove("unchoosed");
  izbrannayaMob.classList.add("unchoosed");
  filmsIzbMob.classList.add("opacity-0");
  filmsPolMob.classList.remove("opacity-0");
  showFilmographyPol.classList.remove("opacity-0");
  showFilmographyIzb.classList.add("opacity-0");
});

izbrannayaMob.addEventListener("click", () => {
  izbrannayaMob.classList.remove("unchoosed");
  polnayaMob.classList.add("unchoosed");
  filmsIzbMob.classList.remove("opacity-0");
  filmsPolMob.classList.add("opacity-0");
  showFilmographyIzb.classList.remove("opacity-0");
  showFilmographyPol.classList.add("opacity-0");
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
