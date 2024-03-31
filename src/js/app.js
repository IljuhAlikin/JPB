import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {
  let burger = document.getElementById("burger");

  burger.addEventListener("click", function () {
    let nav = document.getElementById("nav");
    let body = document.querySelector("body");
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
  });

  const swiper = new Swiper(".swiper", {
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });

  const swiperButtons = document.querySelectorAll(".tablink");
  const availablePlatformsWrapper = document.querySelector(
    ".available-platforms__wrapper"
  );

  function updateActiveTabButtonColor(activeIndex) {
    swiperButtons.forEach((button, index) => {
      if (index === activeIndex) {
        if (activeIndex === 0) {
          button.style.color = "#ea5504";
        } else if (activeIndex === 1) {
          button.style.color = "#fabe00";
        } else if (activeIndex === 2) {
          button.style.color = "#74c6be";
        }
      } else {
        button.style.color = "black";
      }
    });
  }

  function updateActiveWrapperColor(activeIndex) {
    if (activeIndex === 0) {
      availablePlatformsWrapper.style.borderColor = "#ea5504";
    } else if (activeIndex === 1) {
      availablePlatformsWrapper.style.borderColor = "#fabe00";
    } else if (activeIndex === 2) {
      availablePlatformsWrapper.style.borderColor = "#74c6be";
    }
  }

  swiperButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
      swiper.slideTo(index);
    });
  });

  swiper.on("slideChange", () => {
    const activeIndex = swiper.realIndex;
    updateActiveTabButtonColor(activeIndex);
    updateActiveWrapperColor(activeIndex);
  });

  updateActiveTabButtonColor(swiper.realIndex);
  updateActiveWrapperColor(swiper.realIndex);

  const tradeToolsSwiper = new Swiper(".trade-instruments__swiper", {
    loop: false,

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });

  const tabLinks = document.querySelectorAll(".trade-tools-tablink");

  function updateActiveTabLink(activeIndex) {
    tabLinks.forEach((link, index) => {
      if (index === activeIndex) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function scrollToActiveTab() {
    const activeIndex = tradeToolsSwiper.realIndex;
    const activeTab = tabLinks[activeIndex];
    activeTab.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  tabLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      tradeToolsSwiper.slideTo(index);
      scrollToActiveTab();
    });
  });

  tradeToolsSwiper.on("slideChange", () => {
    const activeIndex = tradeToolsSwiper.realIndex;
    updateActiveTabLink(activeIndex);
    scrollToActiveTab();
  });

  updateActiveTabLink(tradeToolsSwiper.realIndex);
});
