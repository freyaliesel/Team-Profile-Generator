const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create a new 'Intern' object", () => {
            const intern = new Intern("Jane", 1, "jane@email.com", "Northwestern University");
            expect(intern instanceof Intern).toEqual(true);
        });
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern("Jane", 1, "jane@email.com", "Northwestern University");
            expect(intern.name).toEqual("Jane");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("jane@email.com");
            expect(intern.school).toEqual("Northwestern University");
        });
        it("should throw an error if not provided a school", () => {
            const cb = () => new Intern("Jane", 1, "jane@email.com");
            const err = new Error("Expected parameter 'school' to be a non-empty string")
            expect(cb).toThrowError(err);
        })
        it("should throw an error if 'school' is not a string", () => {
            const cb = () => new Intern("Jane", 1, "jane@email.com", 4);
            const err = new Error("Expected parameter 'school' to be a non-empty string");
            expect(cb).toThrow(err);
        });
    });
    describe("getRole", () => {
        it("should return 'Intern' when getRole() is called", () => {
            const intern = new Intern("Jane", 1, "jane@email.com", "Northwestern University");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
    describe("getSchool", () => {
        it("should return the intern's school username when getSchool() is called", () => {
            const intern = new Intern("Jane", 1, "jane@email.com", "Northwestern University");
            expect(intern.getSchool()).toEqual("Northwestern University");
        });
    })
})