
const Measure = require('./unit/Measure')
const NameMapRatio = require('./unit/NameMapRatio')
const NameMapUnit = require('./unit/NameMapUnit')
const Ratio = require('./unit/Ratio')
const UnitFactory = require('./unit/UnitFactory')
const UnitType = require('./unit/UnitType')
const Acceleration = require('./unit/Acceleration')
const Amperage = require('./unit/Amperage')
const Angle = require('./unit/Angle')
const Count = require('./unit/Count')
const Distance = require('./unit/Distance')
const FuelEfficiency = require('./unit/FuelEfficiency')
const Length = require('./unit/Length')
const Light = require('./unit/Light')
const Power = require('./unit/Power')
const Pressure = require('./unit/Pressure')
const Speed = require('./unit/Speed')
const Temperature = require('./unit/Temperature')
const Time = require('./unit/Time')
const Torque = require('./unit/Torque')
const Voltage = require('./unit/Voltage')
const Volume = require('./unit/Volume')

/**
 * Exported APIs of the UnitMeasure provider are under a `UnitMeasure` namespace
 *
 * @memberof module:(Provider) UnitMeasure
 * @property {Measure} Measure
 *          The base class of all measure types
 * @property {Ratio} Ratio
 *          The base class of all ratio measurements
 * @property {UnitFactory} UnitFactory
 *          Generates a unit type class object by name
 * @property {UnitType} UnitType
 *          Enumeration of unit types
 * @property {Acceleration} Acceleration
 *          Measures @{link Speed} over (@link Time)
 * @property {Amperage} Amperage
 *          Measures electrical current (e.g. amps)
 * @property {Angle} Angle
 *          Measures angular span (e.g. degrees, radians)
 * @property {Count} Count
 *          Measures unit increments
 * @property {Distance} Distance
 *          Measures distance (e.g. miles, kilometers)
 * @property {FuelEfficiency} FuelEfficiency
 *          Measures {@link Distance} over {@link Volume} (e.g. mpg)
 * @property {Light} Light
 *          Measures light intensity (e.g. lux)
 * @property {Power} Power
 *          Measures power enery (e.g. watts, horsepower)
 * @property {Pressure} Pressure
 *          Measures pressure (e.g. lbs/sqIn)
 * @property {Speed} Speed
 *          Measures {@link Distance} over {@link Time} (e.g. mph)
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
module.exports = {
  Measure,
  NameMapRatio,
  NameMapUnit,
  Ratio,
  UnitFactory,
  UnitType,
  Acceleration,
  Amperage,
  Angle,
  Count,
  Distance,
  FuelEfficiency,
  Length,
  Light,
  Power,
  Pressure,
  Speed,
  Temperature,
  Time,
  Torque,
  Voltage,
  Volume
}
