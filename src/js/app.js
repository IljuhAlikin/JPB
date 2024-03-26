import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {
  // Get all tab buttons
  let tabButtons = document.querySelectorAll(".tablink");
  let tradeTabButtons = document.querySelectorAll(".trade-tools-tablink");

  // Add event listener to each tab button
  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Hide all tab content
      let tabContents = document.querySelectorAll(".tabcontent");
      tabContents.forEach(function (content) {
        content.style.display = "none";
        content.classList.remove("active");
      });

      // Deactivate all tab links
      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Show the specific tab content
      let tabName = this.id.replace("tab", "section");
      document.getElementById(tabName).style.display = "block";
      document.getElementById(tabName).classList.add("active");

      // Activate the button that opened the tab
      this.classList.add("active");
    });
  });

  // Get all tab buttons

  // Add event listener to each tab button
  tradeTabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Hide all tab content
      let tabContents = document.querySelectorAll(".trade-tools-tabcontent");
      tabContents.forEach(function (content) {
        content.style.display = "none";
        content.classList.remove("active");
      });

      // Deactivate all tab links
      tradeTabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Show the specific tab content
      let tabName = this.id.replace("tradetab", "tradesection");
      document.getElementById(tabName).style.display = "block";
      document.getElementById(tabName).classList.add("active");

      // Activate the button that opened the tab
      this.classList.add("active");
    });
  });

  // const accordionItems = document.querySelectorAll(".block__top");

  // accordionItems.forEach((item) => {
  //   const button = item.querySelector(".accordion-button");
  //   const content = item.querySelector(".top-block__title");
  //   const arrow = button.querySelector(".top-block__arrow");

  //   button.addEventListener("click", () => {
  //     content.classList.toggle("accordion-content-active");
  //     arrow.classList.toggle("rotate");
  //     console.log("asdasds");
  //   });
  // });
});
