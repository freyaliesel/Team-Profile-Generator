const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor (name, id, email, school) {
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error(
                "Expected parameter 'school' to be a non-empty string"
            );
        }
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;

// school

// getSchool()
// getRole() - returns 'Intern'