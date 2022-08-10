const listSliders = document.getElementsByClassName("slider").length;

for (let i = 1; i <= listSliders; i++) {
  let slides = document.getElementsByClassName(`slider__slide${i}`);
  let navlinks = document.getElementsByClassName(`slider__navlink${i}`);
  let currentSlide = 0;

  document
    .getElementById(`nav-button--next${i}`)
    .addEventListener("click", () => {
      changeSlide(currentSlide + 1);
    });
  document
    .getElementById(`nav-button--prev${i}`)
    .addEventListener("click", () => {
      changeSlide(currentSlide - 1);
    });

  function changeSlide(moveTo) {
    if (moveTo >= slides.length) {
      moveTo = 0;
    }
    if (moveTo < 0) {
      moveTo = slides.length - 1;
    }

    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");

    currentSlide = moveTo;
  }

  document
    .querySelectorAll(`.slider__navlink${i}`)
    .forEach((bullet, bulletIndex) => {
      bullet.addEventListener("click", () => {
        if (currentSlide !== bulletIndex) {
          changeSlide(bulletIndex);
        }
      });
    });
}
