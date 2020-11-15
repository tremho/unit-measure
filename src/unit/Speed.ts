import Ratio from "./Ratio";
import UnitType from "../UnitType";

export default class Speed extends Ratio {
    /**
     * Constructs a Ratio for distance / time
     *
     * ### Constructor
     *
     * @param {string} [distType]      The unit type for distance (default 'km')
     * @param {string} [timeType]      The unit type for time (default 'hr')
     * @param {number} [distValue=0]   The value for distance or speed (default 0)
     * @param {number} [timeValue=1]   The value for time (default 1)
     */
    constructor (distType:string = 'km', timeType:string = 'hr', distValue:number = 0, timeValue:number = 1) {
        super('Speed', distType, timeType)
        this.setRatioValues(distValue, distType, timeValue, timeType)
    }

    /**
     * Returns this Speed value in kilometers per hour
     * @returns {number}
     */
    getKilometersPerHour ():number {
        return this.getValueAs(UnitType.Kilometer, UnitType.Hour)
    }
    /**
     * Sets this Speed value in Kilometers per hour
     * @param {number} kph
     */
    setKilometersPerHour (kph:number) {
        this.setRatioValues(kph, UnitType.Kilometer, 1, UnitType.Hour)
    }
    /**
     * Returns this Speed value in miles per hour
     * @returns {number}
     */
    getMilesPerHour ():number {
        return this.getValueAs(UnitType.Mile, UnitType.Hour)
    }
    /**
     * Sets this Speed value in Miles per hour
     * @param {number} mph
     */
    setMilesPerHour (mph:number) {
        this.setRatioValues(mph, UnitType.Mile, 1, UnitType.Hour)
    }
}
