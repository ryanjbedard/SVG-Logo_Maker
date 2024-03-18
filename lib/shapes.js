class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    };
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;

    }
}
class Square extends Shape {
    render() {
        return `<rect width="160" height="160"/>`
    }
}
class Triangle {

}

    module.exports = {Shape, Circle, Square, Triangle};