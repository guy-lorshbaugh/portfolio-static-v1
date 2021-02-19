var filterBox = document.getElementById('filter-box');
var filterButton = document.getElementById('filter-btn');

function openMenu() {
    if (filterBox.style.height === "0px") {
        filterBox.style.height = "320px";
        filterBox.style.border = "3px solid rgb(32, 130, 211)";
        filterButton.style.boxShadow = "none";
    } else {
        filterBox.style.height = "0px";
        filterBox.style.border = "0px solid rgb(32, 130, 211)";
        filterButton.style.boxShadow = "4px 4px 4px rgba(0, 0, 0, 0.2)";
    }
  }

document.addEventListener('mousedown', function(event){
if(filterBox.style.height === "320px"){
        if (!filterBox.contains(event.target)) {
                openMenu();
        } if (filterButton.contains(event.target)) {
            openMenu();
    }
}
});


