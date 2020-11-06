'use strict'

const Ratio = require('./Ratio')
const UnitType = require('./UnitType')

/**
 * Measure that describes fuel efficiency as a ratio of distance over volume (liquid measure) consumption.
 */
class FuelEfficiency extends Ratio {
  /**
   * Constructs a Ratio for FuelEfficiency as distance / volume
   * Default is km/l
   *
   * @param {string} [distanceType] default 'km'
   * @param {string} [volumeType] default 'l'
   * @param {number} [volumeValue] default 0
   * @param {number} [distanceValue] default 1
   */
  constructor (distanceType = 'km', volumeType = 'l', distanceValue = 0, volumeValue = 1) {
    super(distanceType, volumeType)
    this.setRatioValues(distanceValue, distanceType, volumeValue, volumeType)
    this.measureType = 'fuelefficiency'
  }

  /**
   * Returns this FuelEfficiency value in Miles Per Gallon
   * @returns {number}
   */
  getMilesPerGallon () {
    return this.getValueAs(UnitType.Mile, UnitType.Gallon)
  }

  /**
   * Sets this FuelEfficiency value in terms of Miles Per Gallon
   * @param mpg
   */
  setMilesPerGallon (mpg) {
    this.setValueAs(mpg, UnitType.Mile, UnitType.Gallon)
  }

  /**
   * Returns this FuelEfficiency value in Kilometers per Liter
   * @returns {number}
   */
  getKilometersPerLiter () {
    return this.getValueAs(UnitType.Kilometer, UnitType.Liter)
  }

  /**
   * Sets this FuelEfficiency value in terms of Kilometers Per Liter
   * @param kpl
   */
  setKilometersPerLiter (kpl) {
    this.setValueAs(kpl, UnitType.Kilometer, UnitType.Liter)
  }

  /**
   * Gets liters consumed per kilometer
   * @returns {number}
   */
  getLitersPerKm () {
    return 1 / this.getKilometersPerLiter()
  }

  /**
   * Sets liters per kilometer
   * @param l
   */
  setLitersPerKm (l) {
    this.setKilometersPerLiter(1 / l)
  }

  /**
   * Returns this FuelEfficiency value in Liters per 100 Kilometers
   * @returns {number}
   */
  getLitersPer100Km () {
    return this.getLitersPerKm() * 100
  }
  /**
   * Sets this FuelEfficiency value in terms of Liters Per 100 Kilometers
   * @param lphkm
   */
  setLitersPer100Km (lphkm) {
    this.setLitersPerKm(lphkm / 100)
  }
  /**
   * Returns this FuelEfficiency value in Milliliters per 100 Kilometers
   * @returns {number}
   */
  getMillilitersPer100Km () {
    return this.getLitersPer100Km() * 1000
  }
  /**
   * Sets this FuelEfficiency value in terms of Milliliters per 100 Kilometers
   * @param mlphkm
   */
  setMillilitersPer100Km (mlphkm) {
    this.setLitersPer100Km(mlphkm / 1000)
  }
}

module.exports = FuelEfficiency
