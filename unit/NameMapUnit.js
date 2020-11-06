'use strict'

const UnitType = require('./UnitType')

/**
 * @classdesc
 * Defines unit type values for common unit conversions.
 *
 * @description
 * Maps common synonyms for UnitType values to the canonical UnitType.
 * Includes resolveSynonym, setMeasureAs, and getMeasureAs utility functions.
 * <i>(Note for the properties lists, the underscore was synthetically added, don't actually include )</i>
 *
 * @alias NameMapUnit
 * @class
 *     @property {UnitType.Count}  ea
 *     @property {UnitType.Count}  each
 *     @property {UnitType.Count}  count
 *     @property {UnitType.Count}  level
 *     @property {UnitType.Count}  %
 *     @property {UnitType.Count}  percent
 *     @property {UnitType.Count}  percentage
 *     @property {UnitType.Count}  pct
 *     @property {UnitType.Lux}  lux
 *     @property {UnitType.Ampere}  a
 *     @property {UnitType.Ampere}  ampere
 *     @property {UnitType.Ampere}  amp
 *     @property {UnitType.Ampere}  amps
 *     @property {UnitType.Milliampere}  ma
 *     @property {UnitType.Milliampere}  milliampere
 *     @property {UnitType.Milliampere}  milliamp
 *     @property {UnitType.Milliampere}  milliamps
 *     @property {UnitType.Volt}  v
 *     @property {UnitType.Volt}  volt
 *     @property {UnitType.Volt}  volts
 *     @property {UnitType.Watt}  w
 *     @property {UnitType.Milliwatt}  mw
 *     @property {UnitType.Kilowatt}  kw
 *     @property {UnitType.Horsepower}  hp
 *     @property {UnitType.Degree}  angular_degrees
 *     @property {UnitType.Degree}  deg
 *     @property {UnitType.Degree}  degree
 *     @property {UnitType.Degree}  degrees
 *     @property {UnitType.Radian}  rad
 *     @property {UnitType.Radian}  radian
 *     @property {UnitType.Radian}  radians
 *     @property {UnitType.Microsecond}  microsecond
 *     @property {UnitType.Microsecond}  us
 *     @property {UnitType.Millisecond}  millisecond
 *     @property {UnitType.Millisecond}  ms
 *     @property {UnitType.Second}  sec
 *     @property {UnitType.Second}  second
 *     @property {UnitType.Second}  seconds
 *     @property {UnitType.Minute}  min
 *     @property {UnitType.Minute}  minute
 *     @property {UnitType.Minute}  minutes
 *     @property {UnitType.Hour}  hr
 *     @property {UnitType.Hour}  hour
 *     @property {UnitType.Hour}  hours
 *     @property {UnitType.Day}  dy
 *     @property {UnitType.Day}  day
 *     @property {UnitType.Day}  days
 *     @property {UnitType.Year}  yr
 *     @property {UnitType.Year}  year
 *     @property {UnitType.Year}  years
 *     @property {UnitType.Celsius}  c
 *     @property {UnitType.Celsius}  degrees_celsius
 *     @property {UnitType.Celsius}  celsius
 *     @property {UnitType.Celsius}  centigrade
 *     @property {UnitType.Fahrenheit}  f
 *     @property {UnitType.Fahrenheit}  degrees_fahrenheit
 *     @property {UnitType.Fahrenheit}  fahrenheit
 *     @property {UnitType.Kelvin}  klv
 *     @property {UnitType.Micrometer}  micrometer
 *     @property {UnitType.Micrometer}  micrometers
 *     @property {UnitType.Micrometer}  um
 *     @property {UnitType.Millimeter}  millimeter
 *     @property {UnitType.Millimeter}  millimeters
 *     @property {UnitType.Millimeter}  mm
 *     @property {UnitType.Centimeter}  centimeter
 *     @property {UnitType.Centimeter}  centimeters
 *     @property {UnitType.Centimeter}  cm
 *     @property {UnitType.Decimeter}  decimeter
 *     @property {UnitType.Decimeter}  decimeters
 *     @property {UnitType.Decimeter}  dm
 *     @property {UnitType.Meter}  meter
 *     @property {UnitType.Meter}  meters
 *     @property {UnitType.Meter}  m
 *     @property {UnitType.Hectometer}  hectometer
 *     @property {UnitType.Hectometer}  hectometers
 *     @property {UnitType.Hectometer}  hm
 *     @property {UnitType.Kilometer}  kilometer
 *     @property {UnitType.Kilometer}  kilometers
 *     @property {UnitType.Kilometer}  km
 *     @property {UnitType.OneHundredKm}  100km
 *     @property {UnitType.OneHundredKm}  one_hundred_kilometers
 *     @property {UnitType.Microliter}  microliter
 *     @property {UnitType.Microliter}  microliters
 *     @property {UnitType.Microliter}  ul
 *     @property {UnitType.Milliliter}  milliliter
 *     @property {UnitType.Milliliter}  milliliters
 *     @property {UnitType.Milliliter}  ml
 *     @property {UnitType.Centiliter}  centiliter
 *     @property {UnitType.Centiliter}  centiliters
 *     @property {UnitType.Centiliter}  cl
 *     @property {UnitType.Centiliter}  cubic_centimeter
 *     @property {UnitType.Centiliter}  cc
 *     @property {UnitType.Deciliter}  deciliter
 *     @property {UnitType.Deciliter}  deciliters
 *     @property {UnitType.Deciliter}  dl
 *     @property {UnitType.Liter}  liter
 *     @property {UnitType.Liter}  liters
 *     @property {UnitType.Liter}  l
 *     @property {UnitType.Inch}  inch
 *     @property {UnitType.Inch}  inches
 *     @property {UnitType.Inch}  in
 *     @property {UnitType.Foot}  foot
 *     @property {UnitType.Foot}  feet
 *     @property {UnitType.Foot}  ft
 *     @property {UnitType.Yard}  yard
 *     @property {UnitType.Yard}  yards
 *     @property {UnitType.Yard}  yd
 *     @property {UnitType.Mile}  mile
 *     @property {UnitType.Mile}  miles
 *     @property {UnitType.Mile}  mi
 *     @property {UnitType.Ounce}  ounce
 *     @property {UnitType.Ounce}  ounces
 *     @property {UnitType.Ounce}  oz
 *     @property {UnitType.Pint}  pint
 *     @property {UnitType.Pint}  pints
 *     @property {UnitType.Pint}  pt
 *     @property {UnitType.Quart}  quart
 *     @property {UnitType.Quart}  quarts
 *     @property {UnitType.Quart}  qt
 *     @property {UnitType.Gallon}  gallon
 *     @property {UnitType.Gallon}  gallons
 *     @property {UnitType.Gallon}  gal
 *     @property {UnitType.Kilopascal}  kilopascal
 *     @property {UnitType.Kilopascal}  kpa
 *     @property {UnitType.Megapascal}  megapascal
 *     @property {UnitType.Megapascal}  mpa
 *     @property {UnitType.PoundsPerSqIn}  pounds_per_square_inch
 *     @property {UnitType.PoundsPerSqIn}  psi
 *     @property {UnitType.PoundsPerSqIn}  lb/in2
 *     @property {UnitType.KgPerSqCentimeter}  kg/cm2
 *     @property {UnitType.NewtonMeter}  newton_meter
 *     @property {UnitType.NewtonMeter}  nm
 *     @property {UnitType.GramForceCentimeter}  gram-force_centimeter
 *     @property {UnitType.GramForceCentimeter}  gfcm
 *     @property {UnitType.GramForceCentimeter}  gf*cm
 *     @property {UnitType.FootPound}  pound-force_foot
 *     @property {UnitType.FootPound}  lbf
 */

