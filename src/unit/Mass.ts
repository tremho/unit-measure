import Measure from './Measure'
import UnitType from "../UnitType";

export default class Mass extends Measure {
    /**
     * Defines measure for mass. {@link UnitType} Gram is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('mass', UnitType.Gram, value || 0, valueUnitType,
            [
                [UnitType.Microgram, 0.000001],
                [UnitType.Milligram, 0.001],
                [UnitType.Kilogram, 1000],
                [UnitType.MetricTon, 1000000],
                [UnitType.Ounce, 28.3495],
                [UnitType.Pound, 453.592000004704],
                [UnitType.USTon, 907184.00000940798782],
                [UnitType.Stone, 6350.2880000658560675],
                [UnitType.ImperialTon, 1016046.0800105369417],
                [UnitType.Grain, 0.0647989],
                [UnitType.Dram, 1.77185],
                [UnitType.TroyOunce, 31.1035],
                [UnitType.TroyPound, 373.241664],
                [UnitType.Pennyweight, 1.55517]
            ]
        )
    }
}
