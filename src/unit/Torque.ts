import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Torque extends Measure {
    /**
     * Defines measure for Torque. {@link UnitType} NewtonMeter is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('torque', UnitType.NewtonMeter, value || 0, valueUnitType,
            [
                [UnitType.GramForceCentimeter, 10197.162129779],
                [UnitType.FootPound, 0.737562149]
            ]
        )
    }
}
