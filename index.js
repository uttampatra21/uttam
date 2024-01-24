/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modelViews = document.querySelectorAll(".services__model"),
  modelBtn = document.querySelectorAll(".services__button"),
  modelClose = document.querySelectorAll(".services__model-close");

const model = (modalClick) => {
  modelViews[modalClick].classList.add("active__model");
};
modelBtn.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    model(i);
  });
});

modelClose.forEach((i) => {
  i.addEventListener("click", () => {
    modelViews.forEach((mv) => {
      mv.classList.remove("active__model");
    });
  });
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Link active work */
let acxtive_links = document.querySelector(".nav__link");

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

// ! ==============CURSOR====================
const cursor = document.getElementById("cursor");
let timeout;
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
});
function mouseStopped() {
  cursor.style.display = "none";
}
clearTimeout(timeout);
timeout = setTimeout(mouseStopped, 1000);

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});


