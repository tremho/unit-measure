
import UnitType from './UnitType'

/**
 * @description
 * Maps common synonyms for UnitType values to the canonical UnitType.
 * Includes resolveSynonym, setMeasureAs, and getMeasureAs utility functions.
 *
 * Note that all the terms used here are in lower case, but are in fact case-insensitive.
 * In other words ('km' and 'Km' and 'KM' are all equivalent)
 *
 * | Measure type Class | abbr. | name/desc
 * | :------------------| :----: |:---------
 * | Count || Unit types Count: to indicate or name by units or groups so as to find the total number of units involved
 * | | count | name for all item types
 * | | ea | Each (item)
 * | | each | Each (item)
 * | | level | may identify a count for a level or rank
 * | | percentage | may identify a count in a percentage ratio
 * | | percentage | may identify a count in a percentage ratio
 * | | percent | may identify a count in a percentage ratio
 * | | pct | may identify a count in a percentage ratio
 * | | % | may identify a count in a percentage ratio
 * | | |
 * | Light || Measurement of light intensity (Lux) Lux: The amount of light that is cast on a surface is called illuminance, which is measured in lux. This can be thought of as light intensity within a specific area. Lumens: The total output of visible light from a light source is measured in lumens. ... One lux is equal to one lumen per square meter (lux = lumens/m2)
 * | | lux | Measure of light intensity
 * | | |
 * | Ampere || Measurement of electrical current: An international System of units (SI) term.
 * | | amp | meaning 1 ampere
 * | | milliampere | 1/1000 of an ampere
 * | | milliamp | 1/1000 of an amp
 * | | milliamps | optional plural of same
 * | | ma | Abbreviation for milliamp
 * | Volt || Measurement of electrical potential when measured at 1 ampere with a resistance of 1 ohm
 * | | voltage | Volt
 * | | volt | Volt
 * | | volts | optional plural of same
 * | | v | Abbreviation of volt
 * | | kilovolt | 1000 volts
 * | | kv | Abbreviation of kilovolt
 * | | millivolt | 1/1000 volts
 * | | mv | Abbreviation of millivolt
 * | | mvolt | Abbreviation of millivolt
 * | | |
 * | Power || Measurement of  Power: a source or means of supplying energy
 * | | horsepower | Defined originally as the power of a pulling horse.
 * | | hp | Abbreviation of horsepower
 * | | watt | power produced by a current of one ampere across a potential difference of one volt
 * | | w | Abbreviation of watt
 * | | milliwatt | 1/1000 watt
 * | | kilowatt | 1000 watts
 * | | mw | Abbreviation of milliwatt
 * | | kw | Abbreviation of kilowatt
 * | | |
 * | Angle | Measure of separation of two vectors; the amount of turning necessary to bring one line or plane into coincidence with or parallel to another
 * | | degree | Term of measurement of an angle where 360 degrees comprise a full rotation.
 * | | radian | Term of measurement of an angle that is equal to the angle at the center of a circle subtended by an arc whose length equals the radius or approximately 57.3 degrees
 * | | radians | optional plural of same
 * | | angle | Used as a synonym for 'degree'
 * | | angular degrees | Used as a synonym for 'degree'
 * | | angulardegrees | Used as a synonym for 'degree' (for certain coding purposes)
 * | | deg | Abbreviation for 'degree'
 * | | rad | Abbreviation for 'radian'
 * | | |
 * | Time | | Measurements of duration or interval
 * | | time | base type for time is the 'second'
 * | | second | a unit of time we are all familiar with
 * | | seconds | optional plural of same
 * | | microsecond | one millionth of a second
 * | | millisecond | one thousandth of a second
 * | | us | Abbreviation for microsecond (derived from µs, substituting ASCII 'u' for 'µ')
 * | | ms | Abbreviation for millisecond
 * | | sec | Abbreviation for Second
 * | | minute | a unit of time we are all familiar with. Equal to 60 seconds
 * | | minutes | optional plural of same
 * | | min | Abbreviation for Minute
 * | | hour | a unit of time we are all familiar with. Equal to 60 minutes
 * | | hours | optional plural of same
 * | | hr | Abbreviation of hour
 * | | day | a unit of time we are all familiar with. Equal to 24 hours
 * | | days | optional plural of same
 * | | dy | Abbreviation of day
 * | | month | a unit of time we are all familiar with. Equal to 1/12 Year. Note: not all months are equivalent.  This is a generalized average.
 * | | months | optional plural of same
 * | | mo | Abbreviation of month
 * | | year | a unit of time we are all familiar with. Equal to 365 days. Note that technically a year is 365.25 days, but much like in the case of months, this is simplified for duration purposes.
 * | | years | optional plural of same
 * | | yr | Abbreviation of year
 * | | |
 * | Tenperature | | Measurement of the warmth or coldness of an object or substance with reference to some standard value.
 * | | degrees celsius | metric and SI standard for temperature measurement worldwide.
 * | | celsius | Synonym for 'degrees celsius'
 * | | degreescelsius | Synonym for 'degrees celsius' (for certain coding purposes)
 * | | degrees c | Synonym for 'degrees celsius'
 * | | celsius | Synonym for 'degrees celsius'
 * | | centigrade |  * | | degrees celsius | metric and SI standard for temperature measurement worldwide.
 * | | fahrenheit | syonymous with degrees fahrenheit
 * | | degrees fahrenheit | imperial system of measurement still standard in the US and its territories.
 * | | degrees f | syonymous with degrees fahrenheit
 * | | f | Abbreviation for degrees fahrenheit
 * | | kelvin | Kelvin system of measurement, used in scientific contexts, where 0 represents 'absolute zero' (no atomic action). Unlike the degree Fahrenheit and degree Celsius, the kelvin is not referred to or written as a degree. The kelvin is the primary unit of temperature measurement in the physical sciences, but is often used in conjunction with the degree Celsius, which has the same magnitude.
 * | | klv | Abbreviation for Kelvin
 * | | |
 * | Length | | Measurement of size and local distance.  Overlaps "Distance" in terms of scale. Prefer Length for sub-kilometer measures.
 * | | length | base unit of Length is the Meter
 * | | meter | The SI and metric standard used for measurement (except US)
 * | | meters | optional plural of same
 * | | m | Abbreviation for meter
 * | | decimeter | 1/10th of a meter
 * | | decimeters | optional plural of same
 * | | dm | Abbreviation for decimeter
 * | | centimeter | 1/100th of a meter
 * | | centimeters | optional plural of same
 * | | cm | Abbreviation for centimeter
 * | | millimeter | 1/1000th of a meter
 * | | millimeters | optional plural of same
 * | | mm | Abbreviation for millimeter
 * | | micometer | one millionth of a meter
 * | | micometers | optional plural of same
 * | | um | Abbreviation for micometer
 * | | hectometer | 100 meters
 * | | hectometers | optional plural of same
 * | | hm | Abbreviation for hectometer
 * | | inch | US Inch
 * | | inches | optional plural of same
 * | | foot | US Foot. Equivalent to a dozen (12) inches.
 * | | feet | optional plural of same
 * | | ft | Abbreviation for foot
 * | | yard | US yard. Equivalent to 3 feet.
 * | | yards | optional plural of same
 * | | yd | Abbreviation for  yard
 * | | |
 * | Distance | | Measurement of distances. Overlaps Length in terms of scale. Prefer Distance for Kilometer and above.
 * | | distance | base type for distance is the kilometer.
 * | | kilometer | Metric and SI standard for distance measurement
 * | | kilometers | optional plural of same
 * | | km | Abbreviation for kilometer
 * | | 100km | One hundred Kilometers
 * | | one humdred kilometers | Synonym for 100km
 * | | onehumdredkilometers | Synonym for 100km
 * | | 100 kilometers | Synonym for 100km
 * | | onehumdredkm | Synonym for 100km
 * | | 100 km | Synonym for 100km
 * | | mile | US Mile measurement for distance (about 2.2 kilometers)
 * | | miles | optional plural of same
 * | | mi | Abbreviation for mile
 * | | |
 * | Volume | | Measure of occupied space
 * | | volume | The base type for Volume is the Liter
 * | | liter | The metric and SI standard for volume measurement
 * | | liters | optional plural of same
 * | | l | Abbreviation for liter
 * | | microliter | one millionth of a liter
 * | | microliters | optional plural of same
 * | | ul | Abbreviation for microliter (derived from µl, substituting ASCII 'u' for 'µ')
 * | | milliliter | 1/1000th liter
 * | | milliliters | optional plural of same
 * | | cubic centimeter | equivalent to milliliter
 * | | cm3 | Abbreviation for cubic centimeter
 * | | cc | Abbreviation for cubic centimeter
 * | | ml | Abbreviation for milliliter
 * | | centiliter | 1/100th liter
 * | | centiliters | optional plural of same
 * | | cl | Abbreviation of centiliter
 * | | deciliter | one tenth liter
 * | | deciliters | optional plural of same
 * | | dl | Abbreviation for deciliter
 * | | fluid ounce | US Unit of measure
 * | | fluid ounces | optional plural of same
 * | | fluidounce | synonym for FLuid ounce (for certain coding purposes)
 * | | fl ounce | Abbreviation for Fluid Ounce
 * | | fl. ounce | Abbreviation for Fluid Ounce
 * | | fl. ounces | optional plural of same
 * | | fl oz | Abbreviation for Fluid Ounce
 * | | floz | Abbreviation for Fluid Ounce
 * | | fl. oz | Abbreviation for Fluid Ounce
 * | | fl. ounce | Abbreviation for Fluid Ounce
 * | | fl.oz | Abbreviation for Fluid Ounce
 * | | pint | US Unit of measure
 * | | pints | optional plural of same
 * | | pt | Abbreviation for Pint
 * | | quart | US Unit of measure
 * | | quarts | optional plural of same
 * | | qt | Abbreviation for quqrt
 * | | gallon | US Unit of measure
 * | | gallons | optional plural of same
 * | | gal | Abbreviation of gallon
 * | | teaspoon | US kitchen measure unit
 * | | tsp | Abbreviation for teaspoon
 * | | t | Abbreviation for teaspoon
 * | | tablespoon | US kitchen measure unit
 * | | tbsp | Abbreviation for tablespoon
 * | | tb | Abbreviation for tablespoon
 * | | cup |  US kitchen measure unit
 * | | c | Abbreviaion for cup
 * | | drop | Colloquial measurement
 * | | drip | synonym for drop
 * | | drp | Abbreviation for drop
 * | | pinch | Colloquial measurement
 * | | pch | Abbreviation for pinch
 * | | dash | Colloquial measurementa
 * | | dsh | Abbreviation for dash
 * | | cubic meter | Cubic meter
 * | | cubicmeter | Synonym fro cubic meter
 * | | m3 | Abbreviation for cubic meter
 * | | cubic centimeter | Cubic centimeter (see also milliliter)
 * | | cubiccentimeter | Synonym for cubic centimeter
 * | | cubic foot | US cubic foot
 * | | cubicfoot | Synonym for cubic foot
 * | | ft3 | Abbreviation for cubic feet
 * | | cft | Abbreviation for cubic feet
 * | | cf | Abbreviation for cubic feet
 * | | cubic inch | US cubic inch
 * | | cubicinch | Synonym for cubic inch
 * | | ci | Abbreviation for cubic inch
 * | | cin | Abbreviation for cubic inch
 * | | |
 * | Mass | | Mass is commonly known as weight, although this is incorrect. An object's mass determines the strength of its gravitational attraction to other bodies, such as the earth. The force of this attraction is characterized as weight.  For common terrestrial meaning, mass and weight are close enough to be synonymous.
 * | | mass | the base unit for mass measurement is the gram
 * | | gram | the metric and SI standard for mass measurement.
 * | | g | Abbreviation for gram
 * | | microgram | one millionth of a gram
 * | | mcg | Abbreviation of microgram
 * | | ug | Abbreviation of microgram (derived from µg, substituting ASCII 'u' for 'µ')
 * | | milligram | 1/1000th of a gram
 * | | mg | Abbreviation of milligram
 * | | kilogram | 1000 grams
 * | | kg | Abbreviation of kilogram
 * | | ounce | US measure of weight. 1/16 Pound
 * | | ounces | optional plural form of same
 * | | oz | Abbreviation of ounce
 * | | ozs | optional plural form of same
 * | | pound | US Standard weight measure
 * | | pounds | optional plural form of same
 * | | lb | Abbreviation for pound
 * | | lbs | optional plural form of same
 * | | stone | archaic imperial measure
 * | | st | Abbreviaiton for stone
 * | | metric ton | metric and SI definition of a 'ton'
 * | | metricton | synonym for metric ton
 * | | tonne | synonym for metric ton
 * | | mton | Abbreviation for metric ton
 * | | mt | Abbreviation for metric ton
 * | | imperial ton | British Imperial definitio of 'ton'
 * | | imperialton | synonym for imperial ton
 * | | iton | Abbreviation for imperial ton
 * | | long ton | synonym for Imperial ton
 * | | longton | synonym for long ton
 * | | l. ton | Abbreviation for long ton
 * | | l.ton | Abbreviation for long ton
 * | | l. tn | Abbreviation for long ton
 * | | l.tn | Abbreviation for long ton
 * | | ltn | Abbreviation for long ton
 * | | us ton | US definition for 'ton'
 * | | uston | synonym for US Ton
 * | | short ton | synonym for US Ton
 * | | shortton | synonym for Short Ton
 * | | sh, ton | synonym for Short Ton
 * | | sh.ton | synonym for Short Ton
 * | | sh. tn | synonym for Short Ton
 * | | sh.tn | synonym for Short Ton
 * | | shtn | synonym for Short Ton
 * | | grain | Archaic measurement of small masses (Greek / British)
 * | | gr | Abbreviation for grain
 * | | dram | Archaic measurement of small masses (Greek / British)
 * | | dr | Abbreviation for dram
 * | | troy ounce | Archaic weight measurement (Greek / British)
 * | | troyounce | synonym for troy ounce
 * | | oz t | Abbreviation for troy ounce
 * | | ozt | Abbreviation for troy ounce
 * | | troy pound | Archaic weight measurement (Greek / British)
 * | | troypound | synonym for troy pound
 * | | lb t | Abbreviation for troy pound
 * | | lbt | Abbreviation for troy pound
 * | | pennyweight | Archaic weight measurement (Greek / British)
 * | | dwt | Abbreviation for pennyweight
 * | | pwt | Abbreviation for pennyweight
 * | | pw | Abbreviation for pennyweight
 * | | |
 * | Pressure | | Pressure is defined as the physical force exerted on an object.
 * | | pressure | The base unit of pressure is the kilopascal (Kpa)
 * | | kilopascal | The SI standard for pressure measurement.
 * | | kpa | Abbreviation for kilopascal
 * | | megapascal | 1000 Kpa
 * | | mpa | Abbreviation for megapascal
 * | | pounds per square inch | US unit measure if si many pounds per square inch of surface area
 * | | poundspersquqreinch | synonyn for pounds per square inch
 * | | poundspersqin | Abbreviation for pounds per square inch
 * | | psi | Abbreviation for pounds per square inch
 * | | lb/in2 | Abbreviation for pounds per square inch
 * | | kg per square centimeter | Pressure of so many kilograms per square centimeter of surface area
 * | | kgpersquarecentimeter | Synonym for kg per square centimeter
 * | | kgpersqcentimeter  | Synonym for kg per square centimeter
 * | | kg/cm2 | Abbreviation for kg per square centimeter
 * | Torque | | Torque is the rotational equivalent of linear force. It is also referred to as the moment, moment of force, rotational force or turning effect, depending on the field of study.
 * | | torque | The Newton Meter is the SI standard unit of torque
 * | | newton meter | The Newton Meter is the SI standard unit of torque\
 * | | newtonmeter | Synonymous with newton meter
 * | | nm | Abbreviation of Newton Meter
 * | | gram force centimeter | Alternative measure of torque
 * | | gram-force centimeter | Synonym to gram force centimeter
 * | | gram force cm | Synonym to gram force centimeter
 * | | gram-force cm | Synonym to gram force centimeter
 * | | gfcm | Abbreviation for gram force centimeter
 * | | gf*cm | Abbreviation for gram force centimeter
 * | | foot pound | US measure of torque
 * | | footpound | Synonym to foot pound
 * | | ft lbs | Abbreviation for foot pound
 * | | lbft | Abbreviation for foot pound
 * | | pound-force foot | Synonym to foot pound
 *
 */
