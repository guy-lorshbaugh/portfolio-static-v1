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



document.getElementById("menu-all").onclick(
    document.getElementById("write-skills").innerHTML = 'writeSkills("null", all=true)'
    )
document.getElementById("menu-a11y").onclick(
    document.getElementById("write-skills").innerHTML = 'writeSkills("accessibility")'
    )
        