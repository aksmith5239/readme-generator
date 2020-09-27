const fs = require('fs');
const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
       
const promptUser = () => {
   
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'repoLink',
            message: 'What is the link to your GitHub Repo? (Required)',
            validate: linkInput => {
                if(linkInput) {
                    return true;
                } else {
                    console.log("Please provide the link to your GitHub repo.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address.');
                    return false;
                }
            }
        },
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is your project title? (Required)',
                    validate: titleInput => {
                        if(titleInput){
                            return true;
                        } else {
                            console.log("Please enter a title for your project.");
                            return false;
                        }
                    }
                }, 
            {
                    type: 'input',
                    name: 'description',
                    message: 'Describe your project:',
                    validate: descriptionInput => {
                        if(descriptionInput) {
                            return true;
                        } else {
                            console.log("Tell us about your project.");
                            return false;
                        }
                    }
                }, 
                {
                type: 'input',
                name: 'installationInstructions',
                    message: 'Enter installation instructions:',
                    validate: installationInput => {
                        if(installationInput) {
                            return true;
                        } else {
                            console.log("How do we install your project?");
                            return false;
                        }
                    }
                }, 
                {
                type: 'input',
                    name: 'usage',
                message: 'Enter usage information:',
                validate: usageInput => {
                        if(usageInput) {
                            return true;
                    } else {
                            console.log("How is your project going to be used?");
                            return false;
                        }
                    }
                }, 
                {
                    type: 'input',
                    name: 'contributionGuidelines',
                    message: 'Enter the contribution guidelines:',
               
            }, 
                {
                    type: 'input',
                    name: 'testInstructions',
                    message: 'Enter the test instructions:'
                }, 
                {
                    type: 'checkbox',
                    name: 'licenses',
                    message: 'Choose your license type: (Choose One)',
                    choices: ['Apache', 'BSD', 'GNU', 'MIT'], 
                    validate: function (answer) {
                        if(answer.length > 1) {
                            return 'Please choose only one option.';
                        } 
                        return true;
                    },
        } ,
    ]);
};

promptUser()
.then(markdownData => {
    const pageMarkdown = generatePage(markdownData);
// function to write README file
fs.writeFile('./dist/README.md', pageMarkdown, err => {
    if (err) throw err;

    console.log('Readme Complete! ceckout README.md for output!');
    });

});


