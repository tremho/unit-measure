
import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Pressure extends Measure {
    /**
     * Defines measure for Pressure. {@link UnitType} Kilopascal is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('pressure', UnitType.Kilopascal, value || 0, valueUnitType,
            [
                [UnitType.Megapascal, 1000],
                [UnitType.PoundsPerSqIn, 6.894757269504543],
                [UnitType.KgPerSqCentimeter, 98.0664999998]
            ]
        )
    }
}

