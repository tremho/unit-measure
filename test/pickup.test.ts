import Tap from 'tap'
import {
    UnitType,
    UnitFactory,
    NameMapRatio,
    Measure,
    Acceleration,
    FuelEfficiency,
    Speed,
    Time,
    Ratio,
    Count,
    Temperature,
    Density
} from '../UnitMeasure'

function pickup() {
    Tap.test(t => {
        const acc = new Acceleration()

        acc.setMetersPerSecondSquared(100)
        t.ok(acc.getMetersPerSecondSquared() === 100, 'mps2 OK')
        acc.setFeetPerSecondSquared(100)
        t.ok(acc.getFeetPerSecondSquared() === 100, 'fps2 OK')

        t.throws(() => {NameMapRatio.makeFrom('foobar')}, {})

        NameMapRatio['bogustest'] = []
        t.throws(() => {NameMapRatio.makeFrom('bogustest')}, {})
        delete NameMapRatio['bogustest']

        const acc2 = NameMapRatio.makeFrom('m/s', 100,20)
        t.ok(acc2 && acc2.getValueAs(UnitType.Meter, UnitType.Second) === 5, '100/20 == 5 m/s')

        t.throws(() => {UnitFactory.createUnitObject('foobar')}, {})

        let fe = new FuelEfficiency()
        fe.setMilesPerGallon(100)
        t.ok(fe.getMilesPerGallon() === 100, 'mpg OK')
        fe.setKilometersPerLiter(100)
        t.ok(fe.getKilometersPerLiter() === 100, 'kpl OK')
        fe.setLitersPerKm(0.1)
        t.ok(fe.getLitersPerKm() === 0.1, 'lpk OK')
        fe.setLitersPer100Km(8)
        t.ok(fe.getLitersPer100Km() === 8, 'l/100km OK')
        fe.setMillilitersPer100Km(123)
        t.ok(fe.getMillilitersPer100Km() === 123, 'ml/100km OK')

        fe = new FuelEfficiency(UnitType.Meter, UnitType.Tablespoon)
        t.ok(fe)
        fe = new FuelEfficiency(UnitType.Meter, UnitType.Tablespoon, 60, 2)
        t.ok(fe)

        // Custom measure
        // there are 3.1415927 bars in a foobar
        // 3 bars make a foo
        // fubars are bar squared

        let custom = new Measure('foobar', UnitType.Count, 0)
        custom.addUnit('bar', (to:number, from:number):number => {
            if (to !== undefined) {
                // compute count to bar
                return to / 3.141927;
            } else {
                // compute bar to count
                return from * 3.1415927
            }
        })

        custom.addUnit('foo', (to:number, from:number):number => {
            if(to !== undefined) {
                // convert first to bar
                let bar =  to / 3.141927;
                // foo is 3 bar
                return bar / 3;
            } else {
                // convert from foo to count
                let bar = from * 3 * 3.1415927;
                return bar * 3.1415927
            }
        })

        custom.addUnit('fubar', (to:number, from:number):number => {
            if (to !== undefined) {
                // convert first to bar
                let bar = to / 3.141927;
                // foo is 3 bar
                return bar * bar; // squared
            } else {
                // convert from foo to bar
                let bar = from * 3;
                return Math.sqrt(bar)
            }
        })

        custom.setValueAs ('count', 100)
        let bar = custom.getValueAs('bar')
        t.ok(bar)
        let foo = custom.getValueAs('foo')
        t.ok(foo)
        let fubar = custom.getValueAs('fubar')
        t.ok(fubar)

        custom.setValueAs('fubar', 1);
        bar = custom.getValueAs('bar')
        t.ok(bar)
        foo = custom.getValueAs('foo')
        t.ok(foo)

        custom.setValueAs('bar', 1)
        bar = custom.getValueAs('bar')
        t.ok(0 === Math.round(Math.abs(bar - 1) * 10), 'bar OK')
        foo = custom.getValueAs('foo')
        t.ok(0 === Math.round(Math.abs(foo - bar/3) * 10), 'foo OK')
        fubar = custom.getValueAs('fubar')
        t.ok(0 === Math.round(Math.abs(fubar - bar*bar) * 1000), 'fubar OK')

        let c = custom.getConversion('bar')
        t.ok(typeof c === 'function', 'converter is the function we set')

        t.throws(() => {custom.getValueAs('baz')}, {})

        custom.addConversions() // cover null case

        custom.addConversions([
                ['xyzyyg', 4],
                ['calc', (to:number, from:number):number => {
                    if (to !== undefined) {
                        // compute count to even/odd
                        return to & 1 ? 1 : 0
                    } else {
                        // compute even/odd to count
                        return from
                    }
                }]
            ]
        )
        custom.setValueAs('count', 100)
        let test = custom.getValueAs('xyzyyg')
        t.ok( test === 25)
        test = custom.getValueAs('calc')
        t.ok(test === 0)
        custom.setValueAs('count', 123)
        test = custom.getValueAs('calc')
        t.ok(test === 1)
        custom.removeUnit('calc')
        t.throws(() => {custom.getValueAs('calc')}, {})



        custom.clearUnits()
        t.throws(() => {custom.setValueAs('bar', 100)}, {})

        c = custom.getConversion('bar')
        t.ok(typeof c === 'undefined', 'converter now undefined')

        let tm = new Time(1, UnitType.Hour)
        test = tm.getValueAs('minute')
        t.ok(test === 60)
        test = tm.getValueAs(UnitType.Minute)
        t.ok(test === 60)
        t.throws(()=> {tm.getValueAs(UnitType.Tablespoon)}, {})

        let r = new Ratio()
        t.ok(r)
        r = new Ratio('weird', new Speed(), new Time())
        t.ok(r)
        r = new Ratio(undefined, new Speed(), new Time())
        t.ok(r)
        r = new Ratio('', new Speed(), new Time(), 1, 2)
        t.ok(r)
        r = new Ratio('', new Count(), new Time(), 1, 2)
        t.ok(r)

        let sp = new Speed()
        sp.setMilesPerHour(100)
        let res = sp.getKilometersPerHour()
        t.ok(res === 160.934, 'kph OK')
        sp.setKilometersPerHour(100)
        res = sp.getMilesPerHour()
        t.ok(0 === Math.round(Math.abs(res - 62.1373) * 10000), 'mph OK')

        let temp = new Temperature(100, UnitType.Fahrenheit)
        t.ok(temp)
        temp = new Temperature(undefined, UnitType.Celsius)
        t.ok(temp)

        let d = new Density()
        t.ok(d)

        t.end()
    })
}


pickup()
