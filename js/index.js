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
// carousel effect //
let i = 0;
let images = [];
let slideTime = 3000; // 3 seconds

images[0] = '../assets/images/back1.jpeg';
images[1] = '../assets/images/back2.jpg';
images[2] = '../assets/images/back.jpeg';
images[3] = '../assets/images/back4.jpg';
images[4] = '../assets/images/back3.jpg';

function changePicture() {
    const hero = document.querySelector('#hero');
    hero.style.backgroundImage = " linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7)),url(" + images[i] + ")";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}
window.onload = changePicture;

// Button Function //
function navigate(){
  const btnNavigate = document.querySelector('#navBtn');
  btnNavigate.window.location.href
  
}