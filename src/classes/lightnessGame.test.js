import LightnessGame from "./lightnessGame";

describe('Game initialisation', () => {
    it('Should begin with a random set of 7 colours', () => {
        const game = new LightnessGame(7);
        expect(game.solutionPalette).toStrictEqual(game.playerPalette.sortedByLightness())
    })

    //TODO it('Should recognise a correct answer') {
    //TODO it('should recognise an incorrect answer')
    //TODO it('Should be possible to restart the game')
})