class Colour {
    constructor(hue, saturation, lightness) {
        this._hue = this._validateRange(hue, 0, 360, "Hue")
        this._saturation = this._validateRange(saturation, 0, 100, "Saturation")
        this._lightness = this._validateRange(lightness, 0, 100, "Lightness")
    }

    // Validate that a value is within a specified range
    _validateRange(value, min, max, name) {
        if (value < min || value > max) {
            throw new Error(`${name} must be between ${min} and ${max}`)
        }
        return value
    }

    // Getters and setters for hue, saturation, and lightness
    get hue() {
        return this._hue
    }

    set hue(value) {
        this._hue = this._validateRange(value, 0, 360, "Hue")
    }

    get saturation() {
        return this._saturation
    }

    set saturation(value) {
        this._saturation = this._validateRange(value, 0, 100, "Saturation")
    }

    get lightness() {
        return this._lightness
    }

    set lightness(value) {
        this._lightness = this._validateRange(value, 0, 100, "Lightness")
    }

    isLighterThan(colour) {
        if (!(colour instanceof Colour)) {
            throw new Error(
                "The provided argument is not an instance of the Colour class."
            )
        }
        return this.lightness > colour.lightness
    }

    equals(colour) {
        return (
            this.hue === colour.hue &&
      this.saturation === colour.saturation &&
      this.lightness === colour.lightness
        )
    }

    toString() {
        return `hue: ${this.hue}, saturation: ${this.saturation}, lightness: ${this.lightness}`
    }

    // getGrayscale() {
    //     return new Colour(0,0,this.lightness)
    // }
}

export default Colour