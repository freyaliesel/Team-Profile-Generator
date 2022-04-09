const Employee = require("../lib/Employee.js");
const { isValidString } = require("../utils/functions.js");


class Intern extends Employee {
    constructor (name, id, email, school) {
        if (!isValidString(school)) {
            throw new Error(
                "Expected parameter 'school' to be a non-empty string"
            );
        }
        super(name, id, email);
        this.school = school.trim();
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
