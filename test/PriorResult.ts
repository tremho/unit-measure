import Tap from 'tap'
import * as humanTest from 'human-test';
import * as fs from 'fs'

// Importing this module will tweak the global Math random method to be deterministically repeatable
import * as SeedRandom from 'seedrandom'
SeedRandom('Predictable range for repeatable tests', {global:true})

let previousResultsFile = ''

export function setPriorResultsFile(name) {
    previousResultsFile = name
}

type PriorMap = Map<number, number>
const resultTracker:Map<string, PriorMap> = new Map<string, PriorMap>()

export function getPriorResult(type:string, baseValue:number):number|undefined {
    let priors:PriorMap | undefined = resultTracker.get(type)
    return priors && priors.get(baseValue)

}
export function addResult(type:string, baseValue:number, convValue:number) {
    let priors:PriorMap = resultTracker.get(type) || new Map<number, number>()
    priors.set(baseValue, convValue)
    resultTracker.set(type, priors)
}

export function removeTrackedType(type) {
    delete htTextCards[type]
}

export function saveResults() {
    // serialize the tracker
    let rt = {}

    Array.from(resultTracker.entries()).forEach(ent => {
        let [type,priors] = ent
        rt[type] = Array.from(priors.entries())
    })
    let rtstr;
    try {
        rtstr = JSON.stringify(rt)
    } catch(e) {
        console.error('unable to save results ', e)
    }
    fs.writeFileSync(previousResultsFile, rtstr)
}
export function getPriorResults() {
    if(fs.existsSync(previousResultsFile)) {
        try {
            const contents = fs.readFileSync(previousResultsFile).toString()
            const rt = JSON.parse(contents)
            Object.getOwnPropertyNames(rt).forEach(type => {
                rt[type].forEach(tuple => {
                    let [baseValue, convValue] = tuple
                    addResult(type, baseValue, convValue)

                })
            })
        } catch (e) {
            console.error('Error retreiving prior results', e)
        }
    }
}

const htTextCards = {}
export function startCard(value, baseUnit, variant) {
    return  htTextCards[baseUnit+` as ${variant}`] || `Variants of ${value} ${baseUnit} (from ${variant})\n\n`
}
export function addResultToCard(card, baseUnit, value, variantType) {
    card += `    = ${value} ${variantType}\n`
    htTextCards[baseUnit] = card
    return card
}
export function getNumCards() {
    return Object.getOwnPropertyNames(htTextCards).length;
}
export function getCardIds() {
    return Object.getOwnPropertyNames(htTextCards)
}
export function getCard(id) {
    return htTextCards[id]
}

export function humanTestCards() {
    if(!getNumCards()) return Promise.resolve()
    if(humanTest) {
        humanTest.startManualTest('Unit Test Verifications')
    }
    return Tap.test('HumanTest', t => {
        if(!humanTest) {
            t.ok(true, 'humanTest skipped', {skip: true})
            t.end()
            return Promise.resolve()
        }
        return humanTest.verifyHumanAvailable().then(() => {
            const cardProps = getCardIds()
            const nextCard = function(i:number = 0) {
                if(i < 0 || i >= cardProps.length) return Promise.resolve()
                const prop = cardProps[i]
                const card = getCard(prop)
                return humanTest.showText(card, {timeout:1200}).then(result => {
                    t.ok(result.passed, result.comment, {skip:result.skipped})
                    if(!result.passed || result.skipped) {
                        // remove this type from the result tracker, so we test it again next time
                        let vi = card.indexOf('(from ')
                        if(vi !== -1) {
                            let end = card.indexOf(')\n', vi)
                            let type = card.substring(vi+6, end)
                            removeTrackedType(type)
                        }
                    }
                }).then(()=> {
                    return nextCard(++i)
                })
            }
            return nextCard().then(() =>  {
                t.end()
                humanTest.endManualTest()
            })
        })
    })
}
