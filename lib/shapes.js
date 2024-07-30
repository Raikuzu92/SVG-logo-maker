class CircleSVG {
    constructor(textColor, color, text) {
      this.color = color;
      this.textColor = textColor;
      this.text = text;
      
    }
  
    toSVG() {
      return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
    }
  }
  
  class TriangleSVG {
    constructor(text, textColor, color, ) {
    
        this.textColor = textColor;
        this.color = color;
        this.text = text
      
    }
  
    // Method to generate the SVG markup for the triangle
    toSVG() {
      // Calculate the points of the triangle
    //   const halfBase = this.base / 2;
    //  const points = [
    //    `${this.centerX - halfBase},${this.centerY + this.height / 2}`,
    //    `${this.centerX + halfBase},${this.centerY + this.height / 2}`,
    //  `${this.centerX},${this.centerY - this.height / 2}`
    //  ].join(' ');
  
      return `
        <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">

  <polygon points="250,20 400,190 100,200" style="${this.color};stroke:purple;stroke-width:3" />

  <text x="250" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
</svg>
      `;
    }
  }
  
  class SquareSVG {
    constructor(text, color = 'blue', textColor = 'black', centerX = 150, centerY = 125) {
        this.text = text;
        this.color = color;
        this.textColor = textColor;
        this.centerX = centerX;
        this.centerY = centerY;
    }

    // Method to generate the SVG markup for the square
    toSVG() {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" x="${this.centerX - 75}" y="${this.centerY - 50}" fill="${this.color}" />
                <text x="${this.centerX}" y="${this.centerY}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}
  
  // Export the class for use in other modules
  module.exports =  { CircleSVG, TriangleSVG, SquareSVG }