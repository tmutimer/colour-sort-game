import Colour from './colour.js';

class Palette {
    /**
     * Generates a random palette with the specified number of colours.
     *
     * @param {number} numberOfColours - The number of colours in the palette.
     * @return {Palette} - A new Palette object representing the random palette.
     */
    static random(numberOfColours) {
        return new Palette(Array.from({ length: numberOfColours }, Palette.randomColour));
    }

    static randomColour() {
        const randInt = (max) =>  Math.floor(Math.random() * max)
        const [hue, saturation, lightness] = [randInt(360), randInt(100), randInt(100)]
        return new Colour(hue, saturation, lightness)
    }

    constructor(colours) {
        this.colours = colours
    }

    getColourAtIndex(idx) {
        if (idx < 0 || idx >= this.colours.length) {
            throw new Error("Invalid index provided.");
        }
        return this.colours[idx];
    }
    

    moveColour(idx, newIdx) {
        if (idx < 0 || idx >= this.colours.length) {
            throw new Error(`Invalid source index ${idx} provided.`);
        }
        if (newIdx < 0 || newIdx >= this.colours.length) {
            throw new Error(`Invalid target index ${newIdx} provided.`);
        }
        [this.colours[idx], this.colours[newIdx]] = [this.colours[newIdx], this.colours[idx]];
    }
    
    /**
     * Sort the colours in the palette by lightness.
     *
     * @return {Palette} A new palette with colours sorted by lightness.
     */
    sortedByLightness() {
        // Helper function to convert HSL to RGB
        function hslToRgb(h, s, l) {
            let r, g, b;
    
            if (s === 0) {
                r = g = b = l; // achromatic
            } else {
                const hue2rgb = (p, q, t) => {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                };
    
                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
    
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        }
    
        // Helper function to calculate perceived brightness
        function perceivedBrightness(colour) {
            const [r, g, b] = hslToRgb(colour.hue / 360, colour.saturation / 100, colour.lightness / 100);
            return Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b); // Using a different formula
        }
    
        return new Palette([...this.colours].sort((colour1, colour2) => perceivedBrightness(colour1) - perceivedBrightness(colour2)));
    }
    
    
    
    /**
     * Compares the current palette with the given palette to determine if they are equal.
     *
     * @param {object} palette - The palette object to compare with.
     * @return {boolean} Returns true if the palettes are equal, otherwise returns false.
     */
    equals(palette) {
        if (palette.colours.length !== this.colours.length) { return false };

        return this.colours.every((colour, index) => {
            return colour.equals(palette.getColourAtIndex(index))
        })
    }
}

export default Palette