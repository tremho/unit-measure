
import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Voltage extends Measure {
    /**
     * Defines measure for Electric Voltage. {@link UnitType} Volt is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('voltage', UnitType.Volt, value || 0, valueUnitType,
            [
                [UnitType.Kilovolt, 1000],
                [UnitType.Millivolt, 0.001]
            ]
        )
    }
}
