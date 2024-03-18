const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    it('should render a correct SVG string', () => {
        const color = 'red';
        const circle = new Circle(color);
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
        expect(circle.render()).toBe(expectedSvg);
    });
});

describe('Triangle', () => {
    it('should render a correct SVG string', () => {
      const color = 'blue';
      const triangle = new Triangle(color);
      const expectedSvg = `<polygon points="150,20 230,180 70,180" fill="${color}" />`;
      expect(triangle.render()).toBe(expectedSvg);
    });
  });
  
  describe('Square', () => {
    it('should render a correct SVG string', () => {
      const color = 'green';
      const square = new Square(color);
      const expectedSvg = `<rect x="20" y="20" width="160" height="160" fill="${color}" />`;
      expect(square.render()).toBe(expectedSvg);
    });
  });