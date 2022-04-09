const inquirer = require("inquirer");
const githubUsernameRegex = require("github-username-regex");
const fs = require("fs");
const {
    isValidString,
    isValidNumber,
    isPossibleEmail,
} = require("./utils/functions.js");
const generateTeamProfile = require("./utils/generateTeamProfile");

const team = [];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter your name: ",
        validate(value) {
            return isValidString(value) ? true : "Please enter a valid name";
        },
    },
    {
        type: "input",
        name: "id",
        message: "Employee ID number: ",
        validate(value) {
            return isValidNumber(value) ? true : "Please enter your ID number";
        },
    },
    {
        type: "input",
        name: "email",
        message: "Employee email address: ",
        validate(value) {
            return isPossibleEmail(value)
                ? true
                : "Please enter your email address";
        },
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Office number: ",
        validate(value) {
            return isValidNumber(value)
                ? true
                : "Please enter your office number";
        },
    },
];

const teamQuestions = [
    {
        type: "list",
        name: "role",
        message: "Select an employee type: ",
        choices: ["Engineer", "Intern"],
    },
    {
        type: "input",
        name: "name",
        message: "Employee name: ",
        validate(value) {
            return isValidString(value) ? true : "Please enter a name";
        },
    },
    {
        type: "input",
        name: "id",
        message: "Employee ID number: ",
        validate(value) {
            return isValidNumber(value)
                ? true
                : "Please enter a valid id number";
        },
    },
    {
        type: "input",
        name: "email",
        message: "Employee email address: ",
        validate(value) {
            return isPossibleEmail(value)
                ? true
                : "Please enter a valid email address";
        },
    },
    {
        type: "input",
        name: "github",
        message: "Engineer's GitHub username: ",
        when(answers) {
            return answers.role == "Engineer";
        },
        validate(value) {
            return isValidString(value) && githubUsernameRegex.test(value)
                ? true
                : "Please enter GitHub username";
        },
    },
    {
        type: "input",
        name: "school",
        message: "Intern's school: ",
        when(answers) {
            return answers.role == "Intern";
        },
        validate(value) {
            return isValidString(value) ? true : "Please enter school name";
        },
    },
    {
        type: "confirm",
        name: "addAnother",
        message: "Do you want to enter another team member? ",
        default: true,
    },
];

function init() {
    inquirer.prompt(managerQuestions).then((response) => {
        response.role = "Manager";
        team.push(response);
        makeTeam();
    });
}

function makeTeam() {
    inquirer.prompt(teamQuestions).then((employee) => {
        team.push(employee);
        if (employee.addAnother) {
            makeTeam();
        } else {
            writeToFile(generateTeamProfile(team));
        }
    });
}

function writeToFile(data) {
    fs.writeFile("./dist/index.html", data, (err) => {
        err ? console.error(err) : console.log("Generating webpage");
    });
    fs.copyFile("./src/template.css", "./dist/style.css", (err) => {
        if (err) console.error(err);
    });
}

init();
