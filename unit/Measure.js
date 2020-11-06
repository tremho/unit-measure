'use strict'

const NameMapUnit = require('./NameMapUnit')

/**
 * Utilities for measurement conversion.
 * Measurement utilities for converting measurements.
 */
class Measure {
  /**
   * Creates the measure instance.
   *
   * @param {string} type              Defines the class of measure (e.g. "distance")
   * @param {string} baseUnitType      The known UnitType that forms the base unit of measurement
   * @param {number} value             The initial value to set
   * @param {string} [valueUnitType]   The UnitType of the initial value (if different than base unit)
   * @param {object} [conversions]     Conversion table passed by derived type constructors
   */
  constructor (type, baseUnitType, value, valueUnitType, conversions) {
    this.measureType = type
    this.unitTable = {}
    this.baseUnit = baseUnitType
    this.addUnit(baseUnitType, function (to, from) {
      // identity return
      if (to === undefined) {
        return from
      }
      return to
    })
    if (conversions) {
      this.addConversions(conversions)
    } else {
      valueUnitType = null
    }
    this.setValueAs(value || 0, valueUnitType || baseUnitType)
  }

  /**
   * Returns the current value of the measure in unit terms.
   *
   * @param {string}  unitName   Name of unit to return value in.
   *
   * @return  {Number}    The measure value in the chosen units.
   */
  getValueAs (unitName) {
    const conversion = this.getConversion(unitName)
    if (conversion && typeof conversion === 'function') {
      return conversion(this._stdVal)
    }
    // Retry with NameUnitMap translation in case we passed in an acceptable synonym for our identifier
    let syn = NameMapUnit.resolveSynonym(unitName)
    if (syn && syn !== unitName) return this.getValueAs(syn)
    throw new TypeError('Unit Name ' + unitName + ' not defined for ' + this.measureType + '; unable to get value.')
  }

  /**
   * Sets the value of this measure in unit terms
   *
   * @param {Number} unitVal         Value in unit terms to which to set the measure value.
   * @param {string} unitName        Name of unit in which to return value. This must always be provided.
   */
  setValueAs (unitVal, unitName) {
    if (typeof unitName !== 'string') {
      throw TypeError('setValueAs parameters are number, string ( not ' + unitVal + ', ' + unitName + ')')
    }
    const conversion = this.getConversion(unitName)
    if (conversion && typeof conversion === 'function') {
      this._stdVal = conversion(undefined, unitVal)
    } else {
      // Retry with NameUnitMap translation in case we passed in an acceptable synonym for our identifier
      let syn = NameMapUnit.resolveSynonym(unitName)
      if (syn && syn !== unitName) return this.setValueAs(unitVal, syn)
      throw new TypeError('Unit Name "' + unitName + '" not defined for "' + this.measureType + '"; unable to set value.')
    }
    return this
  }

  /**
   * Returns the base unit UnitType.
   * @returns {Number|*|module.baseUnit}
   */
  getBaseUnit () {
    return this.baseUnit
  }

  /**
   * @description
   * Adds a name describing a unit and the conversion from standard measure for this unit.
   *
   * The name should come from the UnitType declared values.
   *
   * The conversion function is a supplied function that takes two parameters (to, from), but only one at a time.
   * The first parameter ("to") will be undefined if the second parameter ("from") is to be used.
   * Passing a value for "to" means that the given value in base units should be converted to the named unit.
   * Passing a value for "from" means that the given value in named units should be converted to base units.
   *
   * The supplied function should perform the to/from conversions as appropriate for the type and return the result.
   *
   * @param {string} fmtToken         Abbreviation/token used to specify this unit type in unit: format specifier
   * @param {function} conversion     Conversion function.
   */
  addUnit (fmtToken, conversion) {
    this.unitTable[fmtToken] = conversion
  }

  /**
   * Gets the conversion value for a given unit name
   *
   * @param {string} unitType         The name of the unit.
   *
   * @return The conversion value if found, undefined if not found.
   */
  getConversion (unitType) {
    return this.unitTable[unitType]
  }

  /**
   * Removes the unit defined by the given name.
   *
   * @param {string} unitType         The name of the unit.
   */
  removeUnit (unitType) {
    delete this.unitTable[unitType]
  }

  /**
   * Removes all unit definitions.
   */
  clearUnits () {
    this.unitTable = {}
  }

  /**
   * Returns the array of unitType names.
   */
  getUnits () {
    return Object.getOwnPropertyNames(this.unitTable)
  }

  /**
   * For use with conversion functions.
   * Uses the "to", "from" calling parameters for conversion function
   * and supplies a factor used to scale from base unit to named unit.
   * @param to
   * @param from
   * @param factor
   * @returns {number}
   */
  convertFactor (to, from, factor) {
    let v
    if (to === undefined) {
      v = from
    } else {
      factor = 1 / factor
      v = to
    }
    return v * factor
  }

  addConversions (conversions) {
    Object.getOwnPropertyNames(conversions).forEach(key => {
      this.addUnit(key, (to, from) => this.convertFactor(to, from, conversions[key]))
    })
  }
}

module.exports = Measure
