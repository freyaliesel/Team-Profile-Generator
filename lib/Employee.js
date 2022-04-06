// parent class
const {
    isValidString,
    isValidNumber,
    isPossibleEmail,
} = require("../utils/functions.js");

class Employee {
    constructor(name, id, email) {
        if (!isValidString(name)) {
            throw new Error(
                "Expected parameter 'name' to be a non-empty string"
            );
        }
        if (!isValidNumber(id)) {
            throw new Error(
                "Expected parameter 'id' to be a non-negative number"
            );
        }
        if (!isPossibleEmail(email)) {
            throw new Error(
                "Expected parameter 'email' to be an email address"
            );
        }
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;
