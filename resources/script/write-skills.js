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

function writeItem(item) {
    document.write(`
    <div class="skill-container box ${item.category.length > 1 ? item.category.join(' ') : item.category}">
            <a href="${item.url}" target="_blank">
                <img class="icon" src="${item.img}" alt="${item.name} Vector Logo">
            </a>
            ${learnedItem(item)}
    </div>
    `);    
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
