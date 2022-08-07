document.body.onload = function () {
  let preloader = document.getElementById("preloader-body");
  let preloaderTitle = document.getElementById("artem-melnichuk");
  let preloaderSub = document.getElementById("artem-melnichuk__sub");
  let preloaderBg = document.getElementById("bg-video");
  let mainContent = document.getElementById('mainContent')
  preloader.classList.remove('animation-fadeIn')
  preloaderTitle.classList.add("animation-step1-title");
  preloaderSub.classList.add("animation-step1-sub");
  preloaderBg.classList.add("animation-step1-bg");
  setTimeout(() => {
    preloader.classList.add('animation-step2-prel-body')
    preloaderTitle.classList.add("animation-fz-20");
    preloaderSub.classList.add("animation-fz-16");
    mainContent.classList.remove('opacity-0')
    mainContent.classList.add('animation-fadeLeft')
  }, 1500)
};
