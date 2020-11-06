'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Measure of torque using NewtonMeter as a base unit.
 *
 * @description
 * Torque measure.
 * @alias Torque
 * @extends Measure
 */
class Torque extends Measure {
  /**
   * Defines measure for Torque. {@link UnitType} NewtonMeter is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('torque', UnitType.NewtonMeter, value, valueUnitType,
      {
        [UnitType.GramForceCentimeter]: 10197.162129779,
        [UnitType.FootPound]: 0.737562149
      })
  }
}

module.exports = Torque
