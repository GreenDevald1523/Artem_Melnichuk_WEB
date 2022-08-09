window.onload = function () {
    var scrollbar = document.querySelector("#thumb1");
    var container = scrollbar.parentNode;
    container.scrollbar = scrollbar;
    container.ratio =
      (container.scrollHeight - container.offsetHeight) /
      (container.offsetHeight - scrollbar.offsetHeight);
    container.addEventListener("mousewheel", function (e) {
      this.scrollTop += e.deltaY;
      this.scrollbar.style.top =
        this.scrollTop + this.scrollTop / this.ratio + "px";
    });
    container.addEventListener("mousedown", function (e) {
      if (e.target === this.scrollbar) {
        this.prevY = e.pageY;
      }
    });
    container.addEventListener("mouseup", function (e) {
      this.prevY = null;
    });
    container.addEventListener("mousemove", function (e) {
      if (this.prevY) {
        this.scrollTop += (e.pageY - this.prevY) * this.ratio;
        this.scrollbar.style.top =
          this.scrollTop + this.scrollTop / this.ratio + "px";
        this.prevY = e.pageY;
      }
      e.preventDefault();
    });
  };