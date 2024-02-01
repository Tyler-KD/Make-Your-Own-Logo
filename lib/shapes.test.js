const {Triangle, Circle, Square} = require("./shapes")

describe('Tests for each shape', () => {

    test('Triangle should render correctly with a blue shape color', () => {
        const triangle = new Triangle();
        triangle.setshape_color("blue");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    })

    // Test('Circle should render correctly with #e9967a shape color',)
})