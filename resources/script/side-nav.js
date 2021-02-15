/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("nav").style.left = "0px";
    document.querySelector(".nav-open-btn").style.opacity = "0";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("nav").style.left = "-250px";
    document.querySelector(".nav-open-btn").style.opacity = "1";
  }
  