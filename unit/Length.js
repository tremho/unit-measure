'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * Measure of length (short distances) ranging from a micrometer to a mile.
 * Used for short distances. Compatible with Distance.
 */
class Length extends Measure {
  /**
   * Defines measure for Length. {@link UnitType} Meter is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('length', UnitType.Meter, value, valueUnitType,
      {
        [UnitType.Micrometer]: 0.000001,
        [UnitType.Millimeter]: 0.001,
        [UnitType.Centimeter]: 0.01,
        [UnitType.Decimeter]: 0.1,
        [UnitType.Hectometer]: 100,
        [UnitType.Kilometer]: 1000,
        [UnitType.Inch]: 0.0254,
        [UnitType.Foot]: 0.3048,
        [UnitType.Yard]: 0.9144,
        [UnitType.Mile]: 1609.34
      })
  }
}

module.exports = Length
