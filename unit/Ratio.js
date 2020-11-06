'use strict'

const UnitFactory = require('./UnitFactory')

/**
 * Links conversion ratios to their measures.
 * Defines a linked ratio of one measure to another.
 *
 * Measure properties include `_measure1` and `_measure2` (ratio components)
 * and `baseUnit` (declared as in 'km/sec')
 * and `measureType`, which should be defined by the derived class to match the name, else it is the same as baseUnit.
 *
 * The property `isRatio` is defined as true for Ratio objects
 */
class Ratio {
  /**
   * Constructs a Ratio base
   *
   * @param {Measure | string} measure1  A Measure instance for the numerator, or string for lookup in UnitFactory
   * @param {Measure | string} measure2  A Measure instance for the denominator, string for lookup in UnitFactory
   */
  constructor (measure1, measure2) {
    this._measure1 = typeof measure1 === 'string' ? UnitFactory.createUnitObject(measure1, 0) : measure1
    this._measure2 = typeof measure2 === 'string' ? UnitFactory.createUnitObject(measure2, 1) : measure2
    this.measureType = this._measure1.baseUnit + '/' + this._measure2.baseUnit
    this.baseUnit = this.measureType
    this.isRatio = true
  }

  /**
   * Returns the ratio in terms of the measure types given.
   *
   * For example, for a Ratio set up with a Distance and a Time measure,
   * passing {@link UnitType} Kilometer, {@link UnitType} Hour would give the speed in Kilometers per Hour
   *
   * @param {UnitType} measure1Type
   * @param {UnitType} measure2Type
   * @returns {number}
   */
  getValueAs (measure1Type, measure2Type) {
    const m = this._measure1.getValueAs(measure1Type || this._measure1.baseUnit)
    const t = this._measure2.getValueAs(measure2Type || this._measure2.baseUnit)
    return m / t
  }

  /**
   * Set the ratio values independently.
   * This allows for fractions.
   *
   * @param value1
   * @param measure1Type
   * @param value2
   * @param measure2Type
   */
  setRatioValues (value1, measure1Type, value2, measure2Type) {
    this._measure1.setValueAs(value1, measure1Type)
    this._measure2.setValueAs(value2, measure2Type)
  }

  /**
   * Set the ratio directly. This effectively sets the numerator to the value and the denominator to 1.
   *
   * @param value
   * @param measure1Type
   * @param measure2Type
   */
  setValueAs (value, measure1Type, measure2Type) {
    this.setRatioValues(value, measure1Type, 1, measure2Type || this._measure2.baseUnit)
  }
}

module.exports = Ratio
