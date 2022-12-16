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

// product tabs
const tabs = document.querySelectorAll(".tab");
const allTabContents = document.querySelectorAll("[data-tab-content]");
console.log(allTabContents);

console.log(tabs);
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabContent = document.querySelector(tab.dataset.tabTarget);
    allTabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabContent.classList.add("active");
    // alert(tab.dataset.tabTarget);
    console.log(tabContent);
  });
});
