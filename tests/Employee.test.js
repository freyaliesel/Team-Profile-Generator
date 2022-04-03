const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Jane", 1, "jane@email.com");

            expect(employee.name).toEqual("Jane");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("jane@email.com");
        });
    });
});
