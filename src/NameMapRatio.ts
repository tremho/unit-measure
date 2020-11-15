import Ratio from "./unit/Ratio";
import Acceleration from "./unit/Acceleration";
import Speed from "./unit/Speed";
import FuelEfficiency from "./unit/FuelEfficiency"
import Density from "./unit/Density";
import UnitType from "./UnitType";

// fullname, Ratio Class, numerator type, denoninator type
// type RatioDefinition = [string, Ratio, string, string];

/**
 * @description
 * Lookup table for common measurements and their associated compositions
 *
 * ### Basic Ratios
 * | common abbr. | full name | instance type | numerator unit | denominator unit
 * | -----------  | --------  | ------------- | -------------- | ----------------
 * | ratio | generic ratio | Ratio | UnitType.Count | UnitType.Count
 * | deg/sec | degrees per second | Ratio | UnitType.Degree | UnitType.Second
 * | rpm | revolutions per minute | Ratio | UnitType.Count | UnitType.Minute
 *
 * ### Densities
 * | common abbr. | full name | instance type | numerator unit | denominator unit
 * | -----------  | --------  | ------------- | -------------- | ----------------
 * | g/cc | grams per cubic centimeter |  Density |  UnitType.Gram |  UnitType.Milliliter
 * | g/ml | grams per milliliter | Density, UnitType.Gram |  UnitType.Milliliter
 * | kg/l | kilograms per liter | Density, UnitType.Kilogram |  UnitType.Liter
 * | oz/fl.oz | ounces per fluid ounce |  Density |  UnitType.Ounce |  UnitType.FluidOunce
 * | lb/gal | pounds per gallon |  Density, UnitType.Pound |  UnitType.Gallon]
 * | g/tsp | grams per teaspoon |  Density, UnitType.Gram |  UnitType.Teaspoon
 * | g/tbsp | grams per tablespoon |  Density |  UnitType.Gram |  UnitType.Tablespoon

 *
 * ### speeds
 * | common abbr. | full name | instance type | numerator unit | denominator unit |
 * | -----------  | --------  | ------------- | -------------- | ---------------- |
 * | mph | miles per hour | Speed | UnitType.Mile | UnitType.Hour
 * | kph | kilometers per hour | Speed | UnitType.Kilometer | UnitType.Hour
 * | mps | meters per second | Speed | UnitType.Meter | UnitType.Second
 * | fps | feet per second | Speed | UnitType.Foot | UnitType.Second
 * 
 * ### Fuel Efficiencies
 * | common abbr. | full name | instance type | numerator unit | denominator unit |
 * | -----------  | --------  | ------------- | -------------- | ---------------- |
 * | mpg | miles per gallon | FuelEfficiency | UnitType.Mile | UnitType.Gallon
 * | kpg | kilometers per gallon | FuelEfficiency |UnitType.Kilometer | UnitType.Gallon
 * | kpl | kilometers per liter | FuelEfficiency | UnitType.Kilometer | UnitType.Liter
 * | mpl | meters per liter | FuelEfficiency | UnitType.Meter | UnitType.Liter
 * | l/100km | liters per 100km | FuelEfficiency | UnitType.OneHundredKm | UnitType.Liter
 * 
 * ### Accelerations
 * | common abbr. | full name | instance type | numerator unit | denominator unit |
 * | -----------  | --------  | ------------- | -------------- | ---------------- |
 * | m/s2 | meters per second squared | Acceleration | UnitType.Meter | UnitType.Second
 * | mps/sec | meters per second squared | Acceleration | UnitType.Meter | UnitType.Second
 * | ft/s2 | feet per second squared | Acceleration | UnitType.Foot | UnitType.Second
 * | fps/sec | feet per second squared | Acceleration | UnitType.Foot | UnitType.Second
 *
 * @alias NameMapRatio
 * @class
 */
