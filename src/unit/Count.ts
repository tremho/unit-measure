
import Measure from "./Measure";
import UnitType from "../UnitType";

export default class Count extends Measure {
    /**
     * Defines measure for counting. {@link UnitType} Count is the base unit.
     *
     * ### Constructor
     *
     * @param   {number}    [value] numeric value representation
     */
    constructor (value?:number) {
        super('count', UnitType.Count, value || 0, 'count',
            [
                [UnitType.Each, 1],
                [UnitType.Dozen, 12],
                [UnitType.Score, 20],
                [UnitType.Brace, 2],
                [UnitType.Pair, 2],
                [UnitType.K, 1000],
                [UnitType.Meg, 1000000],
                [UnitType.Gig, 1000000000]
            ])
    }
}
