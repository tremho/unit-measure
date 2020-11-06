'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Measure of flow rate of electric charge.
 *
 * @description
 * Electric Current.
 * In practical terms, the ampere is a measure of the amount of electric charge passing a point in an electric circuit per unit time, with an equivalent charge to 6.241x10<sup>18</sup> charge carriers per second constituting one ampere.
 * Ampere is a measure of flow rate of electric charge.
 *
 * @alias Amperage
 * @extends Measure
 */
class Amperage extends Measure {
  /**
   * Defines measure for Electric Current.
   * {@link UnitType} Amperage is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('amperage', UnitType.Ampere, value, valueUnitType,
      {
        [UnitType.Milliampere]: 0.001
      })
  }
}

module.exports = Amperage
