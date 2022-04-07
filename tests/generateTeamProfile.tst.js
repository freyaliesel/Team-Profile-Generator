const Engineer = require("../lib/Engineer.js");
const Manager = require("../lib/Manager.js");
const Intern = require("../lib/Intern.js");
const {
    generateTeamProfile,
    makeEmployeeObjects,
    createTeamCards,
    renderCard,
    renderIcon,
} = require("../utils/generateTeamProfile.js");
const fs = require("fs");
const { isTypedArray } = require("util/types");

describe("generateTeamProfile.js", () => {
    describe("renderIcon", () => {
        it("should generate the appropriate html for the employee type", () => {
            expect(renderIcon("Manager")).toEqual(
                `<i class="fa-solid fa-mug-hot"></i>`
            );
            expect(renderIcon("Engineer")).toEqual(
                `<i class="fa-solid fa-glasses"></i>`
            );
            expect(renderIcon("Intern")).toEqual(
                `<i class="fa-solid fa-seedling"></i>`
            );
        });
    });
    describe("renderCard", () => {
        let manager = new Manager("Rachel", 1, "rachel@company.com", 1);
        let engineer = new Engineer("Sarah", 2, "sarah@company.com", "sarahcodes");
        let intern = new Intern("Mary", 3, "mary@company.com", "Northwestern University");

        expect(renderCard(manager)).toEqual()
    })
});
