import Palette from './palette.js'

class LightnessGame {
    constructor(numberOfColours) {
        this.playerPalette = Palette.random(numberOfColours);
        this.solutionPalette = this.playerPalette.sortedByLightness();
    }

    checkAnswer() {
        return this.playerPalette.equals(this.solutionPalette);
    }
}


export default LightnessGame;