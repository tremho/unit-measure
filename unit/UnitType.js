'use strict'

/**
 * Utility class that verifies and validates data types.
 *
 * Maps common synonyms for UnitType values to the canonical UnitType.
 * Includes resolveSynonym, setMeasureAs, and getMeasureAs utility functions.
 * Note:<i>for the properties lists, the underscore was synthetically added, don't actually include</i>
 *
 * @alias UnitType
 * @class
 * @static
 *
 * @property {string}  Count - count of physical entities
 * @property {string}  Percentage - percentage as value between 0-100
 * @property {string}  Lux - measure of light intensity
 * @property {string}  Ampere - measure of electric current
 * @property {string}  Milliampere - measure of small electric current
 * @property {string}  Volt - measure of electric voltage
 * @property {string}  Millivolt - measure of small electric voltage
 * @property {string}  KiloVolt - measure of large electric voltage
 * @property {string}  Degree - measure angular distance
 * @property {string}  Radian - measure angular distance based from pi
 * @property {string}  Microsecond - measure of very short amount of elapsed time
 * @property {string}  Millisecond - measure of short amount of elapsed time
 * @property {string}  Second - measure of an amount of elapsed time
 * @property {string}  Minute - measure of an amount of elapsed time equal to 60 seconds
 * @property {string}  Hour - measure of an amount of elapsed time equal to 60 minutes
 * @property {string}  Day - measure of an amount of elapsed time equal to 24 hours
 * @property {string}  Year - measure of an amount of elapsed time - about equal to 365 days
 *
 * @property {string}  Celsius - measure of temperature in the metric system
 * @property {string}  Fahrenheit - measure of temperature in the English system
 * @property {string}  Kelvin - measure of temperature in terms from "absolute zero" in the metric system
 * @property {string}  Micrometer - measure of distance using the metric system
 * @property {string}  Millimeter - measure of distance using the metric system
 * @property {string}  Centimeter - measure of distance using the metric system
 * @property {string}  Meter - measure of distance using the metric system
 * @property {string}  Hectometer - measure of distance using the metric system
 * @property {string}  Kilometer - measure of distance using the metric system
 * @property {string}  OneHundredKm - measure of distance (100 km) using the metric system
 *
 * @property {string}  Inch - measure of distance using the English system
 * @property {string}  Foot - measure of distance using the English system
 * @property {string}  Yard -measure of distance using the English system
 * @property {string}  Mile - measure of distance using the English system
 *
 * @property {string}  Kilopascal - measure of pressure using the metric system
 * @property {string}  Megapascal - measure of pressure using the metric system
 * @property {string}  PoundsPerSqIn - measure of pressure using the English system
 * @property {string}  KgPerSqCentimeter - measure of pressure using the metric system
 *
 * @property {string}  NewtonMeter - measure of torque using the metric system
 * @property {string}  GramForceCentimeter - measure of torque using the metric system
 * @property {string}  FootPound - measure of torque using the English system
 *
 * @property {string}  Microliter - measure of volume using the metric system
 * @property {string}  Milliliter - measure of volume using the metric system
 * @property {string}  Centiliter - measure of volume using the metric system
 * @property {string}  Deciliter - measure of volume using the metric system
 * @property {string}  Liter - measure of volume using the metric system
 * @property {string}  Ounce - measure of volume using the English system
 * @property {string}  Pint - measure of volume using the English system
 * @property {string}  Quart - measure of volume using the English system
 * @property {string}  Gallon - measure of volume using the English system
 *
 *
 * @property {string}  Watt - measure of electrical power using the metric system
 * @property {string}  Milliwatt - measure of electrical power using the metric system
 * @property {string}  Kilowatt - measure of electrical power using the metric system
 * @property {string}  Horsepower - measure of electrical power using the English system
 *
 */

const UnitType = {
  /* Basic enumeration or levels */
  Count: 'ea',

  /* Percentage value */
  Percentage: '%',

  /* Light level types */
  Lux: 'lux',

  /* Electric current */
  Ampere: 'a',
  Milliampere: 'ma',

  /* Electric voltage */
  Volt: 'v',
  Millivolt: 'mv',
  Kilovolt: 'Kv',

  /* Angle */
  Degree: 'deg',
  Radian: 'rad',

  /* Time */
  Microsecond: 'us',
  Millisecond: 'ms',
  Second: 'sec',
  Minute: 'min',
  Hour: 'hr',
  Day: 'dy',
  Month: 'mo',
  Year: 'yr',

  /* Temperature */
  Celsius: 'C',
  Fahrenheit: 'F',
  Kelvin: 'klv',

  /* Length and Distance */
  Micrometer: 'um',
  Millimeter: 'mm',
  Centimeter: 'cm',
  Decimeter: 'dm',
  Meter: 'm',
  Hectometer: 'Hm',
  Kilometer: 'Km',
  OneHundredKm: '100Km',
  Inch: 'in',
  Foot: 'ft',
  Yard: 'yd',
  Mile: 'mi',

  /* Pressure */
  Kilopascal: 'Kpa',
  Megapascal: 'Mpa',
  PoundsPerSqIn: 'psi',
  KgPerSqCentimeter: 'kg/cm2',

  /* Torque */
  NewtonMeter: 'Nm',
  GramForceCentimeter: 'gfcm',
  FootPound: 'lbf',

  /* Volume Measure */
  Microliter: 'ul',
  Milliliter: 'ml',
  Centiliter: 'cl',
  Deciliter: 'dl',
  Liter: 'l',
  Ounce: 'oz',
  Pint: 'pt',
  Quart: 'qt',
  Gallon: 'gal',

  /* Power */
  Watt: 'W',
  Milliwatt: 'mW',
  Kilowatt: 'KW',
  Horsepower: 'hp'
}

module.exports = UnitType
