// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
   {
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    name: 'usage',
    message: 'Provide usage information for your project:',
  },
  {
    name: 'contributing',
    message: 'Provide contributing guidelines:',
  },
  {
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    name: 'email',
    message: 'What is your email address?',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error writing file:', err);
    } else {
      console.log('README.md has been generated!');
    }
  });
}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      
      writeToFile('dist/README.md', markdownContent);
    });
}


// Function call to initialize app
init();
