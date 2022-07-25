function scrollAnimation() {
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
  const elementsToAnimate = document.querySelectorAll("[data-animation]");
  const animationClass = "animate";
  elementsToAnimate.forEach((element) => {
    windowTop > element.offsetTop
      ? element.classList.add(animationClass)
      : element.classList.remove(animationClass);

    headerAnimation(windowTop);
  });
}

function headerAnimation(windowTop) {
  const header = document.querySelector(".header");
  const button = document.querySelector(".action-button");
  if (windowTop > 1038) {
    header.classList.add("bg-gray");
    button.style.background = "#3b3b3b";
  } else {
    header.classList.remove("bg-gray");
    button.style.background = "#a8a6a1";
  }
}

window.addEventListener("scroll", () => {
  scrollAnimation();
});
