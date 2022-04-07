const Engineer = require("../lib/Engineer.js");
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");

function generateTeamProfile(rawTeam) {
    console.log(rawTeam);
    const team = [];
    rawTeam.forEach((member) => {
        let teamMember;
        switch (member.role) {
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
    console.log(team);
}

module.exports = { generateTeamProfile };
