import Ratio from "./Ratio";
import Speed from "./Speed";
import UnitType from "../UnitType";

export default class Acceleration extends Ratio {
    /**
     * Ratio designed for Acceleration: (speed over time)
     *
     * Constructs an Acceleration Ratio object
     * Default acceleration units are in m/sec<sup>2</sup>
     *
     * ### Constructor
     *
     * @param {string} [distType] - distance type, default 'm'
     * @param {string} [timeType] - duration of time, default 'sec'
     * @param {number} [distValue]  -   value for distance, default 0
     * @param {number} [timeValue]  -   value for time, default 1
     */
    constructor (distType:string = 'm', timeType:string = 'sec', distValue:number = 0, timeValue:number = 1) {
        super('Acceleration', new Speed(distType, timeType), timeType)
        this.setRatioValues(distValue, distType, timeValue, timeType)
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
        this.setRatioValues(mps2, UnitType.Meter, 1, UnitType.Second)
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
        this.setRatioValues(fps2, UnitType.Foot, 1, UnitType.Second)
    }

    /**
     * Sets this Acceleration value expressed as a specific distance and time unit ratio.
     *
     * @param {number} value The value to set
     * @param {string} ratioType The ratio type unit identifier this value is based on
     */
    setValueAs (value:number, ratioType:string) {
        // TODO: NameMapRatio.setRatioAs(this, ratioType, value)
    }

    /**
     * Sets this Acceleration value expressed as separate distance and time values as a fraction.
     *
     * @param {number} distValue
     * @param distType
     * @param {number} timeValue
     * @param timeType
     */
    setRatioValues (distValue, distType, timeValue, timeType) {
        const numRat = (this.numerator as unknown) as Ratio
        numRat.setRatioValues(distValue, distType, timeValue, timeType)
        this.denominator.setValueAs(timeType, timeValue)
    }
}
