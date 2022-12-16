// navmenu Toggle
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  const menu = document.querySelector(".navLinks");
  menu.classList.toggle("showMenu");
  const links = menu.querySelectorAll(".link");
  //   console.log(links);
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("showMenu");
    });
  });
}
