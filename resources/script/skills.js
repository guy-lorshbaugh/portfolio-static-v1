const skills = [
    {
        "name": "a11y",
        "category": [ "accessibility" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.a11yproject.com/",
        "img": "resources/img/svg/a11y.svg"
    },
    {
        "name": "Adobe Photoshop",
        "category": [ "media", "software", "tools" ],
        "learned": true,
        "favorite": true,
        "url": "https://www.adobe.com/products/photoshop.html/",
        "img": "resources/img/svg/photoshop.svg"
    },
    {
        "name": "Adobe Premiere",
        "category": [ "media", "software", "tools"],
        "learned": true,
        "favorite": false,
        "url": "https://www.adobe.com/products/premiere.html",
        "img": "resources/img/svg/premiere.svg"
    },
    {
        "name": "Brackets",
        "category": [ "software", "tools" ],
        "learned": true,
        "favorite": false,
        "url": "http://www.brackets.io/",
        "img": "resources/img/svg/brackets.svg"
    },
    {
        "name": "CSS3",
        "category": [ "language" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.w3.org/Style/CSS/Overview.en.html",
        "img": "resources/img/svg/css3.svg"
    },
    {
        "name": "DevTools",
        "category": [ "tool" ],
        "learned": true,
        "favorite": true,
        "url": "https://developers.google.com/web/tools/chrome-devtools",
        "img": "resources/img/svg/devtools.svg"
    },
    {
        "name": "Django",
        "category": [ "framework" ],
        "learned": true,
        "favorite": true,
        "url": "https://www.djangoproject.com/",
        "img": "resources/img/svg/django.svg"
    },
    {
        "name": "Facebook For Business",
        "category": [ "services", "tools" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.facebook.com/business",
        "img": "resources/img/svg/facebook-for-business.svg"
    },
    {
        "name": "Flask",
        "category": "framework",
        "learned": true,
        "favorite": false,
        "url": "https://flask.palletsprojects.com/en/1.1.x/",
        "img": "resources/img/svg/flask.png"
    },
    {
        "name": "Git",
        "category": [ "tools", "services" ],
        "learned": true,
        "favorite": true,
        "url": "https://git-scm.com/",
        "img": "resources/img/svg/git.svg"
    },
    {
        "name": "GitHub",
        "category": [ "tools", "software" ],
        "learned": true,
        "favorite": false,
        "url": "http://desktop.github.com/",
        "img": "resources/img/svg/github.svg"
    },
    {
        "name": "GitHub Mac",
        "category": [ "tools", "software" ],
        "learned": true,
        "favorite": false,
        "url": "https://desktop.github.com/",
        "img": "resources/img/svg/github-mac.svg"
    },
    {
        "name": "Google AdWords",
        "category": [ "services" ],
        "learned": true,
        "favorite": false,
        "url": "https://ads.google.com/",
        "img": "resources/img/svg/google-adwords.svg"
    },
    {
        "name": "Google Messages",
        "category": [ "services" ],
        "learned": true,
        "favorite": false,
        "url": "https://messages.google.com/",
        "img": "resources/img/svg/google-messages.svg"
    },
    {
        "name": "Google Lighthouse",
        "category": [ "tools" ],
        "learned": true,
        "favorite": false,
        "url": "https://developers.google.com/web/tools/lighthouse/",
        "img": "resources/img/svg/lighthouse.svg"
    },
    {
        "name": "Heroku",
        "category": [ "services", "tools" ],
        "learned": false,
        "favorite": false,
        "url": "https://www.heroku.com/",
        "img": "resources/img/svg/heroku.svg"
    },
    {
        "name": "Homebrew",
        "category": [ "tools" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.homebrew.sh/",
        "img": "resources/img/svg/homebrew.svg"
    },
    {
        "name": "HTML5",
        "category": [ "language" ],
        "learned": true,
        "favorite": false,
        "url": "https://html.spec.whatwg.org/multipage/",
        "img": "resources/img/svg/html5.svg"
    },
    {
        "name": "Instragram For Business",
        "category": [ "tools", "services" ],
        "learned": true,
        "favorite": false,
        "url": "https://business.instagram.com/",
        "img": "resources/img/svg/instagram-for-business.svg"
    },
    {
        "name": "JavaScript",
        "category": [ "language" ],
        "learned": true,
        "favorite": true,
        "url": "https://www.javascript.com/",
        "img": "resources/img/svg/javascript.svg"
    },
    {
        "name": "Jinja2",
        "category": [ "tools" ],
        "learned": true,
        "favorite": false,
        "url": "https://jinja.palletsprojects.com/en/2.11.x/",
        "img": "resources/img/svg/jinja2.svg"
    },
    {
        "name": "jQuery",
        "category": [ "tools" ],
        "learned": false,
        "favorite": false,
        "url": "https://www.jquery.com/",
        "img": "resources/img/svg/jquery.svg"
    },
    {
        "name": "JSON",
        "category": [ "tools", "database" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.json.org/",
        "img": "resources/img/svg/json.svg"
    },
    {
        "name": "mySQL",
        "category": [ "tools", "database" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.mysql.com/",
        "img": "resources/img/svg/mysql.svg"
    },
    {
        "name": "Node JS",
        "category": [ "tools" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.nodejs.org/",
        "img": "resources/img/svg/node-js.svg"
    },
    {
        "name": "NPM",
        "category": [ "tools" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.npmjs.com/",
        "img": "resources/img/svg/npm.svg"
    },
    {
        "name": "PeeWee ORM",
        "category": [ "tools", "database" ],
        "learned": true,
        "favorite": false,
        "url": "http://docs.peewee-orm.com/en/latest/",
        "img": "resources/img/svg/peewee3.png"
    },
    {
        "name": "PostgreSQL",
        "category": [ "database", "tools" ],
        "learned": false,
        "favorite": false,
        "url": "https://www.postgresql.org/",
        "img": "resources/img/svg/postgresql.svg"
    },
    {
        "name": "Postman",
        "category": [ "database", "tools" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.postman.com/",
        "img": "resources/img/svg/postman.svg"
    },
    {
        "name": "Pro Tools",
        "category": [ "media", "tools", "software" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.avid.com/pro-tools",
        "img": "resources/img/svg/pro-tools.png"
    },
    {
        "name": "Python",
        "category": [ "language" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.python.org/",
        "img": "resources/img/svg/python.svg"
    },
    {
        "name": "React JS",
        "category": [ "tools" ],
        "learned": false,
        "favorite": false,
        "url": "https://www.reactjs.org/",
        "img": "resources/img/svg/react-js.svg"
    },
    {
        "name": "Slack",
        "category": [ "tools", "software" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.slack.com/",
        "img": "resources/img/svg/slack.svg"
    },
    {
        "name": "SQLite",
        "category": [ "tools", "software", "database" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.sqlite.org/",
        "img": "resources/img/svg/sqlite.png"
    },
    {
        "name": "Terminal",
        "category": [ "tools", "software" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.apple.com/macos/big-sur/",
        "img": "resources/img/svg/terminal.svg"
    },
    {
        "name": "W3C ARIA",
        "category": [ "accessibility" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.w3.org/TR/wai-aria-1.2/",
        "img": "resources/img/svg/w3c-aria.svg"
    }
];

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

const writeSkills = (category, all=false) => {
    for (var i=0; i < skills.length; i++) {
        const item = skills[i]
        if (item.category.includes(category)) {
            writeItem(item);
            }
        else if (all) {
            writeItem(item);
        }
    }
}
