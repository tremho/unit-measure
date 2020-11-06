'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Measure of simple counts useful for defining ratios.
 *
 * @description
 * This Measure class has no conversion.  It is useful for ratio mapping.
 * @alias Count
 * @extends Measure
 */
class Count extends Measure {
  /**
   * Defines measure for counting. {@link UnitType} Count is the base unit.
   *
   * @param   {number}    [value] numeric value representation
   */
  constructor (value) {
    super('count', UnitType.Count, value)
  }
}

module.exports = Count
