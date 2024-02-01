class Shape {
    constructor(text, text_color, shape_color) {
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;

    }
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

class Triangle extends Shape {
    constructor (text, text_color, shape_color) {
        super(text, text_color, shape_color)
    }
    render () {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <text x="175" y="110" font-size="50" font-family="Super Sans" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
        < polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}"/>
        </svg>`
    }
}

class Circle extends Shape {}

class Square extends Shape {}

module.exports = {Triangle, Circle, Square};