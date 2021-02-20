const a11y = document.querySelector(".accessibility");
const database = document.querySelector(".database");
const frameworks = document.querySelector(".frameworks");
const languages = document.querySelector(".language");
const media = document.querySelector(".media");
const services = document.querySelector(".services");
const software = document.querySelector(".software");
const tools = document.querySelector(".tools");


// document.getElementById("menu-all").onclick(
//     document.getElementById("write-skills").innerHTML = 'writeSkills("null", all=true)'
//     )

a11y.addEventListener('mousedown', function() {
    a11y.style.display = "block"
    database.style.display = "none !important";
    frameworks.style.display = "none !important";
    languages.style.display = "none !important";
    media.style.display = "none !important";
    services.style.display = "none !important";
    software.style.display = "none !important";
    tools.style.display = "none !important";
}
)
// document.getElementById("menu-a11y").onclick(
//     a11y.style.display = "none !important")
    // database.style.display = "none !important";
    // frameworks.style.display = "none !important";
    // languages.style.display = "none !important";
    // media.style.display = "none !important";
    // services.style.display = "none !important";
    // software.style.display = "none !important";
    // tools.style.display = "none !important";
    // )


// writeMenu would write the menu from objects in the menuItems array
//  
// const menuItems = [
//     {
//         "id": "menu-all",
//         "argument": "null, all=true",
//         "label": "ALL"
//     },
//     {
//         "id": "menu-a11y",
//         "argument": "accessibility",
//         "label": "Accessibility"
//     },
//     {
//         "id": "menu-data",
//         "argument": "database",
//         "label": "Database"
//     },
//     {
//         "id": "menu-frame",
//         "argument": "frameworks",
//         "label": "Frameworks"
//     },
//     {
//         "id": "menu-lang",
//         "argument": "languages",
//         "label": "Languages"
//     },
//     {
//         "id": "menu-media",
//         "argument": "media",
//         "label": "Media"
//     },
//     {
//         "id": "menu-serv",
//         "argument": "services",
//         "label": "Services"
//     },
//     {
//         "id": "menu-soft",
//         "argument": "software",
//         "label": "Software"
//     },
//     {
//         "id": "menu-tools",
//         "argument": "tools",
//         "label": "Tools"
//     }
// ];

// function writeMenu() {
//     for (var i = 0; i < (menuItems.length -1); i++) {
//         var item = menuItems[i];
//         console.log(`
//             ${item.id}
//             ${item.argument}
//             ${item.label}
//         `);
//     }
//     var lastItem = menuItems[menuItems.length -1];
//     console.log(`
//             ${lastItem.id}
//             ${lastItem.argument}
//             ${lastItem.label}
//         `);
// }

// writeMenu()