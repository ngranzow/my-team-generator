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
                const engineer = new Engineer(team.name, team.id, team.email, team.officeNumber);
                cards.push(generateEngCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(team.name, team.id, team.email, team.officeNumber);
                cards.push(generateIntCard(intern));
                break;
        }
    }
    return cards.join(``);
}

let generateManCard = (Manager) => {
    return `
    <div class="card">
        <div class="card-header">
            <p class="title">${Manager.getName()}</p>
            <p class="subtitle"><i class="fa-solid fa-mug-hot"></i> ${Manager.getRole()}</p>
        </div>
        <div class="card-content">
            <ul>
                <li>ID: ${Manager.getID()}</li>
                <li>Email: ${Manager.getEmail()}</li>
                <li>Office Number: ${Manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
}

let generateEngCard = (Engineer) => {
    return `
    <div class="card">
        <div class="card-header">
            <p class="title">${Engineer.getName()}</p>
            <p class="subtitle"><i class="fa-solid fa-laptop-code"></i> ${Engineer.getRole()}</p>
        </div>
        <div class="card-content">
            <ul>
                <li>ID: ${Engineer.getID()}</li>
                <li>Email: ${Engineer.getEmail()}</li>
                <li>Office Number: ${Engineer.getGitHub()}</li>
            </ul>
        </div>
    </div>
    `
}

let generateManCard = (Intern) => {
    return `
    <div class="card">
        <div class="card-header">
            <p class="title">${Intern.getName()}</p>
            <p class="subtitle"><i class="fa-solid fa-graduation-cap"></i> ${Intern.getRole()}</p>
        </div>
        <div class="card-content">
            <ul>
                <li>ID: ${Intern.getID()}</li>
                <li>Email: ${Intern.getEmail()}</li>
                <li>Office Number: ${Intern.getSchool()}</li>
            </ul>
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
        <title>My Team</title>
    </head>
    <body>
        <section class="section">
            <div class="container">
                <h1 class="title">My Team</h1>
            </div>
        </section>
        <section class="section">
            ${generateCards(team)}
        </section>
    </body>
</html>
`
} 

module.exports = generateHTML;