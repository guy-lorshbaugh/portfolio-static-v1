var navMenu = document.getElementById('nav')

function openNav() {
  navMenu.style.left = "0px";
  document.querySelector(".nav-open-btn").style.opacity = "0";
}

function closeNav() {
  navMenu.style.left = "-260px";
  document.querySelector(".nav-open-btn").style.opacity = "1";
}

document.addEventListener('mousedown', function(event){
  if(navMenu.style.left = "0px"){
          if(!navMenu.contains(event.target)){
                  closeNav();
          }
  }
})