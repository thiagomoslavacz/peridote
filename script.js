document.addEventListener("DOMContentLoaded", function () {
  const arrowIcon = document.getElementById("arrow-icon");
  const wrapper = document.getElementById("wrapper");
  let isWrapperOpen = false;

  arrowIcon.addEventListener("click", function () {
    if (!isWrapperOpen) {
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
      arrowIcon.classList.remove("bx-chevron-down");
      arrowIcon.classList.add("bx-chevron-up");
    } else {
      wrapper.style.maxHeight = "0";
      arrowIcon.classList.remove("bx-chevron-up");
      arrowIcon.classList.add("bx-chevron-down");
    }

    isWrapperOpen = !isWrapperOpen;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu");
  var menuWindow = document.getElementById("menu-window");
  var overlay = document.getElementById("overlay");
  var closeButton = document.querySelector(".bx-x");
  var navLinks = document.querySelectorAll(".nav li a");

  menuButton.addEventListener("click", function () {
    menuWindow.classList.toggle("open");
    overlay.style.display = "block"; //
  });

  closeButton.addEventListener("click", function () {
    menuWindow.classList.remove("open");
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function () {
    menuWindow.classList.remove("open");
    overlay.style.display = "none";
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menuWindow.classList.remove("open");
      overlay.style.display = "none";
    });
  });
});
