const {Triangle, Circle, Square} = require("./shapes")
// Using Jest, unit testing is enabled providing code coverage
// Each test compares the expect(received) to .toEqual(expected) data
describe('Tests for each shape', () => {
    // Tests if a triangle is rendered correctly based on parameters
    test('Triangle should render correctly with a "RAF" text, white text color, and blue shape color:', () => {
        const triangle = new Triangle();        
        triangle.setText("RAF");
        triangle.setText_Color("white");
        triangle.setshape_color("blue");
        expect(triangle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
        <text x="150" y="140" font-size="45" font-family="Super Sans" text-anchor="middle" fill="white">RAF</text>        
        </svg>`);
    })
    // Tests if a circle is rendered correctly based on pararmeters
    test('Circle should render correctly with a "ZaZ" text, black text color, and orange shape color:', () => {
        const circle = new Circle();
        circle.setText("ZaZ");
        circle.setText_Color("black");
        circle.setshape_color("orange");
        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="orange"/>
        <text x="150" y="120" font-size="45" font-family="Super Sans" text-anchor="middle" fill="black">ZaZ</text>        
        </svg>`);
    })
    // Tests if a square is rendered correctly based on parameters
    test('Square should render correctly with a "non" text, purple text color, and #e9967a shape color:', () => {
        const square = new Square();
        square.setText("non");
        square.setText_Color("purple");
        square.setshape_color("#e9967a");
        expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" height="200" width="300" fill="#e9967a"/>
        <text x="180" y="100" font-size="45" font-family="Super Sans" text-anchor="middle" fill="purple">non</text>        
        </svg>`)
    })
})