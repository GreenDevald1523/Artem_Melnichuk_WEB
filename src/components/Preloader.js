window.onload = function () {
  let preloader = document.getElementById("preloader-body");
  let preloaderTitle = document.getElementById("artem-melnichuk");
  let preloaderSub = document.getElementById("artem-melnichuk__sub");
  let preloaderBg = document.getElementById("bg-video");
  let preloaderBgMob = document.getElementById("bg-video-second")
  let mainContent = document.getElementById("mainContent");

  let mobNote = document.querySelector('.artem-melnichuk-node')
  preloader.classList.remove("animation-fadeIn");
  // preloaderTitle.classList.add("animation-step1-title");
  // preloaderSub.classList.add("animation-step1-sub");
  preloaderBg.classList.add("animation-step1-bg");
  preloaderBgMob.classList.add("animation-fadeIn-mob-bg");
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
    let scrollbar = document.getElementById(`scrollbar${i}`);
    let scrolline = document.getElementById(`scroll-line${i}`);

    let scrollStartY = 133;
    let scrollEndY = 133;
    let scrollDelta = 0;
    let mouseDown = false
    let contentElement = document.querySelector(`._scrollbar-container${i}`);

    function changeScrollDelta (persentage) {
      scrollDelta += persentage;
        if (scrollDelta > 1) scrollDelta = 1
        if (scrollDelta < 0) scrollDelta = 0
    }

    let container = scrollbar.parentNode;
    container.scrollbar = filmThumb;
    container.ratio =
      (container.scrollHeight - container.offsetHeight) /
      (container.offsetHeight - scrolline.offsetHeight);
    console.log(container.ratio)
    container.addEventListener("mousewheel", function (e) {
      this.scrollTop += e.deltaY;
      changeScrollDelta(e.deltaY / scrolline.offsetWidth)
      filmThumb.style.left =
        scrolline.offsetWidth *
        scrollDelta - 5 +
        "px";
      curYear.style.left =
        scrolline.offsetWidth *
        scrollDelta -
        15 +
        "px";
    });
    scrolline.addEventListener("click", function (e) {
      console.log("e.clientY", e.clientY)
      scrollEndY = e.clientY
        contentElement.scrollTop += scrollEndY - scrollStartY;

        changeScrollDelta((scrollEndY - scrollStartY) / scrolline.offsetWidth)
        scrollStartY = e.clientY
        
        filmThumb.style.left = scrolline.offsetWidth *
        scrollDelta - 5 +
        "px";
      curYear.style.left =
        scrolline.offsetWidth *
        scrollDelta - 20 +
        "px";         
    });
    filmThumb.addEventListener("mousedown", function (e) {
      console.log('mouse has downed')
      mouseDown = true
      scrollStartY = e.clientY
    });
    filmThumb.addEventListener("mouseup", function (e) {
      console.log('mouse up')
      mouseDown = false
    });
    container.addEventListener("mouseup", function (e) {
      console.log('mouse up')
      mouseDown = false
    });
    container.addEventListener("mousemove", function (e) {
      
      if (mouseDown) {
        e.preventDefault()
        scrollEndY = e.clientY
        this.scrollTop += scrollEndY - scrollStartY;
        changeScrollDelta((scrollEndY - scrollStartY) / scrolline.offsetWidth)
        scrollStartY = e.clientY
        
        filmThumb.style.left = scrolline.offsetWidth *
        scrollDelta - 5 +
        "px";
      curYear.style.left =
        scrolline.offsetWidth *
        scrollDelta - 15 +
        "px";     
      }
      
    });
    scrolline.addEventListener("mousemove", function (e) {
      
      if (mouseDown) {
        e.preventDefault()
        scrollEndY = e.clientY
        contentElement.scrollTop += scrollEndY - scrollStartY;
        changeScrollDelta((scrollEndY - scrollStartY) / scrolline.offsetWidth)
        scrollStartY = e.clientY
        
        filmThumb.style.left = scrolline.offsetWidth *
        scrollDelta - 5 +
        "px";
      curYear.style.left =
        scrolline.offsetWidth *
        scrollDelta - 20 +
        "px";     
      }
      
    });
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


// console.log("e.clientY", e.clientY,
        // "scrollEndY", scrollEndY,
        // "scrollStartY", scrollStartY,
        // "all height", scrolline.offsetWidth
        // )
        // console.log('scroll %', (scrollEndY - scrollStartY) / scrolline.offsetWidth)
        // const delta = (contentElement.scrollTop / (contentElement.scrollHeight - contentElement.clientHeight))
        // scrollStartY = e.clientY
        // console.log("delta", delta)
        // console.log("right delta", scrollDelta)