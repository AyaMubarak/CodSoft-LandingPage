document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll(".nav a");
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function () {
      anchors.forEach((a) => {
        a.classList.remove("color");
      });
      this.classList.add("color");
    });
  });
});
