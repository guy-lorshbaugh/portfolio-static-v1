var navMenu = document.getElementById('nav')
var comingSoon = document.getElementsByClassName('coming-soon');

console.log(comingSoon)

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

for (i=0; i<comingSoon.length; i++) {
  let item = comingSoon[i];
  let defaultText = item.innerHTML;
  console.log(defaultText);
  let icon = document.querySelectorAll('a.coming-soon.serif span.material-icons');
  item.addEventListener('mouseover', function(event){
    item.innerHTML=`<span class="material-icons">lock &nbsp</span> Coming Soon!`;
  })
  item.addEventListener('mouseout', function(event){
    item.innerHTML = defaultText;
  })
}