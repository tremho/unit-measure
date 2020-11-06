'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Measure of electric voltage using volt as the base unit.
 *
 * @description
 * Electric Voltage.
 * @alias Voltage
 * @extends Measure
 */
class Voltage extends Measure {
  /**
   * Defines measure for Electric Voltage. {@link UnitType} Volt is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('voltage', UnitType.Volt, value, valueUnitType,
      {
        [UnitType.Millivolt]: 0.001
      })
  }
}

module.exports = Voltage
