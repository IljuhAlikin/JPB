import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", function () {
  // Get all tab buttons
  var tabButtons = document.querySelectorAll(".tablink");

  // Add event listener to each tab button
  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Hide all tab content
      var tabContents = document.querySelectorAll(".tabcontent");
      tabContents.forEach(function (content) {
        content.style.display = "none";
        content.classList.remove("active");
      });

      // Deactivate all tab links
      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Show the specific tab content
      var tabName = this.id.replace("tab", "section");
      document.getElementById(tabName).style.display = "block";
      document.getElementById(tabName).classList.add("active");

      // Activate the button that opened the tab
      this.classList.add("active");
    });
  });
});
