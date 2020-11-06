'use strict'

const Ratio = require('./Ratio')
const Speed = require('./Speed')
const UnitType = require('./UnitType')

/**
 * Defines acceleration as speed over time.
 * Default acceleration units are in m/sec2
 */
class Acceleration extends Ratio {
  /**
   * Constructs an Acceleration Ratio object
   * Default acceleration units are in m/sec<sup>2</sup>
   *
   * @param {string} [distType] - distance type, default 'm'
   * @param {string} [timeType] - duration of time, default 'sec'
   * @param {number} [distValue]  -   value for distance, default 0
   * @param {number} [timeValue]  -   value for time, default 1
   */
  constructor (distType = 'm', timeType = 'sec', distValue = 0, timeValue = 1) {
    super(new Speed(distType, timeType), timeType)
    this.setRatioValues(distValue, distType, timeValue, timeType)
    this.measureType = 'acceleration'
  }

  /**
   * Returns this Acceleration value in meters per second per second (m/sec<sup>2</sup>)
   * @returns {number}
   */
  getMetersPerSecondSquared () {
    return this.getValueAs(UnitType.Meter, UnitType.Second)
  }
  /**
   * Sets this Acceleration value in meters per second per second (m/s<sup>2</sup>)
   *
   * @param {number} mps2 - acceleration (m/s<sup>2</sup>)
   */
  setMetersPerSecondSquared (mps2) {
    this.setValueAs(mps2, UnitType.Meter, UnitType.Second)
  }

  /**
   * Returns this Acceleration value in feet per second per second (ft/s<sup>2</sup>)
   * @returns {number}
   */
  getFeetPerSecondSquared () {
    return this.getValueAs(UnitType.Foot, UnitType.Second)
  }

  /**
   * Sets this Acceleration value in feet per second per second (ft/s<sup>2</sup>)
   *
   * @param {number} fps2 - acceleration (ft/s<sup>2</sup>)
   */
  setFeetPerSecondSquared (fps2) {
    this.setValueAs(fps2, UnitType.Foot, UnitType.Second)
  }

  /**
   * Sets this Acceleration value expressed as a specific distance and time unit ratio.
   *
   * @param value
   * @param distType
   * @param timeType
   * @overrides
   */
  setValueAs (value, distType, timeType) {
    this._measure1.setValueAs(value, distType)
    this._measure2.setValueAs(1, timeType)
  }

  /**
   * Sets this Acceleration value expressed as separate distance and time values as a fraction.
   *
   * @param {number} distValue
   * @param distType
   * @param {number} timeValue
   * @param timeType
   * @overrides
   */
  setRatioValues (distValue, distType, timeValue, timeType) {
    this._measure1.setValueAs(distValue, distType)
    this._measure2.setValueAs(timeValue, timeType)
  }
}

module.exports = Acceleration
