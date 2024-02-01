// To include the File System module, use the require() method
const fs = require("fs");
// imports inquirer
// inquirer provides the user interface and the inquiry session flow
const inquirer = require("inquirer");
// Imported shapes module with Triangle, Circle, and Square classes
const {Triangle, Circle, Square} = require("./lib/shapes")

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter up to 3 characters for your logo:",
        name: "text",
    },
    {
        type: "input",
        message: "Enter a text color (OR a hexadecimal code number):",
        name: "text_color",
    },
    {
        type: "list",
        message: "Choose a shape for your logo:",
        name: "shape_logo",
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: "input",
        message: "Enter shape color (OR a hexadecimal code number):",
        name: "shape_color",
    }
];

// function for initializing the inquirer prompts which take in user input from questions
function init() {
inquirer.prompt(questions).then(function (data) {
    // empty string to populate with user's choice
    let svgLogo =""
    // if the shape for logo is 'Triangle,' then an instance for Triangle is populated with user's text, text color, and shape color
    if(data.shape_logo === 'Triangle') {
        const text = new Triangle (data.text, data.text_color, data.shape_color)
        // svgLogo is rendered with const text data
        svgLogo = text.render()
    }
    if(data.shape_logo === 'Circle') {
        const text = new Circle (data.text, data.text_color, data.shape_color)
        svgLogo = text.render()
    }
    if(data.shape_logo === 'Square') {
        const text = new Square (data.text, data.text_color, data.shape_color)
        svgLogo = text.render()
    }
    console.log(data)
    console.log(svgLogo)
    console.log("Generated logo.svg")
    // WriteFile creates a logo.svg to root directory
    fs.writeFile("logo.svg", svgLogo, (err) => {
        // Callback would be called when the method is executed
        if (err)
        console.log(err);
    else {console.log("File written successfully\n");
}
    });
})
};
// Call to initialize the app
init();