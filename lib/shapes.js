// Shape constructor method is a special method of a class for creating and initializing an object instance of that class
class Shape {
    constructor(text, text_color, shape_color) {
        // parameter for text
        this.text = text;
        // parameter for text color
        this.text_color = text_color;
        // parameter for shape color
        this.shape_color = shape_color;

    }
    // All the const text data will populate text, text color, and shape color depending on the shape selected
    setText(text) {
        this.text = text
    }
    setText_Color(text_color) {
        this.text_color = text_color
    }
    setshape_color(shape_color) {
        this.shape_color = shape_color
    }
    render (){
        return ""
    }
}

// Inheritance allows one class to inherit the features (fields and methods) of another class or in this case Shape
// extends allows inheritance
class Triangle extends Shape {
    constructor (text, text_color, shape_color) {
        // The class whose features are inherited is known as a superclass (or parent class)
        super(text, text_color, shape_color)
    }
    render () {
        // svg parameters for the triangle shape which includes shape color
        // svg parameters for the text which includes text color and the actual text
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}"/>
        <text x="150" y="140" font-size="45" font-family="Super Sans" text-anchor="middle" fill="${this.text_color}">${this.text}</text>        
        </svg>`
    }
}

class Circle extends Shape {
    constructor (text, text_color, shape_color) {
        super(text, text_color, shape_color)
    }
    render () {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="${this.shape_color}"/>
        <text x="150" y="120" font-size="45" font-family="Super Sans" text-anchor="middle" fill="${this.text_color}">${this.text}</text>        
        </svg>`
    }
}

class Square extends Shape {
    constructor (text, text_color, shape_color) {
        super(text, text_color, shape_color)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" height="200" width="300" fill="${this.shape_color}"/>
        <text x="180" y="100" font-size="45" font-family="Super Sans" text-anchor="middle" fill="${this.text_color}">${this.text}</text>        
        </svg>`
    }
}



// Exports the shapes module with Triangle, Circle, and Square classes
module.exports = {Triangle, Circle, Square};