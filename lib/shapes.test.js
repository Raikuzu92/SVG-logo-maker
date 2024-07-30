const { CircleSVG } = require('./shapes');

describe('CircleSVG', () => {
  it('should generate correct SVG markup for a circle', () => {
    // const circle = new CircleSVG('black', 'red', 'SVG');
    // const svgOutput = circle.toSVG();
    const expectedOutput = `
      <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <circle r="100" cx="100" cy="100" fill="green" />
    <text x="100" y="110" font-size="50" text-anchor="middle" fill="blue">hi</text>
    </svg>
    `;
    const testColor = "blue";
    const shape = new CircleSVG("hi", testColor, "green");
    const result = shape.toSVG().trim();
    expect(result).toEqual(expectedOutput);
  });
});



//   it('should handle default center coordinates', () => {
//     const circle = new CircleSVG('black', 'blue', 'SVG');
//     const svgOutput = circle.toSVG();
//     const expectedOutput = `
//       <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="150" cy="100" r="80" fill="blue" />
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>
//       </svg>
//     `;
//     expect(svgOutput.trim()).toBe(expectedOutput.trim());
//   });
// });

describe('TriangleSVG', () => {
  it('should generate correct SVG markup for a triangle', () => {
    const triangle = new TriangleSVG('SVG', 'black', 'green');
    const svgOutput = triangle.toSVG();
    const expectedOutput = `
      <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,20 400,200 100,200" fill="green" stroke="purple" stroke-width="3" />
        <text x="250" y="150" font-size="60" text-anchor="middle" fill="black">SVG</text>
      </svg>
    `;
    expect(svgOutput.trim()).toBe(expectedOutput.trim());
  });

  it('should handle default center coordinates', () => {
    const triangle = new TriangleSVG('SVG', 'purple');
    const svgOutput = triangle.toSVG();
    const expectedOutput = `
      <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="250,20 400,200 100,200" fill="purple" stroke="purple" stroke-width="1" />
        <text x="250" y="150" font-size="60" text-anchor="middle" fill="black">SVG</text>
      </svg>
    `;
    expect(svgOutput.trim()).toBe(expectedOutput.trim());
  });
});

describe('SquareSVG', () => {
  it('should generate correct SVG markup for a square', () => {
    const square = new SquareSVG('SVG', 'blue', 'black');
    const svgOutput = square.toSVG();
    const expectedOutput = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" x="75" y="25" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>
      </svg>
    `;
    expect(svgOutput.trim()).toBe(expectedOutput.trim());
  });

  it('should handle default center coordinates', () => {
    const square = new SquareSVG('SVG', 'orange');
    const svgOutput = square.toSVG();
    const expectedOutput = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" x="75" y="25" fill="orange" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>
      </svg>
    `;
    expect(svgOutput.trim()).toBe(expectedOutput.trim());
  });
});

