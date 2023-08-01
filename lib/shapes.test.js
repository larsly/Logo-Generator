const {Triangle, Circle, Square} = require('./shapes.js');

test('render blue triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('render red circle', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('render green square', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<polygon points="60, 25 220, 25 220, 175 60, 175" fill="green" />');
});