const { isValidString, isValidNumber, isPossibleEmail } = require("../utils/functions.js");

describe("Functions", () => {
    describe("isValidString", () => {
        it("should return true when a string is passed as an argument", () => {
            expect(isValidString("hello")).toEqual(true);
            expect(isValidString("Hello World!")).toEqual(true);
        });
        it("should return false when called without passing a parameter", () => {
            expect(isValidString()).toEqual(false);
        });
        it("should return false when passed an empty string", () => {
            expect(isValidString("")).toEqual(false);
        });
        it("should return false when passed non-strings", () => {
            expect(isValidString(4)).toEqual(false);
            expect(isValidString(true)).toEqual(false);
            expect(isValidString(NaN)).toEqual(false);
            expect(isValidString(undefined)).toEqual(false);
            expect(isValidString(null)).toEqual(false);
        });
    });
    describe("isValidNumber", () => {
        it("should return true when passed a number", () => {
            expect(isValidNumber(4)).toEqual(true);
            expect(isValidNumber(2000)).toEqual(true);
        });
        it("should return true when passed a string that can convert to a number", () => {
            expect(isValidNumber("4")).toEqual(true);
            expect(isValidNumber("2000")).toEqual(true);
        });
        it("should return false when passed a number less than or equal to zero", () => {
            expect(isValidNumber(-4)).toEqual(false);
            expect(isValidNumber(0)).toEqual(false);
        });
        it("should return false when passed a float", () => {
            expect(isValidNumber(4.3)).toEqual(false);
        });
        it("should return false when passed parameters that cannot convert to a whole number", () => {
            expect(isValidNumber("hello")).toEqual(false);
            expect(isValidNumber(true)).toEqual(false);
            expect(isValidNumber(false)).toEqual(false);
            expect(isValidNumber(NaN)).toEqual(false);
            expect(isValidNumber(undefined)).toEqual(false);
            expect(isValidNumber(null)).toEqual(false);
        });
    });
    describe("isPossibleEmail", () => {
        it("should return true when passed a valid email address", () => {
            expect(isPossibleEmail("jane@email.com")).toEqual(true);
            expect(isPossibleEmail("jane-doe@email.org")).toEqual(true);
            expect(isPossibleEmail("jane.doe@email.web")).toEqual(true);
            expect(isPossibleEmail("jane_doe@email.org")).toEqual(true);
        });
        it("should return false if not passed any parameters", () => {
            expect(isPossibleEmail()).toEqual(false);
        })
        it("should return false when passed parameters that do not meet minimum requirements to be an email address", () => {
            expect(isPossibleEmail("janeatemailcom")).toEqual(false);
            expect(isPossibleEmail("")).toEqual(false);
            expect(isPossibleEmail("   ")).toEqual(false);
            expect(isPossibleEmail("jy")).toEqual(false);
            expect(isPossibleEmail("janeatemailcom")).toEqual(false);
            expect(isPossibleEmail(3000)).toEqual(false);
            expect(isPossibleEmail(undefined)).toEqual(false);
            expect(isPossibleEmail(null)).toEqual(false);
            expect(isPossibleEmail(false)).toEqual(false);

        });
    })
});
