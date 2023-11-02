import Colour from './colour'
import Palette from './palette'
const white = new Colour(0,0,100)
const black = new Colour(0,0,0)
const red = new Colour(340, 100, 50)
const pink = new Colour(340,100, 90)
const grey = new Colour(0,0,50)

test('Multiple colours added to palette', () => {
    const palette = new Palette([white, black, grey])

    const lastItem = palette.getColourAtIndex(2)
    console.log(lastItem.toString());
    console.log(grey.toString());

    expect(palette.getColourAtIndex(0)).toStrictEqual(white)
    expect(palette.getColourAtIndex(1)).toStrictEqual(black)
    expect(palette.getColourAtIndex(2)).toStrictEqual(grey)
})

test('Move colour to another position', () => {
    const palette = new Palette([white, black, grey])

    expect(palette.getColourAtIndex(1)).toStrictEqual(black)

    palette.moveColour(2, 1)

    expect(palette.getColourAtIndex(1)).toStrictEqual(grey)
})


test('Sort three grayscale colours', () => {
    const palette = new Palette([white, black, grey])

    const expectedPalette = new Palette([black, grey, white])
    const sortedPalette = palette.sortedByLightness()

    expect(sortedPalette).toEqual(expectedPalette)
})

describe('Palette comparison', () => {
    const testPalette = new Palette([white, black, grey])
    const matchingPalette = new Palette([white, black, grey])
    const shorterPalette = new Palette([white, black])
    const differentOrderPalette = new Palette([white, grey, black])
    const longerPalette = new Palette([white, black, grey, red])

    it('should recognise matching palettes', () => {
        expect(testPalette.equals(matchingPalette)).toBe(true)
    })

    it('should not recognise a shorter palette', () => {
        expect(testPalette.equals(shorterPalette)).toBe(false)
    })

    it('should not recognise a longer palette', () => {
        expect(testPalette.equals(longerPalette)).toBe(false)
        
    })

    it('should not recognise the same colours in a different order', () => {
        expect(testPalette.equals(differentOrderPalette)).toBe(false)
        
    })


})

describe('Random palette', () => {
    const randomPalette = Palette.random(7)

    it('should have the same length as input', () => {
        expect(randomPalette.colours.length).toBe(7)
    })
    it('should contain only Colours', () => {
        expect(randomPalette.colours.every(colour => colour instanceof Colour)).toBe(true)
    })
})