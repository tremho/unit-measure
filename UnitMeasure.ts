import Measure from "./src/unit/Measure";
import UnitType from "./src/UnitType";
import UnitFactory from "./src/UnitFactory";
import NameMapUnit from "./src/NameMapUnit";
import Ratio from "./src/unit/Ratio";
import NameMapRatio from "./src/NameMapRatio";

import Acceleration from "./src/unit/Acceleration";
import Amperage from "./src/unit/Amperage";
import Angle from "./src/unit/Angle";
import Count from "./src/unit/Count";
import Density from "./src/unit/Density";
import Distance from "./src/unit/Distance";
import FuelEfficiency from "./src/unit/FuelEfficiency";
import Length from "./src/unit/Length";
import Light from "./src/unit/Light";
import Mass from "./src/unit/Mass";
import Power from "./src/unit/Power";
import Pressure from "./src/unit/Pressure";
import Speed from "./src/unit/Speed";
import Temperature from "./src/unit/Temperature";
import Time from "./src/unit/Time";
import Torque from "./src/unit/Torque";
import Voltage from "./src/unit/Voltage";
import Volume from "./src/unit/Volume";


/**
 * Exported APIs of the UnitMeasure library module
 *
 * @property {Measure} Measure
 *          The base class of all measure types
 * @property {Ratio} Ratio
 *          The base class of all ratio measurements
 * @property {UnitType} UnitType
 *          Enumeration of unit types
 * @property {UnitFactory} UnitFactory
 *          Generates a unit type class object by name
 * @property {NameMapUnit} NameMapUnit
 *          Synonym maps of common names/abbreviations to unit types
 * @property {NameMapRatio} NameMapRatio
 *          Synonym maps of common names/abbreviations to common ratios, plus a Ratio factory method
 * @property {Acceleration} Acceleration
 *          Measures `Speed` over `Time`
 * @property {Amperage} Amperage
 *          Measures electrical current (e.g. amps)
 * @property {Angle} Angle
 *          Measures angular span (e.g. degrees, radians)
 * @property {Count} Count
 *          Measures unit increments
 * @property {Density} Density
 *          Measures `Mass` per `Volume`
 * @property {Distance} Distance
 *          Measures distance (e.g. miles, kilometers)
 * @property {FuelEfficiency} FuelEfficiency
 *          Measures `Distance` over `Volume` consumption (e.g. mpg)
 * @property {Light} Light
 *          Measures light intensity (e.g. lux)
 * @property {Power} Power
 *          Measures power enery (e.g. watts, horsepower)
 * @property {Pressure} Pressure
 *          Measures pressure (e.g. lbs/sqIn)
 * @property {Speed} Speed
 *          Measures `Distance` over `Time` (e.g. mph)
 * @property {Temperature} Temperature
 *          Measures temperature (e.g. deg F, deg C)
 * @property {Time} Time
 *          Measures time (e.g. seconds, minutes, hours, weeks)
 * @property {Torque} Torque
 *          Measures torque (e.g. pascals)
 * @property {Voltage} Voltage
 *          Measures electrical pressure (e.g. volts)
 * @property {Volume} Volume
 *          Measures units of volume (e.g liter, gallon)
 */
class UnitMeasure {}


export {Measure as Measure}
export {Ratio as Ratio}

export {UnitType as UnitType}
export {UnitFactory as UnitFactory}
export {NameMapUnit as NameMapUnit}
export {NameMapRatio as NameMapRatio}

export {Amperage as Amperage}
export {Angle as Angle}
export {Count as Count}
export {Distance as Distance}
export {Length as Length}
export {Light as Light}
export {Mass as Mass}
export {Power as Power}
export {Pressure as Pressure}
export {Temperature as Temperature}
export {Time as Time}
export {Torque as Torque}
export {Voltage as Voltage}
export {Volume as Volume}

export {Speed as Speed}
export {Density as Density}
export {FuelEfficiency as FuelEfficiency}
export {Acceleration as Acceleration}
