'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Measure for the force applied to an object surface.
 *
 * @description
 * Pressure measure.
 * @alias Pressure
 * @extends Measure
 */
class Pressure extends Measure {
  /**
   * Defines measure for Pressure. {@link UnitType} Kilopascal is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('pressure', UnitType.Kilopascal, value, valueUnitType,
      {
        [UnitType.Megapascal]: 1000,
        [UnitType.PoundsPerSqIn]: 6.894757269504543,
        [UnitType.KgPerSqCentimeter]: 98.0664999998
      })
  }
}

module.exports = Pressure
