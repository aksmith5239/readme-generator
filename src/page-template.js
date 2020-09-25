const generateMarkdown = (name, github) => {
    return `
# Project Title
## Badges
* This license is covered under the _____ license
## Description
## Table of Contents
## Installation
## Usage
## Credits
## Contributing
## Tests
## Questions
## License

* Name: ${name}
* GitHub: ${github}
    `;
};

module.exports = generateMarkdown;