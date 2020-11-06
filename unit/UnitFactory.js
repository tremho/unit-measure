'use strict'

const UnitType = require('./UnitType')
const NameMapUnit = require('./NameMapUnit')

const Distance = require('./Distance')
const Length = require('./Length')
const Temperature = require('./Temperature')
const Volume = require('./Volume')
const Angle = require('./Angle')
const Time = require('./Time')

// TODO: don't bring in the kitchen sink just yet... many of these may not be used
// Count = require('./Count'),
// Light = require('./Light'),
// Amperage = require('./Amperage'),
// Voltage = require('./Voltage'),
// Power = require('./Power'),
// Pressure = require('./Pressure'),
// Torque = require('./Torque');

module.exports = {

  /**
   * Creates a unit of the given type
   *
   * @param unitTypeString
   * @param initialValue
   * @returns {*}
   * @throws Error if unit type is unknown
   */
  createUnitObject (unitTypeString, initialValue = 0) {
    let unitType = NameMapUnit.resolveSynonym(unitTypeString)
    let measure
    switch (unitType) {
      case UnitType.Microsecond:
      case UnitType.Millisecond:
      case UnitType.Second:
      case UnitType.Minute:
      case UnitType.Hour:
      case UnitType.Day:
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
      case UnitType.Ounce:
      case UnitType.Pint:
      case UnitType.Quart:
      case UnitType.Gallon:
        measure = new Volume()
        break

      case UnitType.Degree:
      case UnitType.Radian:
        measure = new Angle()
        break

      // case UnitType.Count:
      //     measure = new Count();
      //     break;
      // case UnitType.Lux:
      //     measure = new Light();
      //     break;
      //
      // case UnitType.Ampere:
      // case UnitType.Milliampere:
      //     measure = new Amperage();
      //     break;
      //
      // case UnitType.Volt:
      //     measure = new Voltage();
      //     break;
      //
      // case UnitType.Watt:
      // case UnitType.Milliwatt:
      // case UnitType.Kilowatt:
      // case UnitType.Horsepower:
      //     measure = new Power();
      //     break;
      //

      // case UnitType.Kilopascal:
      // case UnitType.Megapascal:
      // case UnitType.PoundsPerSqIn:
      // case UnitType.KgPerSqCentimeter:
      //     measure = new Pressure();
      //     break;
      //
      // case UnitType.NewtonMeter:
      // case UnitType.GramForceCentimeter:
      // case UnitType.FootPound:
      //     measure = new Torque();
      //     break;
    }
    if (!measure) {
      throw Error('Unable to create Unit object for ' + unitTypeString)
    }
    measure.setValueAs(initialValue, unitType)

    return measure
  }
}
