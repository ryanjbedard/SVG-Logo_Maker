class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    };
class Circle extends Shape {
    render() {
        const cx = 150;
        const cy = 100;
        const radius = Math.min(cx, cy) - 20;
        return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${this.shapeColor}" />`;
    }
}
class Square extends Shape {
    render() {
        return `<rect x="20" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 230,180 70,180" fill="${this.shapeColor}" />`;
    }
}

    module.exports = {Shape, Circle, Square, Triangle};