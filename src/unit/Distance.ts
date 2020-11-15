import Measure from './Measure'
import UnitType from "../UnitType";

export default class Distance extends Measure {
    /**
     * Distance measure.  Used for long distances. Compatible with {@link Length}.
     * Sets up units for Centimeter, Decimeter, Meter, Hectometer, Kilometer, Inch, Foot, Yard, Mile
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('distance', UnitType.Kilometer, value || 0, valueUnitType,
            [
                [UnitType.Millimeter, 0.000001],
                [UnitType.Centimeter, 0.00001],
                [UnitType.Decimeter, 0.0001],
                [UnitType.Meter, 0.001],
                [UnitType.Hectometer, 0.1],
                [UnitType.OneHundredKm, 100],
                [UnitType.Inch, 0.0000254],
                [UnitType.Foot, 0.0003048],
                [UnitType.Yard, 0.0009144],
                [UnitType.Mile, 1.60934]
                ]
            )
    }
}
