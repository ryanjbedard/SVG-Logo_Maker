class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    };
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}
class Square extends Shape {
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}
class Triangle {
    render() {
        return `<polygon points="150,20 230,180 70,180" fill="${this.shapeColor}" />`;
    }
}

    module.exports = {Shape, Circle, Square, Triangle};