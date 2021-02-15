const skills = [
    {
        "name":"Python",
        "category":"language",
        "learned":true,
        "img":"resources/img/svg/python.svg"
    },
    {
        "name":"CSS3",
        "category":"language",
        "learned":true,
        "img":"resources/img/svg/css3.svg"
    },
    {
        "name": "HTML5",
        "category": "language",
        "learned": true,
        "img":"resources/img/svg/html5.svg"
    },
    {
        "name":"JavaScript",
        "category":"language",
        "learned":true,
        "img":"resources/img/svg/javascript.svg"
    },
];

// console.log(skills)
// for (const [key, value] of Object.entries(skills)) {
//     console.log(`${key}: ${value}`);
//   }

// for (var item in skills.skills) {
//     console.log(item.learned);
// }

// for (var item in skills.skills){
//     console.log(item['category']);
// }

for (var i=0; i < skills.length; i++) {
    console.log(skills[i].name);
}
