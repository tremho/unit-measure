'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Measure of distances ranging from centimeters to miles.
 *
 * @description
 * Distance measure.  Used for long distances. Compatible with {@link Length}.
 * @alias Distance
 * @extends Measure
 */
class Distance extends Measure {
  /**
   * Sets up units for Centimeter, Decimeter, Meter, Hectometer, Inch, Foot, Yard, Mile
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('distance', UnitType.Kilometer, value, valueUnitType,
      {
        [UnitType.Millimeter]: 0.000001,
        [UnitType.Centimeter]: 0.00001,
        [UnitType.Decimeter]: 0.0001,
        [UnitType.Meter]: 0.001,
        [UnitType.Hectometer]: 0.1,
        [UnitType.Inch]: 0.0000254,
        [UnitType.Foot]: 0.0003048,
        [UnitType.Yard]: 0.0009144,
        [UnitType.Mile]: 1.60934
      })
  }
}

module.exports = Distance
