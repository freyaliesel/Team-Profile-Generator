const { isValidString} = require("../utils/functions.js");
const githubUsernameRegex = require('github-username-regex')

const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (!isValidString(github) || !githubUsernameRegex.test(github)) {
            throw new Error(
                "Expected parameter 'github' to be valid github username"
            );
        }
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
