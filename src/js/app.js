import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {
  let burger = document.getElementById("burger");

  const dropdowns = document.querySelectorAll(".dropdown");
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");
  const mainArrows = document.querySelectorAll(".main-arrow");
  const secondArrows = document.querySelectorAll(".second-arrow");

  dropdowns.forEach((dd, index) => {
    dd.addEventListener("mouseenter", function () {
      dropdownMenus[index].classList.add("active");
      dropdownMenus[index].addEventListener("mouseenter", function () {
        dropdownMenus[index].classList.add("active");
      });
      mainArrows[index].classList.remove("active");
      secondArrows[index].classList.add("active");
    });

    dd.addEventListener("mouseleave", function () {
      dropdownMenus[index].classList.remove("active");
      dropdownMenus[index].addEventListener("mouseleave", function () {
        dropdownMenus[index].classList.remove();
        ("active");
      });
      mainArrows[index].classList.add("active");
      secondArrows[index].classList.remove("active");
    });
  });

  burger.addEventListener("click", function () {
    let nav = document.getElementById("nav");
    let body = document.querySelector("body");
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
  });

  const latestNews = new Swiper(".latest-news__swiper", {
    loop: true,
    slidesPerView: calculateSlides(),
    effect: "slide",
    spaceBetween: calculateSpaceBetween(),
    centeredSlides: false,
    navigation: {
      nextEl: ".latest-news-next",
      prevEl: ".latest-news-prev",
    },
  });

  function calculateSpaceBetween() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1920) {
      return 30;
    } else if (screenWidth >= 1620) {
      return 20;
    } else {
      return 10;
    }
  }
  function calculateSlides() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1920) {
      return 4;
    } else if (screenWidth >= 1620) {
      return 3.9;
    } else if (screenWidth >= 1520) {
      return 3.5;
    } else if (screenWidth >= 1440 || screenWidth > 1200) {
      return 3.3;
    } else if (screenWidth >= 1200 || screenWidth > 992) {
      return 2.8;
    } else if (screenWidth >= 992 || screenWidth > 845) {
      return 2.3;
    } else if (screenWidth >= 845 || screenWidth > 768) {
      return 2;
    } else if (screenWidth >= 768 || screenWidth > 660) {
      return 1.8;
    } else if (screenWidth >= 660 || screenWidth > 490) {
      return 1.5;
    } else if (screenWidth >= 490 || screenWidth > 420) {
      return 1.2;
    } else {
      return 1;
    }
  }

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
      event.preventDefault();
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

  const spoilerButtons = document.querySelectorAll(".top-block__title");
  const spoilerContent = document.querySelectorAll(".block__text");
  const arrow = document.querySelectorAll(".arrow-spoiler");

  spoilerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      spoilerButtons.forEach((btn, i) => {
        if (i !== index) {
          btn.classList.remove("active");
          spoilerContent[i].classList.remove("active");
          arrow[i].classList.remove("rotate");
        }
      });

      button.classList.toggle("active");
      spoilerContent[index].classList.toggle("active");
      arrow[index].classList.toggle("rotate");
    });
  });

  const rewards = new Swiper(".rewards__swiper", {
    loop: false,
    slidesPerView: 1,
    effect: "slide",
    navigation: {
      nextEl: ".rewards-next",
      prevEl: ".rewards-prev",
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
});
