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
        "category": [ "tools" ],
        "learned": true,
        "favorite": true,
        "url": "https://developers.google.com/web/tools/chrome-devtools",
        "img": "resources/img/svg/devtools.svg"
    },
    {
        "name": "Discord",
        "category": [ "software" ],
        "learned": true,
        "favorite": false,
        "url": "https://discord.com/",
        "img": "resources/img/svg/discord.svg"
    },
    {
        "name": "Django",
        "category": [ "frameworks" ],
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
        "category": [ "frameworks" ],
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
        "name": "Mocha",
        "category": [ "tools", "frameworks" ],
        "learned": true,
        "favorite": false,
        "url": "https://www.mochajs.org/",
        "img": "resources/img/svg/mocha.svg"
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
        "name": "Powershell",
        "category": [ "tools", "software" ],
        "learned": true,
        "favorite": false,
        "url": "https://docs.microsoft.com/en-us/powershell/",
        "img": "resources/img/svg/powershell.png"
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
        "category": [ "frameworks", "tools" ],
        "learned": false,
        "favorite": false,
        "url": "https://www.reactjs.org/",
        "img": "resources/img/svg/react-js.svg"
    },
    {
        "name": "Rest API",
        "category": [ "database", "tools" ],
        "learned": true,
        "favorite": false,
        "url": "https://restfulapi.net/",
        "img": "resources/img/svg/rest.png"
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
        "category": [ "tools", "database" ],
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