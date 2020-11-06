'use strict'

const Angle = require('./Angle')
const Count = require('./Count')
const Distance = require('./Distance')
const Time = require('./Time')
const Volume = require('./Volume')
const Ratio = require('./Ratio')
const Acceleration = require('./Acceleration')
const Speed = require('./Speed')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Collection of common conversion ratios and definitions.
 *
 * @description
 * Lookup table for common measurements and their associated compositions
 *
 * @example
 * <caption>Ratio Properties</caption>
 *   "angular degrees per second"           : [Ratio, Angle, UnitType.Degree, Time, UnitType.Second]
 *   "degrees/second"                       : [Ratio, Angle, UnitType.Degree, Time, UnitType.Second]
 *   "deg/sec"                              : [Ratio, Angle, UnitType.Degree, Time, UnitType.Second]
 *   "meters per second squared"            : [Acceleration, UnitType.Meter, UnitType.Second]
 *   "meters per second per second"         : [Acceleration, UnitType.Meter, UnitType.Second]
 *   "m/s2"                                 : [Acceleration, UnitType.Meter, UnitType.Second]
 *   "feet per second per second"           : [Acceleration, UnitType.Foot, UnitType.Second]
 *   "feet per second squared"              : [Acceleration, UnitType.Foot, UnitType.Second]
 *   "ft/s2"                                : [Acceleration, UnitType.Foot, UnitType.Second]
 *   "revolutions per minute"               : [Ratio, Count, UnitType.Count, Time, UnitType.Minute]
 *   "rpm"                                  : [Ratio, Count, UnitType.Count, Time, UnitType.Minute]
 *   "kilometers per liter"                 : [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter]
 *   "milliters per one hundred kilometers" : [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter]
 *   "milliters per 100km"                  : [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter]
 *   "ml/100km"                             : [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter]
 *   "liters per 100km"                     : [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter]
 *   "l/100km"                              : [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter]
 *   "liters per kilometer"                 : [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter]
 *   "miles per gallon"                     : [Ratio, Distance, UnitType.Mile, Volume, UnitType.Gallon]
 *   "mpg"                                  : [Ratio, Distance, UnitType.Mile, Volume, UnitType.Gallon]
 *   "kilometers per hour"                  : [Speed, UnitType.Kilometer, UnitType.Hour]
 *   "kph"                                  : [Speed, UnitType.Kilometer, UnitType.Hour]
 *   "miles per hour"                       : [Speed, UnitType.Mile, UnitType.Hour]
 *   "mph"                                  : [Speed, UnitType.Mile, UnitType.Hour]
 *
 * @alias NameMapRatio
 * @class
 */
const NameMapRatio = {
  'angular degrees per second': [Ratio, Angle, UnitType.Degree, Time, UnitType.Second],
  'degrees/second': [Ratio, Angle, UnitType.Degree, Time, UnitType.Second],
  'deg/sec': [Ratio, Angle, UnitType.Degree, Time, UnitType.Second],
  'meters per second squared': [Acceleration, UnitType.Meter, UnitType.Second],
  'meters per second per second': [Acceleration, UnitType.Meter, UnitType.Second],
  'm/s2': [Acceleration, UnitType.Meter, UnitType.Second],
  'feet per second per second': [Acceleration, UnitType.Foot, UnitType.Second],
  'feet per second squared': [Acceleration, UnitType.Foot, UnitType.Second],
  'ft/s2': [Acceleration, UnitType.Foot, UnitType.Second],
  'revolutions per minute': [Ratio, Count, UnitType.Count, Time, UnitType.Minute],
  'rpm': [Ratio, Count, UnitType.Count, Time, UnitType.Minute],
  'kilometers per liter': [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter],
  'milliters per one hundred kilometers': [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter],
  'milliters per 100km': [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter],
  'ml/100km': [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter],
  'liters per 100km': [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter],
  'l/100km': [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter],
  'liters per kilometer': [Ratio, Distance, UnitType.Kilometer, Volume, UnitType.Liter],
  'miles per gallon': [Ratio, Distance, UnitType.Mile, Volume, UnitType.Gallon],
  'mpg': [Ratio, Distance, UnitType.Mile, Volume, UnitType.Gallon],
  'kilometers per hour': [Speed, UnitType.Kilometer, UnitType.Hour],
  'kph': [Speed, UnitType.Kilometer, UnitType.Hour],
  'miles per hour': [Speed, UnitType.Mile, UnitType.Hour],
  'mph': [Speed, UnitType.Mile, UnitType.Hour],

  /**
   * Creates an appropriate compound Measure Ratio object for the given name and values
   *
   * @param {string} ratioName     Name of the ratio to match to
   * @param {number} value1        Value of the ratio, or the value of the numerator
   * @param {number} [value2=1]    Value of the denominator or undefined - to avoid a dangerous division by zero
   * @memberof ./NameMapRatio#
   * @function makeFrom
   *
   * @returns {Acceleration}
   */
  makeFrom: function (ratioName, value1, value2) {
    const n = NameMapRatio[ratioName.toLowerCase()]
    if (n) {
      if (value2 === undefined) {
        value2 = 1
      }
      switch (n[0]) {
        case 'Ratio':
          return new Ratio(new n[1](value1, n[2]), new n[3](value2, n[4]))
        case 'Acceleration':
          return new Acceleration(n[1], n[2], value1, value2)
        case 'Speed':
          return new Speed(n[1], n[2], value1, value2)
      }
    }
  },

  /**
   * Sets the passed-in compound Measure Ratio object with the given values, after mapping units
   *
   * @param {Object} ratio         Passed-in {@link Ratio}, {@link Speed}, or {@link Acceleration} object to set
   * @param {string} ratioName     Name of the ratio to match to
   * @param {number} value1        Value of the ratio, or the value of the numerator
   * @param {number} [value2=1]        Value of the denominator or undefined - to avoid a dangerous division by zero
   * @memberof ./NameMapRatio#
   * @function setRatioAs
   */
  setRatioAs: function (ratio, ratioName, value1, value2) {
    const n = NameMapRatio[ratioName.toLowerCase()]
    if (n) {
      if (value2 === undefined) {
        value2 = 1
      }
      if (n[0] === 'Ratio') {
        ratio.setRatioValues(value1, n[2], value2, n[4])
      } else {
        ratio.setRatioValues(value1, n[1], value2, n[2])
      }
    }
  },

  /**
   * Gets the value from the passed-in ratio in terms of units matched to the ratioName.
   *
   * @param {Object} ratio         Passed-in {@link Ratio}, {@link Speed}, or {@link Acceleration} object to set
   * @param {string} ratioName     Name of the ratio to match to
   * @memberof ./NameMapRatio#
   * @function getRatioAs
   *
   * @return {number}     Value of passed-in ratio in mapped terms
   */
  getRatioAs: function (ratio, ratioName) {
    const n = NameMapRatio[ratioName.toLowerCase()]
    if (n) {
      if (n[0] === 'Ratio') {
        return ratio.getValueAs(n[2], n[4])
      } else {
        return ratio.getValueAs(n[1], n[2])
      }
    }
  }
}

module.exports = NameMapRatio
