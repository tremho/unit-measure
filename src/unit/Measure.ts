import NameMapUnit from '../NameMapUnit'


/**
 * @typedef Converter
 * A function used to convert to/from the base unit to another unit measure.
 *
 * The function is assumed to be associated to a Measure class context that defines a base unit type
 * and defines the conversion to a different unit of measure.
 * The function takes two arguments, although which ones are defined determine the direction
 * of the conversion.
 *
 * @property {number|undefined} to  if defined, the incoming value in base unit terms to be converted to a value of the associated conversion unit
 * @property {number|undefined} from if defined, a value in named unit terms that should be translated into a base unit value.
 */
export type Converter = (to: number|undefined, from?:number) => number

/**
 * @interface Conversion
 * A tuple (typescript typed) defining an array of two members
 * the first is a string defining the unit type to convert to and the second is a number defining the
 * factor to multiply the base value by to achieve this conversion, or else a Converter function to be
 * called.
 *
 * ##### Properties
 * | name | type | description |
 * | ---- | ---- | ----------- |
 * | `unitType` | string | name or abbreviation of unit type this conversion applies to (from `UnitType`)
 * | `conversion` | number|{@link Converter} | value to multiply to base value to convert to this unit, or a Converter
 * function to be called upon to perform the conversion.
 */
export type Conversion = [string, number|Converter]

export default class Measure {
    public measureType:string
    public unitTable:Map<string, Converter>
    public baseUnit:string
    public valueUnit:string
    private _stdVal:number

    /**
     * Base class of the unit-measure types.
     *
     * Methods include facilities for measurement conversion.
     *
     * ##### Properties
     * | name | type | description |
     * | ---- |---- | ----------- |
     * | `measureType` | string | name of this measure type
     * | `unitTable` | Map<string, {@link Converter}> | key/value map of units to conversions factors
     * | `baseUnit`  | string | name or abbreviation of unit type this conversion applies to
     *
     * ### Constructor
     *
     * @param {string} type              Defines the class of measure (e.g. "distance")
     * @param {string} baseUnitType      The known UnitType that forms the base unit of measurement
     * @param {number} value             The initial value to set
     * @param {string} [valueUnitType]   The UnitType of the initial value (if different than base unit)
     * @param {object} [conversions]     Conversion table passed by derived type constructors
     *
     */
    constructor (type:string, baseUnitType:string, value:number, valueUnitType?:string, conversions?:Conversion[]) {
        this.measureType = type
        this.unitTable = new Map<string, Converter>()
        this.baseUnit = baseUnitType
        this.addUnit(baseUnitType, (to, from) => {
            // simple identity return.
            return (to === undefined) ? from as number : to as number
        })
        if (conversions) {
            this.addConversions(conversions)
        } else {
            valueUnitType = ''
        }
        this.setValueAs(valueUnitType || baseUnitType, value || 0)
    }

    /**
     * Returns the current value of the measure in unit terms.
     *
     * @param {string}  unitName   Name of unit to return value in.
     * @return  {Number}    The measure value in the chosen units.
     */
    getValueAs (unitName:string):number {
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
     * Shorthand synonym for `getValueAs`
     *
     * @param {string}  unitName   Name of unit to return value in.
     * @return  {Number}    The measure value in the chosen units.
     */
    as(unitName:string):number {
        return this.getValueAs(unitName)
    }

    /**
     * Returns the value in terms of the current value unit.
     */
    getValue() {
        return this.getValueAs(this.getValueUnit())
    }

    /**
     * Sets the value of this measure in unit terms
     *
     * @param {string} unitName        Name of unit in which to return value. This must always be provided.
     * @param {Number} unitVal         Value in unit terms to which to set the measure value.
     */
    setValueAs (unitName:string, unitVal:number) {
        const conversion = this.getConversion(unitName)
        if (conversion && typeof conversion === 'function') {
            this._stdVal = conversion(undefined, unitVal)
        } else {
            // Retry with NameUnitMap translation in case we passed in an acceptable synonym for our identifier
            let syn = NameMapUnit.resolveSynonym(unitName)
            if (syn && syn !== unitName) return this.setValueAs(syn, unitVal)
            throw new TypeError('Unit Name "' + unitName + '" not defined for "' + this.measureType + '"; unable to set value.')
        }
        this.valueUnit = unitName
        return this
    }

    /**
     * Returns the base unit UnitType.
     * @returns {string} base unit token string defined for this Measure
     */
    getBaseUnit ():string {
        return this.baseUnit
    }

    /**
     * Returns the UnitType the current value was last set with
     */
    getValueUnit ():string {
        return this.valueUnit
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
     * Use this to supply new units with Converter functions.
     * Use {@link addConversions} to supply new units with scale factors
     *
     * @param {string} unitType         Abbreviation/token used to specify this unit type
     * @param {@link Converter} converter     Converter function
     */
    addUnit (unitType:string, converter:Converter) {
        this.unitTable.set(unitType, converter)
    }

    /**
     * Gets the conversion value for a given unit name
     *
     * @param {string} unitType         The name of the unit.
     *
     * @return {{@link Converter}|undefined} The conversion value if found, undefined if not found.
     */
    getConversion (unitType:string):Converter|undefined {
        return this.unitTable.get(unitType)
    }

    /**
     * Removes the unit defined by the given name.
     *
     * @param {string} unitType         The name of the unit.
     */
    removeUnit (unitType:string) {
        this.unitTable.delete(unitType)
    }

    /**
     * Removes all unit definitions.
     */
    clearUnits () {
        this.unitTable = new Map<string, Converter>()
    }

    /**
     * Returns the array of unitType names this Measure type supports conversion for
     */
    getUnits ():string[] {
        return Array.from(this.unitTable.keys())
    }

    /**
     * For use with conversion functions.
     * Uses the "to", "from" calling parameters for conversion function
     * and supplies a factor used to scale from base unit to named unit.
     * @private
     * @param to
     * @param from
     * @param factor
     * @returns {number}
     */
    private static convertFactor (to:number|undefined, from:number|undefined, factor:number) {
        let v
        if (to === undefined) {
            v = from
        } else {
            factor = 1 / factor
            v = to
        }
        return v * factor
    }

    /**
     * Adds the table of conversions to unit table
     * Table can contain scale factors or Converter functions
     *
     * @param conversions
     */
    addConversions (conversions:Conversion[] = []) {
        conversions.forEach(conv => {
            let [unitType, factor] = conv
            let converter:Converter
            if(typeof factor === 'number') {
                converter = (to, from) => {
                    return Measure.convertFactor(to, from, factor as number)
                }
            } else {
                converter = factor as Converter
            }
            this.addUnit(unitType, converter)
        })
    }
}