const NameMapRatio = {

    // counts
    'ratio':  ['generic ratio', Ratio, UnitType.Count, UnitType.Count],
    'deg/sec': ['degrees per second', Ratio, UnitType.Degree, UnitType.Second],
    'rpm': ['revolutions per minute', Ratio, UnitType.Count, UnitType.Minute],

    // Densities
    'g/cc':  ['grams per cubic centimeter' , Density, UnitType.Gram, UnitType.Milliliter],
    'g/ml': ['grams per milliliter', Density, UnitType.Gram, UnitType.Milliliter],
    'kg/l': ['kilograms per liter', Density, UnitType.Kilogram, UnitType.Liter],
    'oz/fl.oz': ['ounces per fluid ounce', Density, UnitType.Ounce, UnitType.FluidOunce],
    'lb/gal': ['pounds per gallon', Density, UnitType.Pound, UnitType.Gallon],
    'g/tsp': ['grams per teaspoon', Density, UnitType.Gram, UnitType.Teaspoon],
    'g/tbsp': ['grams per tablespoon', Density, UnitType.Gram, UnitType.Tablespoon],

    // speeds
    'mph': ['miles per hour', Speed, UnitType.Mile, UnitType.Hour],
    'kph': ['kilometers per hour', Speed, UnitType.Kilometer, UnitType.Hour],
    'mps': ['meters per second', Speed, UnitType.Meter, UnitType.Second],
    'fps': ['feet per second', Speed, UnitType.Foot, UnitType.Second],
    'm/s': ['meters per second', Speed, UnitType.Meter, UnitType.Second],
    'ft/s': ['feet per second', Speed, UnitType.Foot, UnitType.Second],
    // Fuel Efficiencies
    'mpg': ['miles per gallon', FuelEfficiency, UnitType.Mile, UnitType.Gallon],
    'kpg': ['kilometers per gallon', FuelEfficiency,UnitType.Kilometer, UnitType.Gallon],
    'kpl': ['kilometers per liter', FuelEfficiency,UnitType.Kilometer, UnitType.Liter],
    'mpl': ['meters per liter', FuelEfficiency,UnitType.Meter, UnitType.Liter],
    'l/100km': ['liters per 100km', FuelEfficiency, UnitType.Liter, UnitType.OneHundredKm],

    // Acccelerations
    'm/s2': ['meters per second squared', Acceleration, UnitType.Meter, UnitType.Second],
    'mps/sec': ['meters per second squared', Acceleration, UnitType.Meter, UnitType.Second],
    'ft/s2': ['feet per second squared', Acceleration, UnitType.Foot, UnitType.Second],
    'fps/sec': ['feet per second squared', Acceleration, UnitType.Foot, UnitType.Second],

    /**
     * Creates an appropriate compound Measure Ratio object for the given name and values
     *
     * @param {string} ratioName     Name of the ratio to match to
     * @param {number} value1        Value of the ratio, or the value of the numerator
     * @param {number} [value2=1]    Value of the denominator or undefined - to avoid a dangerous division by zero
     * @function makeFrom
     *
     * @returns {Ratio}
     *
     * @example
     *  let mySpeed = NameMapRatio.makeFrom('mph', 60, 1)
     *  let myMPG = NameMapRatio.makeFrom('mpg', 400, 14.5)
     *  mySpeed.getValue() // 60
     *  myMPG.getValue() // 27.59
     *
     */
    makeFrom: function (ratioName, value1=0, value2=1) {
        const n = NameMapRatio[ratioName.toLowerCase()]
        if (n) {
            let [fullname, ratioClass, numType, denType] = n;

            if (ratioClass) {
                switch (ratioClass) {
                    case Ratio:
                        return new Ratio(ratioName, numType, denType, value1, value2)
                    case Acceleration:
                        return new Acceleration(numType, denType, value1, value2)
                    case Speed:
                        return new Speed(numType, denType, value1, value2)
                    case Density:
                        return new Density(numType, denType, value1, value2)
                }
            } else {
                throw TypeError(`Ratio definition not found for ${ratioName} ${fullname}`)
            }
        } else {
            throw TypeError(`Ratio definition not found for ${ratioName}`)
        }
    }
}

export default NameMapRatio
