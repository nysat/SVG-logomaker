const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a circle element", () => {
    const expectedSvg =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    const SVG  = new Circle();
    const actualSvg = SVG.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const circle = new Circle('white', 'hi', 'blue');
    expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">hi</text></svg>`)
  });
});

describe("Triangle", () => {
  test("should render svg for a triangle element", () => {
    const expectedSvg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    const triangle = new Triangle();
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const triangle = new Triangle('white', 'no', 'yellow');
    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="yellow" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">no</text></svg>`)
  });
});

describe("Square", () => {
  test("should render svg for a square element", () => {
    const expectedSvg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    const square = new Square();
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const square = new Square('white', 'NCT', 'purple');
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="purple"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">NCT</text></svg>`)
  });
});

