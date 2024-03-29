const Engineer = require("../lib/Engineer.js");
const { isValidString, isValidNumber, isPossibleEmail } = require("../utils/functions.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create a new 'Engineer' object", () => {
            const engineer = new Engineer("Jane", 1, "jane@email.com", "janecodes");
            expect(engineer instanceof Engineer).toEqual(true);
        });
        it("should create an object with a name, id, email, and GitHub username if provided valid arguments", () => {
            const engineer = new Engineer("Jane", 1, "jane@email.com", "janecodes");
            expect(engineer.name).toEqual("Jane");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("jane@email.com");
            expect(engineer.github).toEqual("janecodes");
        });
        it("should throw an error if not provided a github username", () => {
            const cb = () => new Engineer("Jane", 1, "jane@email.com");
            const err = new Error("Expected parameter 'github' to be valid github username")
            expect(cb).toThrowError(err);
        })
        it("should throw an error if 'github' is not a string", () => {
            const cb = () => new Engineer("Jane", 1, "jane@email.com", 4);
            const err = new Error("Expected parameter 'github' to be valid github username");
            expect(cb).toThrow(err);
        });
        it("should throw an error if 'github' is not a valid github username", () => {
            const cb = () => new Engineer("Jane", 1, "jane@email.com", 4);
            const err = new Error("Expected parameter 'github' to be valid github username");
            expect(cb).toThrow(err);
        });
        
    });
    describe("getRole", () => {
        it("should return 'Engineer' when getRole() is called", () => {
            const engineer = new Engineer("Jane", 1, "jane@email.com", "janecodes");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
    describe("getGithub", () => {
        it("should return the engineer's github username when getRole() is called", () => {
            const engineer = new Engineer("Jane", 1, "jane@email.com", "janecodes");
            expect(engineer.getGithub()).toEqual("janecodes");
        });
    })
})