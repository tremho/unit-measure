'use strict'

const Ratio = require('./Ratio')
const UnitType = require('./UnitType')

/**
 * Defines speed as a ratio of distance moved per unit of time.
 */
class Speed extends Ratio {
  /**
   * Constructs a Ratio for distance / time
   * @param {string} [distType]      The unit type for distance (default 'km')
   * @param {string} [timeType]      The unit type for time (default 'hr')
   * @param {number} [distValue=0]   The value for distance or speed (default 0)
   * @param {number} [timeValue=1]   The value for time (default 1)
   */
  constructor (distType = 'km', timeType = 'hr', distValue = 0, timeValue = 1) {
    super(distType, timeType)
    this.setRatioValues(distValue, distType, timeValue, timeType)
    this.measureType = 'speed'
  }

  /**
   * Returns this Speed value in kilometers per hour
   * @returns {number}
   */
  getKilometersPerHour () {
    return this.getValueAs(UnitType.Kilometer, UnitType.Hour)
  }
  /**
   * Sets this Speed value in Kilometers per hour
   * @param {number} kph
   */
  setKilometersPerHour (kph) {
    this.setValueAs(kph, UnitType.Kilometer, UnitType.Hour)
  }
  /**
   * Returns this Speed value in miles per hour
   * @returns {number}
   */
  getMilesPerHour () {
    return this.getValueAs(UnitType.Mile, UnitType.Hour)
  }
  /**
   * Sets this Speed value in Miles per hour
   * @param {number} mph
   */
  setMilesPerHour (mph) {
    this.setValueAs(mph, UnitType.Mile, UnitType.Hour)
  }
}

module.exports = Speed
