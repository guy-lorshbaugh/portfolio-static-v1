const skillsUrl = "https://guy-lorshbaugh.github.io/portfolio-static-v1/resources/script/skills.json"

function getData() {
    fetch(skillsUrl, {method: "GET", "Content-type":"json"})
    .then(response => {
        if (response.ok) {
            return response.json(); 
        }
    }, 
        networkError => {
          console.log(networkError.message);
        }
    )
    .then(jsonResponse => {
        writeSkills(jsonResponse);
        }
    );
}

function writeItem(item) {
    const contents = document.getElementById("skills");
    let div = document.createElement("div");
    div.className = `skill-container box ${item.category.length > 1 ? item.category.join(' ') : item.category}`;
    div.innerHTML = `
            <a href="${item.url}" target="_blank">
            <img class="icon" src="${item.img}" alt="${item.name} Vector Logo">
            </a>
            ${learnedItem(item)}
    `;
    contents.appendChild(div);
    
}

const learnedItem = (object) => {
    var learned;
    if (object.learned === true) {
        learned = "";
    } else {
        learned = '<p class="updating">Currently Updating Skillset</p>';
    }
    return learned;
}

const favoriteItem = (object) => {
    var favorite;
    if (object.favorite === true) {
        favorite = '<p class="favorite">Love This One!</p>';
    } else {
        favorite = "";
    }
    return favorite;
}

const writeSkills = (array, category, all=false) => {
    for (var i=0; i < array.length; i++) {
        const item = array[i];
        if (item.category.includes(category)) {
            writeItem(item);
            }
        else if (all) {
            writeItem(item);
        }
    }
}
