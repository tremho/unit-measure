import Measure from './Measure'
import UnitType from "../UnitType";

export default class Length extends Measure {
    /**
     * Defines measure for Length. {@link UnitType} Meter is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('length', UnitType.Meter, value || 0, valueUnitType,
            [
                [UnitType.Micrometer, 0.000001],
                [UnitType.Millimeter, 0.001],
                [UnitType.Centimeter, 0.01],
                [UnitType.Decimeter, 0.1],
                [UnitType.Hectometer, 100],
                [UnitType.Kilometer, 1000],
                [UnitType.Inch, 0.0254],
                [UnitType.Foot, 0.3048],
                [UnitType.Yard, 0.9144],
                [UnitType.Mile, 1609.34]
                ]
            )
    }
}
