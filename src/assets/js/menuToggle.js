function menuToggle() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const line = document.querySelectorAll(".line");

  burger.addEventListener("click", () => {
    console.log(nav.classList);
    nav.classList.toggle("nav__active");
    burger.classList.toggle("burger__active");
    line[0].classList.toggle("line1__active");
    line[1].classList.toggle("line2__active");
    line[2].classList.toggle("line3__active");
  });
}
menuToggle();
