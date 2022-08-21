window.onload = function () {
  let preloader = document.getElementById("preloader-body");
  let preloaderTitle = document.getElementById("artem-melnichuk");
  let preloaderSub = document.getElementById("artem-melnichuk__sub");
  let preloaderBg = document.getElementById("bg-video");
  let mainContent = document.getElementById("mainContent");
  preloader.classList.remove("animation-fadeIn");
  // preloaderTitle.classList.add("animation-step1-title");
  // preloaderSub.classList.add("animation-step1-sub");
  preloaderBg.classList.add("animation-step1-bg");
  setTimeout(() => {
    preloader.classList.add("animation-step2-prel-body");
    preloaderTitle.classList.add("animation-fz-20");
    preloaderSub.classList.add("animation-fz-16");
    mainContent.classList.remove("opacity-0");
    mainContent.classList.add("animation-fadeLeft");
  }, 2000);
  setTimeout(() => {
    preloaderTitle.classList.add("fz-20");
    preloaderSub.classList.add("fz-16");
  }, 4000);
  for (let i = 1; i <= 7; i++) {
    let filmThumb = document.querySelector(`#scroll-line-thumb${i}`);
    let curYear = document.querySelector(`#current-year${i}`);
    var scrollbar = document.getElementById(`scrollbar${i}`);
    let scrolline = document.getElementById(`scroll-line${i}`);
    var container = scrollbar.parentNode;
    container.scrollbar = filmThumb;
    container.ratio =
      (container.scrollHeight - container.offsetHeight) /
      (container.offsetHeight - scrolline.offsetHeight);
    console.log(container.ratio)
    container.addEventListener("mousewheel", function (e) {
      this.scrollTop += e.deltaY;
      filmThumb.style.left =
        scrolline.offsetWidth *
          (this.scrollTop / (this.scrollHeight - this.clientHeight)) - 5 +
        "px";
      curYear.style.left =
        scrolline.offsetWidth *
          (this.scrollTop / (this.scrollHeight - this.clientHeight)) -
        15 +
        "px";
    });
    container.addEventListener("mousedown", function (e) {
      this.scrollTop += e.deltaY;
      filmThumb.style.left =
        scrolline.offsetWidth *
          (this.scrollTop / (this.scrollHeight - this.clientHeight)) - 5 +
        "px";
      curYear.style.left =
        scrolline.offsetWidth *
          (this.scrollTop / (this.scrollHeight - this.clientHeight)) -
        15 +
        "px";
    });
    // container.addEventListener("mousedown", function (e) {
    //   if (e.target === filmThumb) {
    //     this.prevY = e.pageY;
    //   }
    // });
    container.addEventListener("mouseup", function (e) {
      this.prevY = null;
    });
    container.addEventListener("mousemove", function (e) {
      if (this.prevY) {
        this.scrollTop += (e.pageY - this.prevY) * this.ratio;
        filmThumb.style.left =
          scrolline.offsetWidth *
            (this.scrollTop / (this.scrollHeight - this.clientHeight)) +
          "px";
        curYear.style.left =
          scrolline.offsetWidth *
            (this.scrollTop / (this.scrollHeight - this.clientHeight)) -
          12 +
          "px";
        this.prevY = e.pageY;
      }
      e.preventDefault();
    });
    // scrolline.addEventListener("click", function (e))
  }
};

// let w = document.getElementById('section__filmography-items-pol')
// let src = document.getElementById('rangeScroll')

// src.addEventListener('input', function () {
//   const num = Number(src.value);
//   $(w).scrollTop(num);
// })

// w.addEventListener('scroll', function(e) {
//   src.value = w.scrollY;
//   windowScrollTop = $(w).scrollTop();
// }, false);
