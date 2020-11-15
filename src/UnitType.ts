/**
 * Contains the _canonical_ text tag abbreviations for UnitType values.
 * _See {@link NameMapUnit} for a list of recognized synonyms for each canonical type._
 *
 * These text tags are intentionally equivalent to the common abbreviated version of the
 * unit name that can be found in `NameMapUnit`
 *
 * @alias UnitType
 * @class
 * @static
 *
 * @property {string}  Count - count of physical entities
 * @property {string}  Each - same as Count
 * @property {string}  Dozen - 12 Count
 * @property {string}  Score - 20 Count
 * @property {string}  Brace - 2 Count
 * @property {string}  Pair -  2 Count
 * @property {string}  K - 1,000 Count
 * @property {string}  Meg - 1,000,000 Count
 * @property {string}  Gig - 1,000,000,000 Count
 * @property {string}  Lux - measure of light intensity
 * @property {string}  Ampere - measure of electric current
 * @property {string}  Milliampere - measure of small electric current
 * @property {string}  Volt - measure of electric voltage
 * @property {string}  Millivolt - measure of small electric voltage
 * @property {string}  Kilovolt - measure of large electric voltage
 * @property {string}  Degree - measure angular distance
 * @property {string}  Radian - measure angular distance based from pi
 * @property {string}  Microsecond - measure of very short amount of elapsed time
 * @property {string}  Millisecond - measure of short amount of elapsed time
 * @property {string}  Second - measure of an amount of elapsed time
 * @property {string}  Minute - measure of an amount of elapsed time equal to 60 seconds
 * @property {string}  Hour - measure of an amount of elapsed time equal to 60 minutes
 * @property {string}  Day - measure of an amount of elapsed time equal to 24 hours
 * @property {string}  Montrh - measure of an amount of elapsed time equal to 1/12th year
 * @property {string}  Year - measure of an amount of elapsed time equal to 365 days
 *
 * @property {string}  Celsius - measure of temperature in the metric system
 * @property {string}  Fahrenheit - measure of temperature in the English system
 * @property {string}  Kelvin - measure of temperature in terms from "absolute zero" in the metric system
 * @property {string}  Micrometer - measure of distance using the metric system
 * @property {string}  Millimeter - measure of distance using the metric system
 * @property {string}  Centimeter - measure of distance using the metric system
 * @property {string}  Meter - measure of distance using the metric system
 * @property {string}  Hectometer - measure of distance using the metric system
 * @property {string}  Kilometer - measure of distance using the metric system
 * @property {string}  OneHundredKm - measure of distance (100 km) using the metric system
 *
 * @property {string}  Inch - measure of distance using the US system
 * @property {string}  Foot - measure of distance using the US system
 * @property {string}  Yard -measure of distance using the US system
 * @property {string}  Mile - measure of distance using the US system
 *
 * @property {string}  Kilopascal - measure of pressure using the metric system
 * @property {string}  Megapascal - measure of pressure using the metric system
 * @property {string}  PoundsPerSqIn - measure of pressure using the US system
 * @property {string}  KgPerSqCentimeter - measure of pressure using the metric system
 *
 * @property {string}  NewtonMeter - measure of torque using the metric system
 * @property {string}  GramForceCentimeter - measure of torque using the metric system
 * @property {string}  FootPound - measure of torque using the US system
 *
 * @property {string}  Microliter - measure of volume using the metric system
 * @property {string}  Milliliter - measure of volume using the metric system
 * @property {string}  Centiliter - measure of volume using the metric system
 * @property {string}  Deciliter - measure of volume using the metric system
 * @property {string}  Liter - measure of volume using the metric system
 * @property {string}  Ounce - measure of volume using the US system
 * @property {string}  Pint - measure of volume using the US system
 * @property {string}  Quart - measure of volume using the US system
 * @property {string}  Gallon - measure of volume using the US system
 *
 * @property {string} Gram - measure of mass in the metric system
 * @property {string} Microgram - measure of mass in the metric system
 * @property {string} Milligram - measure of mass in the metric system
 * @property {string} Kilogram - measure of mass in the metric system
 * @property {string} MetricTon - measure of mass in the metric system
 * @property {string} Ounce - measure of mass in the US system
 * @property {string} Pound - measure of mass in the US system
 * @property {string} Stone - measure of mass in old British terminology
 * @property {string} ImperialTon - a ton as defined by British Imperial units
 * @property {string} USTon - a ton as defined in the US
 * @property {string} grain - measure of mass in old Greek system terminology
 * @property {string} dram - measure of mass in old Greek system terminology
 * @property {string} TroyOunce - measure of mass in old Greek system terminology
 * @property {string} TroyPound - measure of mass in old Greek system terminology
 * @property {string} Pennyweight - measure of mass in old Greek and British terminology
 * @property {string} Kilopascal - measure of pressure.
 * @property {string} Megapascal - measure of pressure.
 * @property {string} PoundsPerSqIn - measure of pressure.
 * @property {string} KgPerSqCentimeter - measure of pressure.
 * @property {string} NewtonMeter - measure of torque.
 * @property {string} GramForceCentimeter - measure of torque.
 * @property {string} FootPound - measure of torque (US).
 * @property {string} Liter - measure of volume (metric).
 * @property {string} Microliter - measure of volume (metric).
 * @property {string} Milliliter - measure of volume (metric).
 * @property {string} Centiliter - measure of volume (metric).
 * @property {string} Deciliter - measure of volume (metric).
 * @property {string} FluidOunce - measure of volume (US).
 * @property {string} Pint - measure of volume (US).
 * @property {string} Quart - measure of volume (US).
 * @property {string} Gallon - measure of volume (US).
 * @property {string} Teaspoon - measure of volume (US, recipe).
 * @property {string} Tablespoon - measure of volume (US, recipe).
 * @property {string} Cup - measure of volume (US, recipe).
 * @property {string} Drop - measure of small volume (US, recipe). Defined as equal to 1 milliLiter
 * @property {string} Pinch - measure of small volume (US, recipe).
 * @property {string} Dash - measure of small volume (US, recipe).
 * @property {string} CubicMeter - measure of volume (metric).
 * @property {string} CubicCentimeter - measure of volume (metric).
 * @property {string} CubicFoot - measure of volume (US).
 * @property {string} CubicInch - measure of volume (US).
 * @property {string} Watt - measure of Power.
 * @property {string} Milliwatt - measure of Power.
 * @property {string} Kilowatt - measure of Power.
 * @property {string} Horsepower - measure of Power.
*/
const UnitType = {
    /* Basic enumeration or levels */
    Count: 'count',
    Each: 'ea',
    /* some alternate or archaic count collections */
    Dozen: 'doz',
    Score: 'score',
    Brace: 'brace',
    Pair: 'pair',
    K: 'k',
    Meg: 'meg',
    Gig: 'gig',

    /* Light level types */
    Lux: 'lux',

    /* Electric current */
    Ampere: 'a',
    Milliampere: 'ma',

    /* Electric voltage */
    Volt: 'v',
    Millivolt: 'mv',
    Kilovolt: 'Kv',

    /* Angle */
    Degree: 'deg',
    Radian: 'rad',

    /* Time */
    Microsecond: 'us',
    Millisecond: 'ms',
    Second: 'sec',
    Minute: 'min',
    Hour: 'hr',
    Day: 'dy',
    Month: 'mo',
    Year: 'yr',

    /* Temperature */
    Celsius: 'C',
    Fahrenheit: 'F',
    Kelvin: 'klv',

    /* Length and Distance */
    Micrometer: 'um',
    Millimeter: 'mm',
    Centimeter: 'cm',
    Decimeter: 'dm',
    Meter: 'm',
    Hectometer: 'Hm',
    Kilometer: 'Km',
    OneHundredKm: '100Km',
    Inch: 'in',
    Foot: 'ft',
    Yard: 'yd',
    Mile: 'mi',

    /* Mass */
    Gram: 'g',
    Microgram: 'mcg',
    Milligram: 'mg',
    Kilogram: 'kg',
    MetricTon: 'mton',
    Ounce: 'oz',
    Pound: 'lb',
    Stone: 'st',
    ImperialTon: 'iton',
    USTon: 'uston',
    Grain: 'gr',
    Dram: 'dr',
    TroyOunce: 'oz t',
    TroyPound: 'lb t',
    Pennyweight: 'dwt',

    /* Pressure */
    Kilopascal: 'Kpa',
    Megapascal: 'Mpa',
    PoundsPerSqIn: 'psi',
    KgPerSqCentimeter: 'kg/cm2',

    /* Torque */
    NewtonMeter: 'Nm',
    GramForceCentimeter: 'gfcm',
    FootPound: 'lbf',

    /* Volume Measure */
    Microliter: 'ul',
    Milliliter: 'ml',
    Centiliter: 'cl',
    Deciliter: 'dl',
    Liter: 'l',
    FluidOunce: 'fl.oz',
    Pint: 'pt',
    Quart: 'qt',
    Gallon: 'gal',
    Teaspoon: 'tsp',
    Tablespoon: 'tbsp',
    Cup: 'cup',
    Drop: 'drop',
    Pinch: 'pinch',
    Dash: 'dash',
    CubicMeter: 'm3',
    CubicCentimeter: 'cm3',
    CubicFoot: 'ft3',
    CubicInch: 'in3',

    /* Power */
    Watt: 'W',
    Milliwatt: 'mW',
    Kilowatt: 'KW',
    Horsepower: 'hp',

}
export default UnitType