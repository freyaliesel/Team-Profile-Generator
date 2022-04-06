const Employee = require("../lib/Employee.js");
const {isValidNumber} = require("../utils/functions.js");


class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        if (!isValidNumber(officeNumber)) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number")
        }
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
}

module.exports = Manager;
