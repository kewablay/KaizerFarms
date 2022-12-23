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
    // make selected tab active
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    //show the tab's content
    allTabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabContent.classList.add("active");
  });
});

// Animations with gsap
const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

tl.from(".seq", {
  stagger: .2,
  clipPath: "clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  opacity: 0,
  y: 20,
  duration: 1.2,
})
