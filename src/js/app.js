import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {
  let tabButtons = document.querySelectorAll(".tablink");
  let tradeTabButtons = document.querySelectorAll(".trade-tools-tablink");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let tabContents = document.querySelectorAll(".tabcontent");
      tabContents.forEach(function (content) {
        content.style.display = "none";
        content.classList.remove("active");
      });

      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      let tabName = this.id.replace("tab", "section");
      document.getElementById(tabName).style.display = "block";
      document.getElementById(tabName).classList.add("active");

      this.classList.add("active");
    });
  });

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
    let menu = document.getElementById("nav");
    let body = document.querySelector("body");
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
  });
});
