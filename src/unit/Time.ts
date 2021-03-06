import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Time extends Measure {
    /**
     * Defines measure for Time. {@link UnitType} Second is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?, valueUnitType?) {
        super('time', UnitType.Second, value, valueUnitType,
            [
                [UnitType.Microsecond, 0.000001],
                [UnitType.Millisecond, 0.001],
                [UnitType.Minute, 60],
                [UnitType.Hour, 3600],
                [UnitType.Day, 86400],
                [UnitType.Month, 2629800], // note: not really correct for month
                // todo: drop or use separate algorithm in override of getValueAs
                [UnitType.Year, 31557600]
            ]
        )
    }
}
