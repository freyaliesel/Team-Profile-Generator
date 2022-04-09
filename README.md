# Team Profile Generator

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
![GitHub language count](https://img.shields.io/github/languages/count/freyaliesel/Team-Profile-Generator)
![GitHub top language](https://img.shields.io/github/languages/top/freyaliesel/Team-Profile-Generator)
![Passed tests: 42](https://img.shields.io/badge/passed%20tests-42-green)

## Description

A command-line program that takes user input about a team via prompts, then dynamically generates an HTML webpage that displays details for each person.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [Credits](#credits)
- [License](#license)

## Installation

Ensure that [Node Package Manager](https://www.npmjs.com/) is installed in your IDE. Open the terminal inside the folder containing the cloned code, and enter `npm i` on the command line.

## Usage

On the command line in the root folder, enter `node index.js`
The user will be prompted to answer questions about themselves, then given the option to add team members. Once finished adding individuals, the program will generate html and css files in the /dist folder. Link to video walkthrough of this application:

[![Preview of application in use](./assets/Team%20Profile%20Generator%20Preview.png)](https://youtu.be/Zce-VeruIAQ)

## Tests

Tests are run by entering `npm test` in the console.
Test files are located in the 'tests' folder.

## Contact

Find more projects at [github.com/freyaliesel](https://github.com/freyaliesel)
For questions, email [freyacodes@gmail.com](mailto:freyacodes@gmail.com)

## Credits

This application was built using Node.js and has `inquirer`, `jest`, and `github-username-regex` dependencies.

CSS was generated with [tailwind CSS](https://tailwindcss.com/)

## License

Copyright (C) 2022 K Glidden

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0) for more details.
