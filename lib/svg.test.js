const {SVG, Triangle, Square, Circle} = require("./shapes.js", "./index.js");

// test("should render a 300 x 200 svg element", () => {
//   const expectedSvg =
//     '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
//   const svg = new SVG();
//   expect(svg.render()).toEqual(expectedSvg);
// });

test(`should append text element`, () => {
  const text = 'YES'
  const triangle = new Triangle (text)
  const renderedSvg = triangle.render()
  const expectedSvg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
 
  expect(renderedSvg).toEqual(expectedSvg);
});

test("should set text message and color", () => {
  const expectedSvg =
  `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  const svg = new SVG();
  // svg.text("SVG", "#333");
  expect(SVG.render()).toEqual(expectedSvg);
});

// An exception test checks for code that should throw an error.
test("should throw if text exceeds 3 characters", () => {
  const expectedError = new Error("Text must not exceed 3 characters.");
  const svg = new SVG();
  expect(() => svg.text("HELLO", "#333")).toThrow(expectedError);
});

test("should include a shape", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
  const svg = new SVG();
  // svg.text("SVG", "#333");
  const square = new Square();
  square.shapeColor(`${answers.shape}`);
  svg.shape(square);
  expect(svg.render()).toEqual(expectedSvg);
});
