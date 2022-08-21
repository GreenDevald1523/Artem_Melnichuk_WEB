let filmography = document.getElementById("filmography");
let video = document.getElementById("video");
let photo = document.getElementById("photo");
let rezume = document.getElementById("rezume");
let news = document.getElementById("news");
let theatre = document.getElementById("theatre");
let contacts = document.getElementById("contacts");
let filmographySection = document.querySelector(".section__filmography");
let videoSection = document.querySelector(".section__video");
let photoSection = document.querySelector(".section__photo");
let rezumeSection = document.querySelector(".section__rezume");
let newsSection = document.querySelector(".section__news");
let theatreSection = document.querySelector(".section__theatre");
let contactsSection = document.querySelector(".section__contacts");
let preloaderTitle = document.getElementById("artem-melnichuk");
let preloaderSub = document.getElementById("artem-melnichuk__sub");
let rezSecBody = document.querySelector(".section__rezume-body");

filmography.addEventListener("click", () => {
  filmography.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  filmographySection.classList.remove("opacity-0");
  videoSection.classList.add("opacity-0");
  photoSection.classList.add("opacity-0");
  rezumeSection.classList.add("opacity-0");
  newsSection.classList.add("opacity-0");
  theatreSection.classList.add("opacity-0");
  contactsSection.classList.add("opacity-0");
  if (preloaderTitle.classList.contains("section__rezume-title-anim")) {
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("rezumeTitleLeave");
    preloaderSub.classList.add("rezumeTitleSub");
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("section__rezume-title-leave-anim");
    preloaderSub.classList.add("section__rezume-sub-leave-anim");
    preloaderTitle.classList.add("mb-8");
    document
      .querySelector(".section__rezume-title")
      .classList.add("vis-hidden");
    document.querySelector(".section__rezume-sub").classList.add("vis-hidden");
    preloaderTitle.classList.remove("vis-hidden");
    preloaderSub.classList.remove("vis-hidden");
    setTimeout(() => {
      preloaderTitle.classList.remove("section__rezume-title-leave-anim");
      preloaderSub.classList.remove("section__rezume-sub-leave-anim");
    }, 600);
  }
});
video.addEventListener("click", () => {
  video.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  filmographySection.classList.add("opacity-0");
  videoSection.classList.remove("opacity-0");
  photoSection.classList.add("opacity-0");
  rezumeSection.classList.add("opacity-0");
  newsSection.classList.add("opacity-0");
  theatreSection.classList.add("opacity-0");
  contactsSection.classList.add("opacity-0");
  if (preloaderTitle.classList.contains("section__rezume-title-anim")) {
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("rezumeTitleLeave");
    preloaderSub.classList.add("rezumeTitleSub");
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("section__rezume-title-leave-anim");
    preloaderSub.classList.add("section__rezume-sub-leave-anim");
    preloaderTitle.classList.add("mb-8");
    document
      .querySelector(".section__rezume-title")
      .classList.add("vis-hidden");
    document.querySelector(".section__rezume-sub").classList.add("vis-hidden");
    preloaderTitle.classList.remove("vis-hidden");
    preloaderSub.classList.remove("vis-hidden");
    setTimeout(() => {
      preloaderTitle.classList.remove("section__rezume-title-leave-anim");
      preloaderSub.classList.remove("section__rezume-sub-leave-anim");
    }, 600);
  }
});
photo.addEventListener("click", () => {
  photo.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  video.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  photoSection.classList.remove("opacity-0");
  videoSection.classList.add("opacity-0");
  filmographySection.classList.add("opacity-0");
  rezumeSection.classList.add("opacity-0");
  newsSection.classList.add("opacity-0");
  theatreSection.classList.add("opacity-0");
  contactsSection.classList.add("opacity-0");
  if (preloaderTitle.classList.contains("section__rezume-title-anim")) {
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("rezumeTitleLeave");
    preloaderSub.classList.add("rezumeTitleSub");
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("section__rezume-title-leave-anim");
    preloaderSub.classList.add("section__rezume-sub-leave-anim");
    preloaderTitle.classList.add("mb-8");
    document
      .querySelector(".section__rezume-title")
      .classList.add("vis-hidden");
    document.querySelector(".section__rezume-sub").classList.add("vis-hidden");
    preloaderTitle.classList.remove("vis-hidden");
    preloaderSub.classList.remove("vis-hidden");
    setTimeout(() => {
      preloaderTitle.classList.remove("section__rezume-title-leave-anim");
      preloaderSub.classList.remove("section__rezume-sub-leave-anim");
    }, 600);
  }
});
rezume.addEventListener("click", () => {
  rezume.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  video.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  rezumeSection.classList.remove("opacity-0");
  photoSection.classList.add("opacity-0");
  videoSection.classList.add("opacity-0");
  filmographySection.classList.add("opacity-0");
  newsSection.classList.add("opacity-0");
  theatreSection.classList.add("opacity-0");
  contactsSection.classList.add("opacity-0");
  preloaderTitle.classList.add("section__rezume-title-anim");
  preloaderSub.classList.add("section__rezume-sub-anim");
  preloaderTitle.classList.remove("rezumeTitleLeave");
  preloaderSub.classList.remove("rezumeTitleSub");
  preloaderTitle.classList.remove("mb-8");
  setTimeout(() => {
    document
      .querySelector(".section__rezume-title")
      .classList.remove("vis-hidden");
    document
      .querySelector(".section__rezume-sub")
      .classList.remove("vis-hidden");
    preloaderTitle.classList.add("vis-hidden");
    preloaderSub.classList.add("vis-hidden");
  }, 600);
  if (rezSecBody.scrollTop > 0) {
    rezSecBody.scrollTop = 0;
  }
});
news.addEventListener("click", () => {
  news.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  filmography.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  rezumeSection.classList.add("opacity-0");
  photoSection.classList.add("opacity-0");
  videoSection.classList.add("opacity-0");
  filmographySection.classList.add("opacity-0");
  newsSection.classList.remove("opacity-0");
  theatreSection.classList.add("opacity-0");
  contactsSection.classList.add("opacity-0");
  if (preloaderTitle.classList.contains("section__rezume-title-anim")) {
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("rezumeTitleLeave");
    preloaderSub.classList.add("rezumeTitleSub");
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("section__rezume-title-leave-anim");
    preloaderSub.classList.add("section__rezume-sub-leave-anim");
    preloaderTitle.classList.add("mb-8");
    document
      .querySelector(".section__rezume-title")
      .classList.add("vis-hidden");
    document.querySelector(".section__rezume-sub").classList.add("vis-hidden");
    preloaderTitle.classList.remove("vis-hidden");
    preloaderSub.classList.remove("vis-hidden");
    setTimeout(() => {
      preloaderTitle.classList.remove("section__rezume-title-leave-anim");
      preloaderSub.classList.remove("section__rezume-sub-leave-anim");
    }, 600);
  }
});
theatre.addEventListener("click", () => {
  theatre.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  filmography.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  theatreSection.classList.remove("opacity-0");
  rezumeSection.classList.add("opacity-0");
  photoSection.classList.add("opacity-0");
  videoSection.classList.add("opacity-0");
  filmographySection.classList.add("opacity-0");
  newsSection.classList.add("opacity-0");
  contactsSection.classList.add("opacity-0");
  if (preloaderTitle.classList.contains("section__rezume-title-anim")) {
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("rezumeTitleLeave");
    preloaderSub.classList.add("rezumeTitleSub");
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("section__rezume-title-leave-anim");
    preloaderSub.classList.add("section__rezume-sub-leave-anim");
    preloaderTitle.classList.add("mb-8");
    document
      .querySelector(".section__rezume-title")
      .classList.add("vis-hidden");
    document.querySelector(".section__rezume-sub").classList.add("vis-hidden");
    preloaderTitle.classList.remove("vis-hidden");
    preloaderSub.classList.remove("vis-hidden");
    setTimeout(() => {
      preloaderTitle.classList.remove("section__rezume-title-leave-anim");
      preloaderSub.classList.remove("section__rezume-sub-leave-anim");
    }, 600);
  }
});
contacts.addEventListener("click", () => {
  contacts.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  filmography.classList.remove("clr-gold");
  contactsSection.classList.remove("opacity-0");
  theatreSection.classList.add("opacity-0");
  rezumeSection.classList.add("opacity-0");
  photoSection.classList.add("opacity-0");
  videoSection.classList.add("opacity-0");
  filmographySection.classList.add("opacity-0");
  newsSection.classList.add("opacity-0");
  if (preloaderTitle.classList.contains("section__rezume-title-anim")) {
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("rezumeTitleLeave");
    preloaderSub.classList.add("rezumeTitleSub");
    preloaderTitle.classList.remove("section__rezume-title-anim");
    preloaderSub.classList.remove("section__rezume-sub-anim");
    preloaderTitle.classList.add("section__rezume-title-leave-anim");
    preloaderSub.classList.add("section__rezume-sub-leave-anim");
    preloaderTitle.classList.add("mb-8");
    document
      .querySelector(".section__rezume-title")
      .classList.add("vis-hidden");
    document.querySelector(".section__rezume-sub").classList.add("vis-hidden");
    preloaderTitle.classList.remove("vis-hidden");
    preloaderSub.classList.remove("vis-hidden");
    setTimeout(() => {
      preloaderTitle.classList.remove("section__rezume-title-leave-anim");
      preloaderSub.classList.remove("section__rezume-sub-leave-anim");
    }, 600);
  }
});
