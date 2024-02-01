const fs = require("fs");
const inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shapes")

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

function init() {
inquirer.prompt(questions).then(function (data) {
    
    if(data.shape_logo === 'Triangle') {
        const text = new Triangle (data.text, data.text_color, data.shape_color)
        text.render()
    }
    console.log(data)
    console.log("Generated logo.svg")
    fs.writeFile("logo.svg", data, (err) => {
        if (err)
        console.log(err);
    else {console.log("File written successfully\n");
}
    });
})
};

init();