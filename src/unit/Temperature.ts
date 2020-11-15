import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Temperature extends Measure {
    /**
     * Defines measure for Temperature. {@link UnitType} Celsius is the base unit.
     *
     * Contains functions for common conversions.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('temperature', UnitType.Celsius, value || 0)
        this.addUnit(UnitType.Fahrenheit, function (to, from) {
            if (typeof to !== 'undefined') {
                // compute C to F
                return (9 / 5) * to + 32
            } else {
                // compute F to C
                return (5 / 9) * (from as number - 32)
            }
        })
        this.addUnit(UnitType.Kelvin, function (to, from) {
            if (typeof to !== 'undefined') {
                // compute to C to K
                return to + 273.15
            } else {
                // compute K to C
                return from as number - 273.15
            }
        })

        if (valueUnitType) {
            this.setValueAs(valueUnitType, value || 0)
        }
    }
}
