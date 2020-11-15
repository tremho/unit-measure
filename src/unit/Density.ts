import Ratio from "./Ratio";

export default class Density extends Ratio {
    /**
     * Constructs a Ratio for mass / volume
     * Default unit pair is gram/cubic centimeter (aka gram/milliLiter)
     *
     * ### Constructor
     *
     * @param {string} [massType]      The unit type for mass (default 'g')
     * @param {string} [volumeType]    The unit type for volume (default 'cc')
     * @param {number} [massValue=0]   The value for distance or speed (default 0)
     * @param {number} [volumeValue=1]   The value for time (default 1)
     */
    constructor (massType:string = 'g', volumeType:string = 'ml', massValue:number = 0, volumeValue:number = 1) {
        super('Density', massType, volumeType)
        this.setRatioValues(massValue, massType, volumeValue, volumeType)
    }


}
