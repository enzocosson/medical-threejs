const darkmode__btn = document.querySelector(".darkmode__btn");
const on = document.querySelector(".on");

const isDarkmode = localStorage.getItem("isDarkmode");
if (isDarkmode === "true") {
  on.classList.add("on_active");
  document.documentElement.style.setProperty("--white", "#272727");
  document.documentElement.style.setProperty("--black", "#fcfcfc");
}

darkmode__btn.addEventListener("click", () => {
  on.classList.toggle("on_active");
  const isDarkmode = on.classList.contains("on_active");

  // Stocker la valeur dans le localstorage
  localStorage.setItem("isDarkmode", isDarkmode);

  // Changer les variables var(--white) et var(--black)
  if (isDarkmode) {
    document.documentElement.style.setProperty("--white", "#272727");
    document.documentElement.style.setProperty("--black", "#fcfcfc");
  } else {
    document.documentElement.style.setProperty("--white", "#fcfcfc");
    document.documentElement.style.setProperty("--black", "#272727");
  }
});
