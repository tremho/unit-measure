'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * A measure of light intensity, as measured by the human eye.
 *
 * @description
 * Light intensity.
 * In photometry, this is used as a measure of the intensity, as perceived by the human eye, of light that hits or passes through a surface.
 * It is analogous to the radiometric unit watts per square meter, but with the power at each wavelength weighted according to
 * the luminosity function, a standardized model of human visual brightness perception
 * @alias Light
 * @extends Measure
 */
class Light extends Measure {
  /**
   * Defines measure for light intensity. {@link UnitType} Lux is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('light', UnitType.Lux, value, valueUnitType)
  }
}

module.exports = Light
