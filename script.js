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
