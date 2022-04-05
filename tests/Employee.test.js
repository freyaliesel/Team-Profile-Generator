const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new 'Employee' object", () => {
            const employee = new Employee("Jane", 1, "jane@email.com");
            expect(employee instanceof Employee).toEqual(true);
        });
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Jane", 1, "jane@email.com");
            expect(employee.name).toEqual("Jane");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("jane@email.com");
        });
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();
            expect(cb).toThrow();
        });
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(1, "jane@email.com");
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if not provided an id", () => {
            const cb = () => new Employee("Jane");
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Jane", "jane@email.com");
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if not provided an email", () => {
            const cb = () => new Employee("Jane", 1);
            const err = new Error(
                "Expected parameter 'email' to be an email address"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if email is not an email address", () => {
            const cb = () => new Employee("Jane", 1, "janeatemail.com");
            const cb2 = () => new Employee("Jane", 1, "jane@emailcom");
            const err = new Error(
                "Expected parameter 'email' to be an email address"
            );
            expect(cb).toThrow(err);
            expect(cb2).toThrow(err);
        });
    });
    describe("getName", () => {
        it("should return the 'name' parameter when getName() is called", () => {
            const employee = new Employee("Jane", 1, "jane@email.com");
            expect(employee.getName()).toEqual(employee.name);
        });
    });
    describe("getId", () => {
        it("should return the 'id' parameter when getID() is called", () => {
            const employee = new Employee("Jane", 1, "jane@email.com");
            expect(employee.getId()).toEqual(employee.id);
        });
    });
    describe("getEmail", () => {
        it("should return the 'email' parameter when getEmail() is called", () => {
            const employee = new Employee("Jane", 1, "jane@email.com");
            expect(employee.getEmail()).toEqual(employee.email);
        });
    });
    describe("getRole", () => {
        it("should return 'Employee' when getRole() is called", () => {
            const employee = new Employee("Jane", 1, "jane@email.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
