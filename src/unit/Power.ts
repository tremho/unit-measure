import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Power extends Measure {
    /**
     * Defines measure for Power. {@link UnitType} Watt is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('power', UnitType.Watt, value || 0, valueUnitType,
            [
                [UnitType.Milliwatt, 0.001],
                [UnitType.Kilowatt, 1000],
                [UnitType.Horsepower, 745.699872]
            ]
        )
    }
}

