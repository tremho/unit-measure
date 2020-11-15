
import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Angle extends Measure {
    /**
     * Defines measure for Angles. {@link UnitType} Degree is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('angle', UnitType.Degree, value || 0, valueUnitType,
             [
                [UnitType.Radian, 57.2957795]
            ]
        )
    }
}
