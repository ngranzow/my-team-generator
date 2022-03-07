const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const teamArr = [];

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is managing this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter manager\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s ID?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter manager\'s ID!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email?',
            validate: email => {
                valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArr.push(manager);
        switch(answers.addTeam) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('./dist/index.html', generateHTML(teamArr))
        }
    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter engineer\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s ID?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter engineer\'s ID!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?',
            validate: email => {
                valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter engineer\'s GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArr.push(engineer);
        switch(answers.addTeam) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('./dist/index.html', generateHTML(teamArr))
        }
    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter intern\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s ID?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter intern\'s ID!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?',
            validate: email => {
                valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where does the intern go to school?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s school!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeam',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArr.push(intern);
        switch(answers.addTeam) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('./dist/index.html', generateHTML(teamArr))
        }
    })
}

addManager();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Your team team profile has been created! Please check out ./dist/index.html');
    });
};