import Measure from "./Measure";
import UnitType from "../UnitType";
export default class Amperage extends Measure {
    /**
     * Defines measure for Electric Current.
     * {@link UnitType} Amperage is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('amperage', UnitType.Ampere, value || 0, valueUnitType,
            [
                [UnitType.Milliampere, 0.001]
            ])
    }
}
