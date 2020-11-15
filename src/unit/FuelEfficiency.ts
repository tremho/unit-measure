import Ratio from "./Ratio";
import UnitType from "../UnitType";

export default class FuelEfficiency extends Ratio {
    /**
     * Defines a Ratio for FuelEfficiency as distance / volume
     * Default is km/l
     *
     * Contains helper methods for common conversions.
     *
     * ### Constructor
     *
     * @param {string} [distanceType] default 'km'
     * @param {string} [volumeType] default 'l'
     * @param {number} [volumeValue] default 0
     * @param {number} [distanceValue] default 1
     */
    constructor (distanceType:string = 'km', volumeType:string = 'l', distanceValue:number = 0, volumeValue:number = 1) {
        super('FuelEfficiency',distanceType, volumeType)
        this.setRatioValues(distanceValue, distanceType, volumeValue, volumeType)
    }

    /**
     * Returns this FuelEfficiency value in Miles Per Gallon
     * @returns {number}
     */
    getMilesPerGallon ():number {
        return this.getValueAs(UnitType.Mile, UnitType.Gallon)
    }

    /**
     * Sets this FuelEfficiency value in terms of Miles Per Gallon
     * @param mpg
     */
    setMilesPerGallon (mpg:number) {
        this.setRatioValues(mpg, UnitType.Mile, 1, UnitType.Gallon)
    }

    /**
     * Returns this FuelEfficiency value in Kilometers per Liter
     * @returns {number}
     */
    getKilometersPerLiter ():number {
        return this.getValueAs(UnitType.Kilometer, UnitType.Liter)

    }

    /**
     * Sets this FuelEfficiency value in terms of Kilometers Per Liter
     * @param kpl
     */
    setKilometersPerLiter (kpl:number) {
        this.setRatioValues(kpl, UnitType.Kilometer, 1, UnitType.Liter)
    }

    /**
     * Gets liters consumed per kilometer
     * @returns {number}
     */
    getLitersPerKm ():number {
        return 1 / this.getKilometersPerLiter()
    }

    /**
     * Sets liters per kilometer
     * @param l
     */
    setLitersPerKm (l:number) {
        this.setKilometersPerLiter(1 / l)
    }

    /**
     * Returns this FuelEfficiency value in Liters per 100 Kilometers
     * @returns {number}
     */
    getLitersPer100Km ():number {
        return this.getLitersPerKm() * 100
    }
    /**
     * Sets this FuelEfficiency value in terms of Liters Per 100 Kilometers
     * @param lphkm
     */
    setLitersPer100Km (lphkm:number) {
        this.setLitersPerKm(lphkm / 100)
    }
    /**
     * Returns this FuelEfficiency value in Milliliters per 100 Kilometers
     * @returns {number}
     */
    getMillilitersPer100Km ():number {
        return this.getLitersPer100Km() * 1000
    }
    /**
     * Sets this FuelEfficiency value in terms of Milliliters per 100 Kilometers
     * @param mlphkm
     */
    setMillilitersPer100Km (mlphkm:number) {
        this.setLitersPer100Km(mlphkm / 1000)
    }
}

