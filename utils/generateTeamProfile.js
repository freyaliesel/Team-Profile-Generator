const fs = require("fs");
const Engineer = require("../lib/Engineer.js");
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");

// takes in array of inquirer responses and returns array of employee objects
function makeEmployeeObjects(rawTeam) {
    const team = [];
    rawTeam.forEach((member) => {
        let teamMember;
        console.log(member)
        switch (member.getRole()) {
            case "Manager":
                teamMember = new Manager(
                    member.name,
                    member.id,
                    member.email,
                    member.officeNumber
                );
                team.push(teamMember);
                break;
            case "Engineer":
                teamMember = new Engineer(
                    member.name,
                    member.id,
                    member.email,
                    member.github
                );
                team.push(teamMember);
                break;
            case "Intern":
                teamMember = new Intern(
                    member.name,
                    member.id,
                    member.email,
                    member.school
                );
                team.push(teamMember);
                break;
            default:
                break;
        }
    });
    return team;
}

// takes in array of employee objects and returns a string of html components
function renderTeamCards(team) {
    let html = [];
    team.forEach((employee) => {
        html.push(createCard(employee));
    });
    return html.join("");
}

// takes in single employee object and returns a single html component as a string
function createCard(employee) {
    // creates the html
    return eval(
        "`" + fs.readFileSync("./src/card-template.html", "utf-8") + "`"
    );
}

// takes an employee role and returns an icon name as a string
function renderIcon(role) {
    switch (role) {
        case "Manager":
            return "mug-hot";
            break;
        case "Engineer":
            return "glasses";
        case "Intern":
            return "seedling";
            break;
        default:
            break;
    }
}

// takes an employee role and returns the appropriate info as a string
function renderInfo(employee) {
    let info = "";
    switch (employee.getRole()) {
        case "Manager":
            info = `Office Number: ${employee.officeNumber}`;
            break;
        case "Engineer":
            info = `GitHub: <a href="http://github.com/${employee.github}">${employee.github}</a>`;
            break;
        case "Intern":
            info = `School: ${employee.school}`;
            break;
    }
    return info;
}

// takes in array of inquirer objects and returns a webpage as a string of html
function generateTeamProfile(data) {
    console.log(data);
    let team = makeEmployeeObjects(data)
    return eval("`" + fs.readFileSync("./src/template.html", "utf-8") + "`");
}

module.exports = generateTeamProfile;
