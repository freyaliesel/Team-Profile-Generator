const fs = require("fs");
const Engineer = require("../lib/Engineer.js");
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");

function generateTeamProfile(data) {
    console.log(data);
    makeEmployeeObjects(data);
    return JSON.stringify(team);
}

function makeEmployeeObjects(rawTeam) {
    const team = [];
    rawTeam.forEach((member) => {
        let teamMember;
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

function createTeamCards(team) {
    let html = [];
    team.forEach((employee) => {
        html.push(renderCard(employee));
        // create card for each employee
        // put in the document
    });
    return html.join("");
}

function renderCard(employee) {
    // creates the html
}

function renderIcon() {}

function renderInfo(employee) {
    let info = "";
    switch (employee.getRole()) {
        case "Manager":
            info = `Office Number: ${employee.officeNumber}`
            break;
        case "Engineer":
            info = `GitHub: <a href="http://github.com/${employee.github}">${employee.github}</a>`
            break;
        case "Intern":
            info = ``
            break;
    }
    return info;
}

module.exports = {
    generateTeamProfile,
    makeEmployeeObjects,
    createTeamCards,
    renderCard,
    renderIcon,
};