const NameMapUnit = {

  'count': UnitType.Count,
  'ea': UnitType.Count,
  'each': UnitType.Count,
  'level': UnitType.Count,
  '%': UnitType.Count,
  'percent': UnitType.Count,
  'percentage': UnitType.Count,
  'pct': UnitType.Count,
  'light': UnitType.Lux,
  'lux': UnitType.Lux,
  'amperage': UnitType.Ampere,
  'a': UnitType.Ampere,
  'ampere': UnitType.Ampere,
  'amp': UnitType.Ampere,
  'amps': UnitType.Ampere,
  'ma': UnitType.Milliampere,
  'milliampere': UnitType.Milliampere,
  'milliamp': UnitType.Milliampere,
  'milliamps': UnitType.Milliampere,
  'voltage': UnitType.Volt,
  'v': UnitType.Volt,
  'volt': UnitType.Volt,
  'volts': UnitType.Volt,
  'w': UnitType.Watt,
  'mw': UnitType.Milliwatt,
  'kw': UnitType.Kilowatt,
  'hp': UnitType.Horsepower,
  'angle': UnitType.Degree,
  'angular degrees': UnitType.Degree,
  'deg': UnitType.Degree,
  'degree': UnitType.Degree,
  'degrees': UnitType.Degree,
  'rad': UnitType.Radian,
  'radian': UnitType.Radian,
  'radians': UnitType.Radian,
  'time': UnitType.Second,
  'microsecond': UnitType.Microsecond,
  'us': UnitType.Microsecond,
  'millisecond': UnitType.Millisecond,
  'ms': UnitType.Millisecond,
  'sec': UnitType.Second,
  'second': UnitType.Second,
  'seconds': UnitType.Second,
  'min': UnitType.Minute,
  'minute': UnitType.Minute,
  'minutes': UnitType.Minute,
  'hr': UnitType.Hour,
  'hour': UnitType.Hour,
  'hours': UnitType.Hour,
  'dy': UnitType.Day,
  'day': UnitType.Day,
  'days': UnitType.Day,
  'mo': UnitType.Month,
  'month': UnitType.Month,
  'months': UnitType.Month,
  'yr': UnitType.Year,
  'year': UnitType.Year,
  'years': UnitType.Year,
  'temperature': UnitType.Celsius,
  'c': UnitType.Celsius,
  'degrees celsius': UnitType.Celsius,
  'celsius': UnitType.Celsius,
  'centigrade': UnitType.Celsius,
  'f': UnitType.Fahrenheit,
  'degrees fahrenheit': UnitType.Fahrenheit,
  'fahrenheit': UnitType.Fahrenheit,
  'klv': UnitType.Kelvin,
  'length': UnitType.Meter,
  'micrometer': UnitType.Micrometer,
  'micrometers': UnitType.Micrometer,
  'um': UnitType.Micrometer,
  'millimeter': UnitType.Millimeter,
  'millimeters': UnitType.Millimeter,
  'mm': UnitType.Millimeter,
  'centimeter': UnitType.Centimeter,
  'centimeters': UnitType.Centimeter,
  'cm': UnitType.Centimeter,
  'decimeter': UnitType.Decimeter,
  'decimeters': UnitType.Decimeter,
  'dm': UnitType.Decimeter,
  'meter': UnitType.Meter,
  'meters': UnitType.Meter,
  'm': UnitType.Meter,
  'hectometer': UnitType.Hectometer,
  'hectometers': UnitType.Hectometer,
  'hm': UnitType.Hectometer,
  'distance': UnitType.Kilometer,
  'kilometer': UnitType.Kilometer,
  'kilometers': UnitType.Kilometer,
  'km': UnitType.Kilometer,
  '100km': UnitType.OneHundredKm,
  'one hundred kilometers': UnitType.OneHundredKm,
  'volume': UnitType.Liter,
  'microliter': UnitType.Microliter,
  'microliters': UnitType.Microliter,
  'ul': UnitType.Microliter,
  'milliliter': UnitType.Milliliter,
  'milliliters': UnitType.Milliliter,
  'ml': UnitType.Milliliter,
  'centiliter': UnitType.Centiliter,
  'centiliters': UnitType.Centiliter,
  'cl': UnitType.Centiliter,
  'cubic centimeter': UnitType.Centiliter,
  'cc': UnitType.Centiliter,
  'deciliter': UnitType.Deciliter,
  'deciliters': UnitType.Deciliter,
  'dl': UnitType.Deciliter,
  'liter': UnitType.Liter,
  'liters': UnitType.Liter,
  'l': UnitType.Liter,
  'inch': UnitType.Inch,
  'inches': UnitType.Inch,
  'in': UnitType.Inch,
  'foot': UnitType.Foot,
  'feet': UnitType.Foot,
  'ft': UnitType.Foot,
  'yard': UnitType.Yard,
  'yards': UnitType.Yard,
  'yd': UnitType.Yard,
  'mile': UnitType.Mile,
  'miles': UnitType.Mile,
  'mi': UnitType.Mile,
  'ounce': UnitType.Ounce,
  'ounces': UnitType.Ounce,
  'oz': UnitType.Ounce,
  'pint': UnitType.Pint,
  'pints': UnitType.Pint,
  'pt': UnitType.Pint,
  'quart': UnitType.Quart,
  'quarts': UnitType.Quart,
  'qt': UnitType.Quart,
  'gallon': UnitType.Gallon,
  'gallons': UnitType.Gallon,
  'gal': UnitType.Gallon,
  'pressure': UnitType.Kilopascal,
  'kilopascal': UnitType.Kilopascal,
  'kpa': UnitType.Kilopascal,
  'megapascal': UnitType.Megapascal,
  'mpa': UnitType.Megapascal,
  'pounds per square inch': UnitType.PoundsPerSqIn,
  'psi': UnitType.PoundsPerSqIn,
  'lb/in2': UnitType.PoundsPerSqIn,
  'kg/cm2': UnitType.KgPerSqCentimeter,
  'newton meter': UnitType.NewtonMeter,
  'torque': UnitType.NewtonMeter,
  'nm': UnitType.NewtonMeter,
  'gram-force centimeter': UnitType.GramForceCentimeter,
  'gfcm': UnitType.GramForceCentimeter,
  'gf*cm': UnitType.GramForceCentimeter,
  'pound-force foot': UnitType.FootPound,
  'lbf': UnitType.FootPound,

  /**
   * @description
   * Finds the canonical UnitType measure for one of the mapped synonyms
   *
   * @param  {string}  unitIn - Unit string to match to a canonical UnitType
   * @returns {string}        Equivalent UnitType, or undefined
   */
  resolveSynonym: function (unitIn) {
    return unitIn && NameMapUnit[unitIn.toLowerCase()]
  },

  /**
   * @description
   * Sets the provided Measure value with a new value expressed in a value that may be a synonym
   *
   * @param measure   {Measure} The Measure object to set
   * @param value     {number} The value to set
   * @param unitIn    {string} The unit to match to a canonical UnitType and set value as
   */
  setMeasureAs: function (measure, value, unitIn) {
    measure.setValueAs(value, NameMapUnit.resolveSynonym(unitIn))
  },

  /**
   * @description
   * Returns the value of the provided Measure in units expressed by the resolved synonym
   *
   * @param measure   {Measure} The Measure object to set
   * @param unitIn    {string} The unit to match to a canonical UnitType for value
   * @returns {number}  The value of this measure in resolved UnitType
   */
  getMeasureAs: function (measure, unitIn) {
    return measure.getValueAs(NameMapUnit.resolveSynonym(unitIn))
  }
}

module.exports = NameMapUnit
