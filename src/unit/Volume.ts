import Measure from './Measure'
import UnitType from '../UnitType'

export default class Volume extends Measure {
    /**
     * Defines measure for Volume. {@link UnitType} Liter is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] The value.
     * @param   {string}    [valueUnitType] The UnitType of the initializing value
     */
    constructor (value?:number, valueUnitType?:string) {
        super('volume', UnitType.Liter, value || 0, valueUnitType,
            [
                [UnitType.Microliter, 0.000001],
                [UnitType.Milliliter, 0.001],
                [UnitType.Centiliter, 0.01],
                [UnitType.Deciliter, 0.1],
                [UnitType.FluidOunce, 0.0295735], // US (Brit = 0.0284131)
                [UnitType.Pint, 0.473176], // US (Brit = 0.568261)
                [UnitType.Quart, 0.946353], // US (Brit = 1.13652)
                [UnitType.Gallon, 3.78541], // US (Brit = 4.54609)
                /* Kitchen */
                [UnitType.Teaspoon, 0.00492892], // US (Brit = 0.00591939)
                [UnitType.Tablespoon, 0.0147868], // US (Brit = 0.0177582)
                [UnitType.Cup, 0.24], // US (Brit = 0.284131)
                [UnitType.Drop, 0.001], // same as milliliter (at least for our purposes)
                [UnitType.Pinch, 0.001232233333333], // falls somewhere between 1/16 and 1/8 tsp (I'm splitting it at 1/12)
                [UnitType.Dash, 0.01], // defined as 10 drops, or sometimes 1/8 tsp (0.00184835)
                [UnitType.CubicCentimeter, 0.01], // same as centiliter
                [UnitType.CubicFoot, 28.3168],
                [UnitType.CubicInch, 0.0163871],
                [UnitType.CubicMeter, 1000]
                /*
                Teaspoon: 'tsp',
            Tablespoon: 'tbsp',
            Cup: 'cup',
            Pinch: 'pinch',
            Dash: 'dash',
            CubicMeter: 'm3',
            CubicCentimeter: 'cm3',
            CubicFoot: 'ft3',
            CubicInch: 'in3',
            */
            ]
        )
    }
}
