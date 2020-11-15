
import Measure from "./Measure";
import UnitFactory from "../UnitFactory";
import UnitType from "../UnitType";


// type RatioMode = [string, string] // numtype, dentype

export default class Ratio {
    protected numerator:Measure // numerator measure
    protected denominator:Measure // denominator measure
    public readonly ratioType:string // name or abbreviation of this ratio (e.g. mph)z
    public readonly measureType: string // code constructed name of this ratio type (e.g. mi/hr)

    /**
     * Defines a Ratio of two Measure units.
     * Common examples: Speed, Density, FuelEfficiency.
     * Can be used for any number of arbitrary associations
     *
     * ### Constructor
     *
     * @param ratioType
     * @param measure1
     * @param measure2
     * @param numVal
     * @param denVal
     */
    constructor (ratioType?:string, measure1:Measure|Ratio|string = 'Count', measure2: Measure|Ratio|string = 'Count', numVal?:number, denVal?:number) {
        this.ratioType = ratioType || 'ratio'
        this.numerator = (typeof measure1 === 'string') ? UnitFactory.createUnitObject(measure1, 0) : measure1
        this.denominator = typeof measure2 === 'string' ? UnitFactory.createUnitObject(measure2, 1) : measure2
        this.measureType = this.numerator.getValueUnit() + '/' + this.denominator.getValueUnit()
        this.setValue(numVal||0, denVal||1)
    }

    getNumerator() {
        return this.numerator
    }
    getDenominator() {
        return this.denominator
    }

    getValueUnit() {
        return this.numerator.getValueUnit()
    }

    setValue(numValue:number, denValue?:number) {
        if(this.numerator instanceof Ratio) {
            this.numerator.setValue(numValue)
        } else {
            this.numerator.setValueAs(this.numerator.getValueUnit(), numValue)
        }
        if(denValue) this.denominator.setValueAs(this.denominator.getValueUnit(), denValue)
    }
    getValue():number {
        return this.getValueAs(this.numerator.getValueUnit(), this.denominator.getValueUnit())
    }

    /**
     * Set the ratio values independently.
     *
     * @param value1
     * @param measure1Type
     * @param value2
     * @param measure2Type
     */
    setRatioValues (value1:number, measure1Type:string , value2:number, measure2Type:string) {
        this.numerator.setValueAs(measure1Type, value1)
        this.denominator.setValueAs(measure2Type, value2)
    }

    /**
     * Returns the ratio in terms of the measure types given.
     *
     * For example, for a Ratio set up with a Distance and a Time measure,
     * passing {@link UnitType} Kilometer, {@link UnitType} Hour would give the speed in Kilometers per Hour
     *
     * @param {UnitType} measure1Type
     * @param {UnitType} measure2Type
     * @returns {number}
     */
    getValueAs (measure1Type:string, measure2Type:string):number {
        const m = this.numerator.getValueAs(measure1Type)
        const t = this.denominator.getValueAs(measure2Type || this.denominator.getValueUnit())
        return m / t
    }


}
