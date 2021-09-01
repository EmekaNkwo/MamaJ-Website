// function classToggle() {
//   const navs = document.querySelectorAll(".Navbar_items");

//   navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
// }

// document
//   .querySelector(".Navbar__link-toggle")
//   .addEventListener("click", classToggle);

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "300px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}
