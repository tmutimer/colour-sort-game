import Colour from "./colour.js";

const white = new Colour(0,0,100)
const black = new Colour(0,0,0)
const red = new Colour(340, 100, 50)
const pink = new Colour(340,100, 90)


test('White is lighter than black', () => {
    expect(white.isLighterThan(black)).toBe(true)
})

test('Red is not lighter than pink', () => {
    expect(red.isLighterThan(pink)).toBe(false)
})

test('Red equals red', () => {
    expect(red.equals(new Colour(340,100, 50))).toBe(true)
})


describe("Valid colours", () => {
    it('hue must be between 0 and 360', () => {
        const validHues = [0, 10, 100, 360]
        const invalidHues = [-0.1, -1, 360.1, 361, 1000]

        invalidHues.map((hue) => {
            expect(() => new Colour(hue, 10, 10)).toThrow()
        } )

        validHues.map((hue) => {
            expect(new Colour(hue, 10, 10)).toBeInstanceOf(Colour)
        } )

        expect(validHues.every)

    })
    it('saturation must be between 0 and 100', () => {
        const validSaturationValues = [0, 10, 50, 100];
        const invalidSaturationValues = [-0.1, -1, 100.1, 101, 200];

        invalidSaturationValues.forEach((saturation) => {
            expect(() => new Colour(10, saturation, 10)).toThrow();
        });

        validSaturationValues.forEach((saturation) => {
            expect(new Colour(10, saturation, 10)).toBeInstanceOf(Colour);
        });
    });

    it('lightness must be between 0 and 100', () => {
        const validLightnessValues = [0, 10, 50, 100];
        const invalidLightnessValues = [-0.1, -1, 100.1, 101, 200];

        invalidLightnessValues.forEach((lightness) => {
            expect(() => new Colour(10, 10, lightness)).toThrow();
        });

        validLightnessValues.forEach((lightness) => {
            expect(new Colour(10, 10, lightness)).toBeInstanceOf(Colour);
        });
    });
})

