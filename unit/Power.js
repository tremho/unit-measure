'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Measure for the amount of energy consumed per unit time.
 *
 * @description
 * Electric Power.
 * @alias Power
 * @extends Measure
 */
class Power extends Measure {
  /**
   * Defines measure for Power. {@link UnitType} Watt is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('power', UnitType.Watt, value, valueUnitType,
      {
        [UnitType.Milliwatt]: 0.001,
        [UnitType.Kilowatt]: 1000,
        [UnitType.Horsepower]: 745.699872
      })
  }
}

module.exports = Power
