let filmography = document.getElementById("filmography");
let video = document.getElementById("video");
let photo = document.getElementById("photo");
let rezume = document.getElementById("rezume");
let news = document.getElementById("news");
let theatre = document.getElementById("theatre");
let contacts = document.getElementById("contacts");
filmography.addEventListener("click", () => {
  filmography.classList.add("clr-gold");
  video.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
});
video.addEventListener("click", () => {
  video.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
});
photo.addEventListener("click", () => {
  photo.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  video.classList.remove("clr-gold");
  rezume.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
});
rezume.addEventListener("click", () => {
  rezume.classList.add("clr-gold");
  filmography.classList.remove("clr-gold");
  photo.classList.remove("clr-gold");
  video.classList.remove("clr-gold");
  news.classList.remove("clr-gold");
  theatre.classList.remove("clr-gold");
  contacts.classList.remove("clr-gold");
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
