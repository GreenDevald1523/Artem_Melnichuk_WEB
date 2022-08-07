let filmography = document.getElementById("filmography");
let video = document.getElementById("video");
let photo = document.getElementById("photo");
let rezume = document.getElementById("rezume");
let news = document.getElementById("news");
let theatre = document.getElementById("theatre");
let contacts = document.getElementById("contacts");
let filmographySection = document.querySelector('.section__filmography')
let videoSection = document.querySelector('.section__video')
let  photoSection = document.querySelector('.section__photo')
let  rezumeSection = document.querySelector('.section__rezume')
filmography.addEventListener("click", () => {
  filmography.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  filmographySection.classList.remove('opacity-0')
  videoSection.classList.add('opacity-0')
  photoSection.classList.add('opacity-0')
  rezumeSection.classList.add('opacity-0')
});
video.addEventListener("click", () => {
  video.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  filmographySection.classList.add('opacity-0')
  videoSection.classList.remove('opacity-0')
  photoSection.classList.add('opacity-0')
  rezumeSection.classList.add('opacity-0')
});
photo.addEventListener("click", () => {
  photo.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  video.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  photoSection.classList.remove('opacity-0')
  videoSection.classList.add('opacity-0')
  filmographySection.classList.add('opacity-0')
  rezumeSection.classList.add('opacity-0')
});
rezume.addEventListener("click", () => {
  rezume.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  video.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
  rezumeSection.classList.remove('opacity-0')
  photoSection.classList.add('opacity-0')
  videoSection.classList.add('opacity-0')
  filmographySection.classList.add('opacity-0')
});
news.addEventListener("click", () => {
  news.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  filmography.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
});
theatre.addEventListener("click", () => {
  theatre.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  filmography.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
});
contacts.addEventListener("click", () => {
  contacts.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  filmography.classList.remove("clr-gold");
});


