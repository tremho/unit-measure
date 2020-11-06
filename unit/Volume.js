'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * Measure of space occupied by a substance, using liter as the base unit.
 *
 * Volume measure.
 */
class Volume extends Measure {
  /**
   * Defines measure for Volume. {@link UnitType} Liter is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('volume', UnitType.Liter, value, valueUnitType,
      {
        [UnitType.Microliter]: 0.000001,
        [UnitType.Milliliter]: 0.001,
        [UnitType.Centiliter]: 0.01,
        [UnitType.Deciliter]: 0.1,
        [UnitType.Ounce]: 0.0295735,
        [UnitType.Pint]: 0.473176,
        [UnitType.Quart]: 0.946353,
        [UnitType.Gallon]: 3.78541
      })
  }
}

module.exports = Volume
