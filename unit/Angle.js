'use strict'

const Measure = require('./Measure')
const UnitType = require('./UnitType')

/**
 * @classdesc
 * Measure of distance, in degrees, between intersecting lines.
 *
 * @description
 * Angular measure.
 * In planar geometry, an angle is the figure formed by two rays, called the sides of the angle, sharing a common endpoint, called the vertex of the angle.
 * Angles formed by two rays lie in a plane, but this plane does not have to be a Euclidean plane.
 * Angles are also formed by the intersection of two planes in Euclidean and other spaces.
 * These are called dihedral angles. Angles formed by the intersection of two curves in a plane are defined as the angle determined by the tangent rays at the point of intersection.
 * @alias Angle
 * @extends Measure
 */
class Angle extends Measure {
  /**
   * Defines measure for Angles. {@link UnitType} Degree is the base unit.
   *
   * @param   {number}    [value] The value.
   * @param   {string}    [valueUnitType] The UnitType of the initializing value
   */
  constructor (value, valueUnitType) {
    super('angle', UnitType.Degree, value, valueUnitType,
      {
        [UnitType.Radian]: 57.2957795
      })
  }
}

module.exports = Angle
