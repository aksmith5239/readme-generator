const generateMarkdown = (name, github) => {
    return `
# Project Title
## Description
## Table of Contents
## Installation
## Usage
## Credits
## License
## Badges
## Contributing
## Tests
## Questions
* Name: ${name}
* GitHub: ${github}
    `;
};

module.exports = generateMarkdown;