
import UnitType from './UnitType';
import NameMapUnit from "./NameMapUnit";

import Distance from "./unit/Distance";
import Length from "./unit/Length";
import Temperature from "./unit/Temperature";
import Volume from "./unit/Volume";
import Mass from "./unit/Mass";
import Angle from "./unit/Angle";
import Time from "./unit/Time";
import Count from "./unit/Count";
import Light from "./unit/Light";
import Amperage from "./unit/Amperage";
import Voltage from "./unit/Voltage";
import Power from "./unit/Power"
import Pressure from "./unit/Pressure";
import Torque from "./unit/Torque";

/**
 * Contains the factory function `createUnitObject`
 * which is able to construct a unit-measure type by its name/abbreviation.
 *
 * This is handy when creating units after having parsed a value and its type,
 * as most commonly used notations are supported.
 */
const UnitFactory = {

    /**
     * Creates a unit of the given type
     *
     * @param unitTypeString
     * @param initialValue
     * @returns {Measure}
     * @throws {Error} if unit type is unknown
     *
     * @example
     * let myMeasure = UnitFactory.createUnitObject('tsp', 7)
     * let asOz = myMeasure.getValueAs('fl.oz')
     * console.log(`7 teaspoons is ${asOz} fluid ounces`)
     */
    createUnitObject (unitTypeString, initialValue = 0) {
        let unitType = NameMapUnit.resolveSynonym(unitTypeString)
        let measure
        switch (unitType) {
            case UnitType.Count:
            case UnitType.Each:
            case UnitType.Dozen:
            case UnitType.Score:
            case UnitType.Brace:
            case UnitType.Pair:
            case UnitType.K:
            case UnitType.Meg:
            case UnitType.Gig:
                measure = new Count()
                break

            case UnitType.Microsecond:
            case UnitType.Millisecond:
            case UnitType.Second:
            case UnitType.Minute:
            case UnitType.Hour:
            case UnitType.Day:
            case UnitType.Month:
            case UnitType.Year:
                measure = new Time()
                break

            case UnitType.Celsius:
            case UnitType.Fahrenheit:
            case UnitType.Kelvin:
                measure = new Temperature()
                break

            case UnitType.Micrometer:
            case UnitType.Millimeter:
            case UnitType.Centimeter:
            case UnitType.Inch:
                measure = new Length()
                break

            case UnitType.Decimeter:
            case UnitType.Meter:
            case UnitType.Hectometer:
            case UnitType.Foot:
            case UnitType.Yard:
            case UnitType.Mile:
            case UnitType.Kilometer:
            case UnitType.OneHundredKm:
                measure = new Distance()
                break

            case UnitType.Microliter:
            case UnitType.Milliliter:
            case UnitType.Centiliter:
            case UnitType.Deciliter:
            case UnitType.Liter:
            case UnitType.FluidOunce:
            case UnitType.Pint:
            case UnitType.Quart:
            case UnitType.Gallon:
            case UnitType.Tablespoon:
            case UnitType.Teaspoon:
            case UnitType.Cup:
            case UnitType.Drop:
            case UnitType.Pinch:
            case UnitType.Dash:
            case UnitType.CubicInch:
            case UnitType.CubicCentimeter:
            case UnitType.CubicFoot:
            case UnitType.CubicMeter:
                measure = new Volume()
                break

            case UnitType.Degree:
            case UnitType.Radian:
                measure = new Angle()
                break

            case UnitType.Lux:
                measure = new Light();
                break;

            case UnitType.Ampere:
            case UnitType.Milliampere:
                measure = new Amperage();
                break;

            case UnitType.Volt:
            case UnitType.Millivolt:
            case UnitType.Kilovolt:
                measure = new Voltage();
                break;

            case UnitType.Watt:
            case UnitType.Milliwatt:
            case UnitType.Kilowatt:
            case UnitType.Horsepower:
                measure = new Power();
                break;

            case UnitType.Gram:
            case UnitType.Milligram:
            case UnitType.Microgram:
            case UnitType.Kilogram:
            case UnitType.MetricTon:
            case UnitType.Ounce:
            case UnitType.Pound:
            case UnitType.Stone:
            case UnitType.Grain:
            case UnitType.Dram:
            case UnitType.Pennyweight:
            case UnitType.TroyPound:
            case UnitType.TroyOunce:
            case UnitType.ImperialTon:
            case UnitType.USTon:
                measure = new Mass()
                break;

            case UnitType.Kilopascal:
            case UnitType.Megapascal:
            case UnitType.PoundsPerSqIn:
            case UnitType.KgPerSqCentimeter:
                measure = new Pressure();
                break;

            case UnitType.NewtonMeter:
            case UnitType.GramForceCentimeter:
            case UnitType.FootPound:
                measure = new Torque();
                break;

        }
        if (!measure) {
            throw Error('Unable to create Unit object for ' + unitTypeString)
        }
        measure.setValueAs(unitType, initialValue)

        return measure
    }
}
export default UnitFactory