const NameMapUnit = {

    /* Count */
    'count': UnitType.Count,
    'ea': UnitType.Count,
    'each': UnitType.Count,
    'item': UnitType.Count,
    'level': UnitType.Count,
    '%': UnitType.Count,
    'percent': UnitType.Count,
    'percentage': UnitType.Count,
    'pct': UnitType.Count,
    'dozen': UnitType.Dozen,
    'doz': UnitType.Dozen,
    'pair': UnitType.Pair,
    'brace': UnitType.Brace,
    'score': UnitType.Score,
    'k' :UnitType.K,
    'kilo': UnitType.K,
    'meg': UnitType.Meg,
    'gig': UnitType.Gig,

    /* Light */
    'light': UnitType.Lux,
    'lux': UnitType.Lux,

    /* Amperage */
    'amperage': UnitType.Ampere,
    'a': UnitType.Ampere,
    'ampere': UnitType.Ampere,
    'amp': UnitType.Ampere,
    'amps': UnitType.Ampere,
    'ma': UnitType.Milliampere,
    'milliampere': UnitType.Milliampere,
    'milliamp': UnitType.Milliampere,
    'milliamps': UnitType.Milliampere,

    /* Voltage */
    'voltage': UnitType.Volt,
    'v': UnitType.Volt,
    'volt': UnitType.Volt,
    'volts': UnitType.Volt,
    'kv': UnitType.Kilovolt,
    'kilovolt': UnitType.Kilovolt,
    'kvolt': UnitType.Kilovolt,
    'mv': UnitType.Kilovolt,
    'millivolt': UnitType.Kilovolt,
    'mvolt': UnitType.Millivolt,

    /* Power */
    'watt': UnitType.Watt,
    'w': UnitType.Watt,
    'milliwatt':UnitType.Milliwatt,
    'mw': UnitType.Milliwatt,
    'kilowatt':UnitType.Kilowatt,
    'kw': UnitType.Kilowatt,
    'horsepower': UnitType.Horsepower,
    'hp': UnitType.Horsepower,

    /* Angle */
    'angle': UnitType.Degree,
    'angular degrees': UnitType.Degree,
    'angulardegrees': UnitType.Degree,
    'deg': UnitType.Degree,
    'degree': UnitType.Degree,
    'degrees': UnitType.Degree,
    'rad': UnitType.Radian,
    'radian': UnitType.Radian,
    'radians': UnitType.Radian,

    /* Time */
    'time': UnitType.Second,
    'microsecond': UnitType.Microsecond,
    'us': UnitType.Microsecond,
    'millisecond': UnitType.Millisecond,
    'ms': UnitType.Millisecond,
    'sec': UnitType.Second,
    'second': UnitType.Second,
    'seconds': UnitType.Second,
    'min': UnitType.Minute,
    'minute': UnitType.Minute,
    'minutes': UnitType.Minute,
    'hr': UnitType.Hour,
    'hour': UnitType.Hour,
    'hours': UnitType.Hour,
    'dy': UnitType.Day,
    'day': UnitType.Day,
    'days': UnitType.Day,
    'mo': UnitType.Month,
    'month': UnitType.Month,
    'months': UnitType.Month,
    'yr': UnitType.Year,
    'year': UnitType.Year,
    'years': UnitType.Year,

    /* Temperature */
    'temperature': UnitType.Celsius,
    'c': UnitType.Celsius,
    'degrees celsius': UnitType.Celsius,
    'degreescelsius': UnitType.Celsius,
    'degrees c': UnitType.Celsius,
    'celsius': UnitType.Celsius,
    'centigrade': UnitType.Celsius,
    'f': UnitType.Fahrenheit,
    'degrees fahrenheit': UnitType.Fahrenheit,
    'degreesfahrenheit': UnitType.Fahrenheit,
    'degrees f': UnitType.Fahrenheit,
    'fahrenheit': UnitType.Fahrenheit,
    'kelvin': UnitType.Kelvin,
    'klv': UnitType.Kelvin,

    /* Length  */
    'length': UnitType.Meter,
    'micrometer': UnitType.Micrometer,
    'micrometers': UnitType.Micrometer,
    'um': UnitType.Micrometer,
    'millimeter': UnitType.Millimeter,
    'millimeters': UnitType.Millimeter,
    'mm': UnitType.Millimeter,
    'centimeter': UnitType.Centimeter,
    'centimeters': UnitType.Centimeter,
    'cm': UnitType.Centimeter,
    'decimeter': UnitType.Decimeter,
    'decimeters': UnitType.Decimeter,
    'dm': UnitType.Decimeter,
    'meter': UnitType.Meter,
    'meters': UnitType.Meter,
    'm': UnitType.Meter,
    'hectometer': UnitType.Hectometer,
    'hectometers': UnitType.Hectometer,
    'hm': UnitType.Hectometer,
    'inch': UnitType.Inch,
    'inches': UnitType.Inch,
    'in': UnitType.Inch,
    'foot': UnitType.Foot,
    'feet': UnitType.Foot,
    'ft': UnitType.Foot,
    'yard': UnitType.Yard,
    'yards': UnitType.Yard,
    'yd': UnitType.Yard,
    'mile': UnitType.Mile,
    'miles': UnitType.Mile,
    'mi': UnitType.Mile,

    /* Distance */
    'distance': UnitType.Kilometer,
    'kilometer': UnitType.Kilometer,
    'kilometers': UnitType.Kilometer,
    'km': UnitType.Kilometer,
    '100km': UnitType.OneHundredKm,
    'one hundred kilometers': UnitType.OneHundredKm,
    'onehundredkilometers': UnitType.OneHundredKm,
    '100 kilometers': UnitType.OneHundredKm,
    'onehundredkm': UnitType.OneHundredKm,
    '100 km': UnitType.OneHundredKm,

    /* Volume */
    'volume': UnitType.Liter,
    'microliter': UnitType.Microliter,
    'microliters': UnitType.Microliter,
    'ul': UnitType.Microliter,
    'milliliter': UnitType.Milliliter,
    'milliliters': UnitType.Milliliter,
    'ml': UnitType.Milliliter,
    'centiliter': UnitType.Centiliter,
    'centiliters': UnitType.Centiliter,
    'cl': UnitType.Centiliter,
    'cubic centimeter': UnitType.Centiliter,
    'cubiccentimeter': UnitType.Centiliter,
    'cc': UnitType.Centiliter,
    'deciliter': UnitType.Deciliter,
    'deciliters': UnitType.Deciliter,
    'dl': UnitType.Deciliter,
    'liter': UnitType.Liter,
    'liters': UnitType.Liter,
    'l': UnitType.Liter,
    'fluid ounce': UnitType.FluidOunce,
    'fluidounce': UnitType.FluidOunce,
    'fl.ounce': UnitType.FluidOunce,
    'fl. ounce': UnitType.FluidOunce,
    'fluid ounces': UnitType.FluidOunce,
    'fluidounces': UnitType.FluidOunce,
    'fl. ounces': UnitType.FluidOunce,
    'fl.ounces': UnitType.FluidOunce,
    'fl oz': UnitType.FluidOunce,
    'fl. oz': UnitType.FluidOunce,
    'floz': UnitType.FluidOunce,
    'fl.oz': UnitType.FluidOunce,
    'pint': UnitType.Pint,
    'pints': UnitType.Pint,
    'pt': UnitType.Pint,
    'quart': UnitType.Quart,
    'quarts': UnitType.Quart,
    'qt': UnitType.Quart,
    'gallon': UnitType.Gallon,
    'gallons': UnitType.Gallon,
    'gal': UnitType.Gallon,
    'teaspoon':UnitType.Teaspoon,
    'tsp': UnitType.Teaspoon,
    't': UnitType.Teaspoon,
    'tablespoon':UnitType.Tablespoon,
    'tbsp': UnitType.Tablespoon,
    'tb':UnitType.Tablespoon,
    'cup':UnitType.Cup,
    // 'c':UnitType.Cup,  // collides with Celsius.  Need to pre-process this abbreviation in parsers with established context
    'drop':UnitType.Drop,
    'drip':UnitType.Drop,
    'drp': UnitType.Drop,
    // 'dr': UnitType.Drop, // collides with Dram.
    'pinch':UnitType.Pinch,
    'pch': UnitType.Pinch,
    'dash':UnitType.Dash,
    'dsh': UnitType.Dash,
    'cubicmeter': UnitType.CubicMeter,
    'm3': UnitType.CubicMeter,
    'cm3': UnitType.CubicCentimeter,
    // 'cc': UnitType.CubicCentimeter, // Cubic Centimeter already defined as its Centiliter synonym.
    'cubicfoot': UnitType.CubicFoot,
    'ft3': UnitType.CubicFoot,
    'cft': UnitType.CubicFoot,
    'cf': UnitType.CubicFoot,
    'cubicinch': UnitType.CubicInch,
    'in3': UnitType.CubicInch,
    'ci': UnitType.CubicInch,
    'cin': UnitType.CubicInch,

    /* Mass */
    'mass': UnitType.Gram,
    'gram': UnitType.Gram,
    'g': UnitType.Gram,
    'microgram': UnitType.Microgram,
    'mcg':UnitType.Microgram,
    'ug':UnitType.Microgram,
    'milligram':UnitType.Milligram,
    'mg':UnitType.Milligram,
    'kilogram':UnitType.Kilogram,
    'kg':UnitType.Kilogram,
    'ounce': UnitType.Ounce,
    'oz': UnitType.Ounce,
    'ounces': UnitType.Ounce,
    'ozs': UnitType.Ounce,
    'pound': UnitType.Pound,
    'lb': UnitType.Pound,
    'pounds': UnitType.Pound,
    'lbs': UnitType.Pound,
    'stone': UnitType.Stone,
    'st': UnitType.Stone,
    'metricton': UnitType.MetricTon,
    'mton': UnitType.MetricTon,
    'tonne': UnitType.MetricTon,
    // 't': UnitType.MetricTon, // Conflicts with teaspoon, which of course is a very different quantity.
    'mt': UnitType.MetricTon,
    'imperialton': UnitType.ImperialTon,
    'iton': UnitType.ImperialTon,
    'long ton': UnitType.ImperialTon,
    'longton': UnitType.ImperialTon,
    'l. ton': UnitType.ImperialTon,
    'l.ton': UnitType.ImperialTon,
    'l. tn.': UnitType.ImperialTon,
    'l.tn.': UnitType.ImperialTon,
    'ltn': UnitType.ImperialTon,
    'uston': UnitType.USTon,
    'short ton.': UnitType.USTon,
    'shortton.': UnitType.USTon,
    'sh. ton.': UnitType.USTon,
    'sh.ton.': UnitType.USTon,
    'sh. tn.': UnitType.USTon,
    'sh.tn.': UnitType.USTon,
    'shtn': UnitType.USTon,
    'grain':UnitType.Grain,
    'gr':UnitType.Grain,
    'dram':UnitType.Dram,
    'dr':UnitType.Dram,
    'troy ounce':UnitType.TroyOunce,
    'troyounce':UnitType.TroyOunce,
    'oz t':UnitType.TroyOunce,
    'ozt':UnitType.TroyOunce,
    'troy pound':UnitType.TroyPound,
    'troypound':UnitType.TroyPound,
    'lb t':UnitType.TroyPound,
    'lbt':UnitType.TroyPound,
    'pennyweight':UnitType.Pennyweight,
    'dwt':UnitType.Pennyweight,
    'pwt':UnitType.Pennyweight,
    'pw':UnitType.Pennyweight,

    /* Pressure */
    'pressure': UnitType.Kilopascal,
    'kilopascal': UnitType.Kilopascal,
    'kpa': UnitType.Kilopascal,
    'megapascal': UnitType.Megapascal,
    'mpa': UnitType.Megapascal,
    'pounds per square inch': UnitType.PoundsPerSqIn,
    'poundspersquareinch': UnitType.PoundsPerSqIn,
    'poundspersqin': UnitType.PoundsPerSqIn,
    'psi': UnitType.PoundsPerSqIn,
    'lb/in2': UnitType.PoundsPerSqIn,
    'kg/cm2': UnitType.KgPerSqCentimeter,
    'kg per square centimeter': UnitType.KgPerSqCentimeter,
    'kgpersquarecentimeter': UnitType.KgPerSqCentimeter,
    'kgpersqcentimeter': UnitType.KgPerSqCentimeter,
    'newtonmeter': UnitType.NewtonMeter,
    'newton meter': UnitType.NewtonMeter,

    /* Torque */
    'torque': UnitType.NewtonMeter,
    'nm': UnitType.NewtonMeter,
    'gramforcecentimeter': UnitType.GramForceCentimeter,
    'gram force centimeter': UnitType.GramForceCentimeter,
    'gram-force centimeter': UnitType.GramForceCentimeter,
    'gram force cm': UnitType.GramForceCentimeter,
    'gram-force cm': UnitType.GramForceCentimeter,
    'gfcm': UnitType.GramForceCentimeter,
    'gf*cm': UnitType.GramForceCentimeter,
    'footpound': UnitType.FootPound,
    'foot pound': UnitType.FootPound,
    'ft lbs': UnitType.FootPound,
    'pound-force foot': UnitType.FootPound,
    'lbf': UnitType.FootPound,

    /**
     * @description
     * Finds the canonical UnitType measure for one of the mapped synonyms
     *
     * @param  {string}  unitIn - Unit string to match to a canonical UnitType
     * @returns {string}        Equivalent UnitType, or undefined
     *
     * @example
     *  let abbrevIn = 'cf'
     *  let canonType = NameMapUnit.resolveSynonym(abbrevIn)
     *  // canonType === UnitType.CubicFoot === 'ft3'
     */
    resolveSynonym: function (unitIn) {
        return unitIn && NameMapUnit[unitIn.toLowerCase()]
    },

    /**
     * @description
     * Sets the provided Measure value with a new value expressed in a value that may be a synonym
     *
     * @param measure   {Measure} The Measure object to set
     * @param unitIn    {string} The unit to match to a canonical UnitType and set value as
     * @param value     {number} The value to set
     *
     * @example
     *  let myMeasure = new Length()
     *  NameMapUnit.setMeasureAs(myMeasure, 'feet', 6.4)
     */
    setMeasureAs: function (measure, unitIn, value) {
        measure.setValueAs(NameMapUnit.resolveSynonym(unitIn), value)
    },

    /**
     * @description
     * Returns the value of the provided Measure in units expressed by the resolved synonym
     *
     * @param measure   {Measure} The Measure object to read
     * @param unitIn    {string} The unit to match to a canonical UnitType for value
     * @returns {number}  The value of this measure in resolved UnitType
     *
     * @example:
     *  let myMeasure = new Length(UnitType.Inch, 27)
     *  let feet = NameMapUnit.getMeasureAs(myMeasure, 'feet')
     */
    getMeasureAs: function (measure, unitIn) {
        return measure.getValueAs(NameMapUnit.resolveSynonym(unitIn))
    }
}
export default NameMapUnit