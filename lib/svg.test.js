const { CircleSVG, TriangleSVG, SquareSVG } = require('./svg')




class squareSVG {
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
                <rect width="150" height="150" x="${this.centerX - 75}" y="${this.centerY - 75}" fill="${this.color}" />
                <text x="${this.centerX}" y="${this.centerY}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
        `;
    }
}