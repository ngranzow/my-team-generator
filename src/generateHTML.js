const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateCards(teamArr) {
    let cards = [];
    for(let i = 0; i < teamArr.length; i++) {
        const team = teamArr[i];
        switch(team.getRole()) {
            case 'Manager':
                const manager = new Manager(team.name, team.id, team.email, team.officeNumber);
                cards.push(generateManCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(team.name, team.id, team.email, team.github);
                cards.push(generateEngCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(team.name, team.id, team.email, team.school);
                cards.push(generateIntCard(intern));
                break;
        }
    }
    return cards.join(``);
}

let generateManCard = (Manager) => {
    return `
    <div class="column is-3">
        <div class="card">
            <div class="card-header">
                <p class="title is-3">${Manager.getName()}</p>
            </div>
            <div class="card-header">
                <p class="subtitle is-5"><i class="fa-solid fa-mug-hot"></i> ${Manager.getRole()}</p>
            </div>
            <div class="card-content">
                <ul>
                    <li>ID: ${Manager.getId()}</li>
                    <li>Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                    <li>Office Number: ${Manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

let generateEngCard = (Engineer) => {
    return `
    <div class="column is-3">
        <div class="card">
            <div class="card-header">
                <p class="title is-3">${Engineer.getName()}</p>
            </div>
            <div class="card-header">
                <p class="subtitle is-5"><i class="fa-solid fa-laptop-code"></i> ${Engineer.getRole()}</p>
            </div>
            <div class="card-content">
                <ul>
                    <li>ID: ${Engineer.getId()}</li>
                    <li>Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                    <li>GitHub: <a href="https://github.com/${Engineer.getGitHub()}">${Engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `
}

let generateIntCard = (Intern) => {
    return `
    <div class="column is-3">
        <div class="card">
            <div class="card-header">
                <p class="title is-3">${Intern.getName()}</p>
            </div>
            <div class="card-header">
                <p class="subtitle is-5"><i class="fa-solid fa-graduation-cap"></i> ${Intern.getRole()}</p>
            </div>
            <div class="card-content">
                <ul>
                    <li>ID: ${Intern.getId()}</li>
                    <li>Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                    <li>School: ${Intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

function generateHTML(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header class="section">
            <div class="container">
                <h1 class="title is-1">My Team</h1>
            </div>
        </header>
        <section class="section">
            <div class="columns">
                ${generateCards(team)}
            </div>
        </section>
    </body>
</html>
`
} 

module.exports = generateHTML;