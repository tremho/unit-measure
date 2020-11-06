'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * Measure of temperature, using celsius as the base.
 * Temperature measure.
 */
class Temperature extends Measure {
  /**
   * Defines measure for Temperature. {@link UnitType} Celsius is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('temperature', UnitType.Celsius, value)
    this.addUnit(UnitType.Fahrenheit, function (to, from) {
      if (typeof to !== 'undefined') {
        // compute C to F
        return (9 / 5) * to + 32
      } else {
        // compute F to C
        return (5 / 9) * (from - 32)
      }
    })
    this.addUnit(UnitType.Kelvin, function (to, from) {
      if (typeof to !== 'undefined') {
        // compute to C to K
        return to + 273.15
      } else {
        // compute K to C
        return from - 273.15
      }
    })

    if (valueUnitType) {
      this.setValueAs(value, valueUnitType)
    }
  }
}

module.exports = Temperature
