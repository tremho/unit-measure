import Tap from 'tap'
const {UnitType, UnitFactory, NameMapUnit, Measure} = require('../UnitMeasure')

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

function allUnitTypes() {
    Tap.test('All Units', t => {
        Object.getOwnPropertyNames(UnitType).forEach(ut => {
            let measure
            try {
                measure = UnitFactory.createUnitObject(ut)
            } catch (e) {
                t.ok(false, e.message)
            }
            if(measure) {
                t.ok(measure instanceof Measure, `factory for ${ut} creates a Measure instance`)
                let baseUnit = measure.getBaseUnit()
                t.ok(baseUnit, `expect base unit to be defined for ${ut}`)
                let testBaseValue = Math.floor(Math.random() * 10000)
                measure.setValueAs(baseUnit, testBaseValue)
                let card = startCard(testBaseValue, baseUnit, ut)
                t.equal(measure.getValueAs(baseUnit), testBaseValue, 'value as base unit should be what we set')
                t.equal(measure.as(baseUnit), testBaseValue, '"as" alias should be same')
                NameMapUnit.setMeasureAs(measure, baseUnit, testBaseValue)
                t.equal(NameMapUnit.getMeasureAs(measure, baseUnit), testBaseValue, 'set/get via NameMapUnit OK')
                let variants = measure.getUnits()
                t.ok(variants && variants.length, `expect unit conversions to be defined for ${ut}`)
                variants.forEach(v => {
                    let vv = measure.as(v)
                    let previous = getPriorResult(v, testBaseValue)
                    if (previous === undefined || vv !== previous) {
                        card = addResultToCard(card, baseUnit, vv, v)
                    } else {
                        t.ok(vv === previous, `  XX : ${vv}  !== ${previous} ${v} from prior testing `)
                    }
                    addResult(v, testBaseValue, vv)
                })
            }
        })
        t.end()
    })
}

setPriorResultsFile('unitcomp.prior')
getPriorResults()
allUnitTypes()
humanTestCards().then(() => {
    saveResults()

})

