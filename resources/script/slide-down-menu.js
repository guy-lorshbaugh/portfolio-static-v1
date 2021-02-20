var filterBox = document.getElementById('filter-box');
var filterButton = document.getElementById('filter-btn');

function openMenu() {
    if (filterBox.style.height === "0px") {
        filterBox.style.height = "355px";
        filterBox.style.border = "3px solid rgb(32, 130, 211)";
        filterButton.style.opacity = "0";
    } else {
        filterBox.style.height = "0px";
        filterBox.style.border = "0px solid rgb(32, 130, 211)";
        filterButton.style.opacity = "1";
    }
  }

document.addEventListener('mousedown', function(event){
if(filterBox.style.height === "355px"){
    if (!filterBox.contains(event.target) || 
    filterBox.contains(event.target)) {
        openMenu();[]
    }
    if (filterButton.contains(event.target)) {
        openMenu();
    }
    var btnContainer = document.getElementById("filter-box");
    var btns = btnContainer.getElementsByClassName("filter-item");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            filterButton.innerHTML = `<span class="material-icons">filter_list &nbsp;</span>${this.innerHTML}`;
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
  });
}
}
});

var skillsContainer = document.getElementById("skills")

if (skillsContainer.clientHeight < 375) {
    skillsContainer.style.borderBottom = "5px solid rgb(32, 130, 211)";
    skillsContainer.style.boxShadow = "4px 4px 4px rgba(0, 0, 0, 0.2)";
}


