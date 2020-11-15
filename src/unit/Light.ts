
import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Light extends Measure {
    /**
     * Defines measure for light intensity. {@link UnitType} Lux is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('light', UnitType.Lux, value || 0, valueUnitType)
    }
}
