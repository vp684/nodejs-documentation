/*
script for testing https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js
*/
document.addEventListener("DOMContentLoaded", function () {
  hljs.initHighlightingOnLoad();
  toggleMenu(true)
});


window.addEventListener('resize', () => {
  toggleMenu(true) // 
});

function toggleMenu(val) {
  //only hide links if on mobile.
  var x = document.getElementById("links");
  if (val) {
    //event on resize so keep closed until manually opened
    // must be less than media min-width
    if (window.innerWidth < 801) {
      if (x.style.display !== "none") x.style.display = "none";
    } else x.style.display = "block";

  } else { //not an event so must be click

    if (window.innerWidth < 801) {
      if (x.style.display === "block") x.style.display = "none"
      else x.style.display = "block";
    }

  }

}