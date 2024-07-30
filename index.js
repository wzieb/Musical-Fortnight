// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const { generateMarkdown } = require('./utils/generateMarkdown');
 const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {

  message:"What is your project title?",
  name: "title",
  type:"input",
  validate: titleInput => {
    if(titleInput){
      return true;
    }else {
      console.log('You must enter project title.');
      return false;
    }
  }
},
{
  message:"Enter your project description here",
  name: "Description",
  validate: DescriptionInput => {
    if(DescriptionInput){
      return true;
    }else {
      console.log('You must enter a description.');
      return false;
    }
  }
},
{
  message:"Provide instructions to install your project",
  name:"install",
  validate: installInput => {
    if(installInput){
      return true;
    }else {
      console.log('You must provide instructions on how to install your project.');
      return false;
    }
  }
},
{
  message: "Provide instructions on how to use your project",
  name: "usage",
  validate: usageInput => {
    if(usageInput){
      return true;
    }else {
      console.log('You must provide instructions on how to use your project.');
      return false;
    }
  }
},
{
  message: "Select your license",
  name: "license",
  type: "list",
  choices: [
    'Apache 2.0', 
    'MIT', 
    'BSD 3-Clause',
    'None'
  ]
},
{
  message:"How can users contribute to this project?",
  name: "contribution",
  validate: contributionInput => {
    if(contributionInput){
      return true;
    }else {
      console.log('You must provide instructions for project contributions.');
      return false;
    }
  }
},
{
  message: "How do I test this?",
  name:"tests"
},

];

// TODO: Create a function to write README file
// const getFilename = (title) =>{

//   return `${title.trim().replace(' ', '')}.json`

// };


// const handleAnswers = (response) =>{
//   const filename = getFilename(response.title);

//   fs.writeFile(filename,JSON.stringify(response,null,2)), (err) =>
//     err ? console.log(err) : console.log("Success! ReadMe file has been generated!Check the ReadMe folder to view file!");

// };
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) throw new Error(err);

      console.log("Success! ReadMe file has been generated!Check the ReadMe folder to view file!")
  })
};
function init() {

  console.log('Welcome to my ReadMe Generator');

  inquirer.prompt(questions)
  .then(responses => {
      console.log(responses);
      writeToFile("./ReadMe/readme.md", generateMarkdown(responses))
  })
};

// Function call to initialize app
init();







// // TODO: Create a function to initialize app
// function init() {
//   console.log('Welcome to my ReadMe Generator');
//   inquirer.prompt(questions).then(handleAnswers);
// };
// // Function call to initialize app
// init();
