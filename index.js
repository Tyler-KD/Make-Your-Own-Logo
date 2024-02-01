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
    },
    {
        type: "input",
        message: "Enter shape color (OR a hexadecimal code number):",
        name: "shape_color",
    }
];