const Employee = require("../lib/Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        if (!officeNumber) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number")
        }

        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
}

module.exports = Manager;
