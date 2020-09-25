const fs = require('fs');
const generateMarkdown = require('./src/page-template.js');
const readmeDataArgs = process.argv.slice(2);
const [name, github] = readmeDataArgs;


// function to write README file
fs.writeFile('README.md', generateMarkdown(name, github), err => {
    if (err) throw err;

    console.log('Readme Complete! ceckout README.md for output!');
});



// // array of questions for user
// const questions = [

// ];



// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
