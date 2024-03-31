import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {
  let tabButtons = document.querySelectorAll(".tablink");
  let tradeTabButtons = document.querySelectorAll(".trade-tools-tablink");

  // tabButtons.forEach(function (button) {
  //   button.addEventListener("click", function () {
  //     let tabContents = document.querySelectorAll(".tabcontent");
  //     tabContents.forEach(function (content) {
  //       content.style.display = "none";
  //       content.classList.remove("active");
  //     });

  //     tabButtons.forEach(function (btn) {
  //       btn.classList.remove("active");
  //     });

  //     let tabName = this.id.replace("tab", "section");
  //     document.getElementById(tabName).style.display = "block";
  //     document.getElementById(tabName).classList.add("active");

  //     this.classList.add("active");
  //   });
  // });

  tradeTabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let tabContents = document.querySelectorAll(".trade-tools-tabcontent");
      tabContents.forEach(function (content) {
        content.style.display = "none";
        content.classList.remove("active");
      });

      tradeTabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      let tabName = this.id.replace("tradetab", "tradesection");
      document.getElementById(tabName).style.display = "block";
      document.getElementById(tabName).classList.add("active");

      this.classList.add("active");
    });
  });

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
    pagination: {
      el: ".swiper-pagination",
    },
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
    button.addEventListener("click", () => {
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
});
