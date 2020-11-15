
import Tap from 'tap'
const {UnitFactory, NameMapRatio, Ratio} = require('../UnitMeasure')

import {
    setPriorResultsFile,
    startCard,
    addResultToCard,
    saveResults,
    getPriorResults,
    addResult,
    getPriorResult,
    humanTestCards
} from "./PriorResult";

function ratioTests() {
    Tap.test('Ratios', t => {
        Object.getOwnPropertyNames(NameMapRatio).forEach(ratName => {
            if(Array.isArray(NameMapRatio[ratName])) {
                let testBaseValue = Math.floor(Math.random() * 1000)
                let rat
                try {
                    rat = NameMapRatio.makeFrom(ratName)
                } catch (e) {
                    t.ok(false, e.message + ' ('+ratName+')')
                }
                if(rat) {
                    t.ok(rat instanceof Ratio, `factory for ${ratName} creates a Ratio instance`)
                    let numType = rat.getNumerator().getValueUnit()
                    let denType = rat.getDenominator().getValueUnit()
                    t.ok(rat.measureType === numType + '/' + denType, 'MeasureType is deterministically descriptive '+rat.measureType+' vs. '+numType + '/' + denType + ' ('+ratName+')')

                    // Known Ratio types use their own name
                    if(['Speed', 'Density', 'FuelEfficiency', 'Acceleration'].indexOf(rat.ratioType) === -1) {
                        // ad hoc ratios have name given
                        t.ok(rat.ratioType === ratName, 'Ratio type is the name given ' + ratName)
                    }


                    let card = startCard(testBaseValue, rat.measureType, ratName)
                    rat.setValue(testBaseValue)
                    let gv = rat.getValue()
                    let xv = rat.getValueAs(numType, denType)
                    let diff = Math.round(Math.abs(gv - testBaseValue) * 10000)
                    t.equal(diff, 0, 'value as base unit should be what we set (within 4 decimals)' + ` ${testBaseValue} ${gv} ${numType} / ${denType}`)
                    t.equal(xv, gv, 'explicit form should be same' + ` ${gv} ${xv} ${numType} / ${denType}`)

                    let nm, dm;
                    try {
                        nm = UnitFactory.createUnitObject(numType)
                        dm = UnitFactory.createUnitObject(denType)
                    } catch (e) {
                        t.ok(false, e.message)
                    }
                    t.ok(nm);
                    t.ok(dm);
                    if (nm && dm) {
                        let nvars = nm.getUnits()
                        let dvars = dm.getUnits()
                        dvars.forEach(dv => {
                            nvars.forEach(nv => {
                                let v = nv + '/' + dv
                                let vv = rat.getValueAs(nv, dv)
                                let previous = getPriorResult(v, testBaseValue)
                                if (previous === undefined || vv !== previous) {
                                    card = addResultToCard(card, ratName, vv, v)
                                } else {
                                    t.ok(vv === previous, `  XX : ${vv}  !== ${previous} ${v} from prior testing `)
                                }
                                addResult(v, testBaseValue, vv)
                            })
                        })
                    }
                }
            }
        })
        t.end()
    })
}

setPriorResultsFile('raiocomp.prior')
getPriorResults()
ratioTests()
humanTestCards().then(() => {
    saveResults()

})
