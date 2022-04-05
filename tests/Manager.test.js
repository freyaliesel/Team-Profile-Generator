const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create a new 'Manager' object", () => {
            const manager = new Manager("Jane", 1, "jane@email.com", 4);
            expect(manager instanceof Manager).toEqual(true);
        });
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
            const manager = new Manager("Jane", 1, "jane@email.com", 4);
            expect(manager.name).toEqual("Jane");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("jane@email.com");
            expect(manager.officeNumber).toEqual(4);
        });
        it("should throw an error if not provided an office number", () => {
            const cb = () => new Manager("Jane", 1, "jane@email.com");
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number")
            expect(cb).toThrowError(err);
        });
        it("should throw an error if 'officeNumber' is not a number", () => {
            const cb = () => new Manager("Jane", 1, "jane@email.com", "4");
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrow(err);
        });
        describe("getRole", () => {
            it("should return 'Manager' when getRole() is called", () => {
                const manager = new Manager("Jane", 1, "jane@email.com", 4);
                expect(manager.getRole()).toEqual("Manager");
            });
        })
    });
});
