
import Tap from 'tap'
import {UnitType,
    Length,
    Mass,
    Distance,
    FuelEfficiency,
    Speed,
    Time,
    Volume
} from '../UnitMeasure'

// scenario test 1 - Measurement of piping

function scenario1 () {
    Tap.test(t => {

        let halfInch = {
            diameter: 0.5, // in US inches
            ozsPerFoot: 2.48, // in US Ft
            pricePerFoot: 0.25, // in USD
        }


        // Doing w/o units
        console.log('\n(a) no units')
        let item = halfInch; // item from inventory
        let orderAmt = 18 // in inches... but we have to know both the amount and the unit type here.
        let orderUnit = "inches"
        let orderInFt = orderAmt / 12 // we have to convert to feet before computing weight and price, and know we're converting from inches
        let ozWeight = orderInFt * item.ozsPerFoot // weight in ounces, which is okay for this scenario.
        let price = orderInFt * item.pricePerFoot
        t.ok(0 === Math.round(Math.abs(price - 0.375) * 1000), 'Price OK')
        t.ok(0 === Math.round(Math.abs(ozWeight - 3.72) * 100), 'Weight OK')

        let message = `
    Thank you for your order of ${orderAmt} ${orderUnit} of our 1/2" piping product!
    Your cost today is $${price} (USD)
    Net Weight: ${ozWeight} ounces.
    `
        console.log(message)

        // same, with units
        console.log('\n(b) with units')
        let orderLength = new Length(18, UnitType.Inch)
        let orderBase = orderLength.getValueAs(UnitType.Foot) //  translate length to our inventory base value
        let orderWeight = new Mass(orderBase * item.ozsPerFoot, UnitType.Ounce) // and weight in our base
        price = orderBase * item.pricePerFoot // price base (USD)
        t.ok(0 === Math.round(Math.abs(price - 0.375) * 1000), 'Price OK')
        t.ok(0 === Math.round(Math.abs(orderWeight.getValueAs(UnitType.Ounce) - 3.72) * 100), 'Weight OK')
        message = `
    Thank you for your order of ${orderLength.getValue()} ${orderLength.getValueUnit()} of our 1/2" piping product!
    Your cost today is $${price} (USD)
    Net Weight: ${orderWeight.getValueAs(UnitType.Ounce)} ounces.
    `
        console.log(message)

        // a larger order using units
        console.log('\n(c) larger order')
        orderLength = new Length(200, UnitType.Foot)
        orderBase = orderLength.getValueAs(UnitType.Foot) //  translate length to our inventory base value
        orderWeight = new Mass(orderBase * item.ozsPerFoot, UnitType.Ounce) // and weight in our base
        price = orderBase * item.pricePerFoot // price base (USD)
        t.ok(0 === Math.round(Math.abs(price - 50) * 10), 'Price OK')
        t.ok(0 === Math.round(Math.abs(orderLength.getValueAs(UnitType.Foot) - 200) * 10), 'Length OK')
        t.ok(0 === Math.round(Math.abs(orderWeight.getValueAs(UnitType.Pound) - 31) * 10), 'Weight OK')
        message = `
    Thank you for your order of ${orderLength.getValue()} ${orderLength.getValueUnit()} of our 1/2" piping product!
    Your cost today is $${price} (USD)
    Net Weight: ${orderWeight.getValueAs(UnitType.Pound)} lbs.
    `
        console.log(message)

        // a european order
        console.log('\n(d) international order')
        orderLength = new Length(36, UnitType.Meter)
        orderBase = orderLength.getValueAs(UnitType.Foot) //  translate length to our inventory base value
        orderWeight = new Mass(orderBase * item.ozsPerFoot, UnitType.Ounce) // and weight in our base
        price = orderBase * item.pricePerFoot // price base (USD)
        t.ok(0 === Math.round(Math.abs(price - 29.53) * 100), 'Price Ok')
        t.ok(0 === Math.round(Math.abs(orderLength.getValueAs(UnitType.Meter) - 36) ), 'Length OK')
        t.ok(0 === Math.round(Math.abs(orderWeight.getValueAs(UnitType.Kilogram) - 8.304) * 1000), 'Weight OK')
        message = `
    Thank you for your order of ${orderLength.getValue()} ${orderLength.getValueUnit()} of our 1/2" piping product!
    Your cost today is $${price} (USD)
    Net Weight: ${orderWeight.getValueAs(UnitType.Kilogram)} kg.
    `
        console.log(message)

        t.end()
    })
}

function scenario2() {
    Tap.test(t => {
        // we're going 1000 miles
        let distance = new Distance(1000, UnitType.Mile)
        // our car is rated at 30mpg
        let carFE = new FuelEfficiency(UnitType.Mile, UnitType.Gallon, 30)
        // the car holds 15 US gallons of gas
        let tank = new Volume(15, UnitType.Gallon)

        // now compute our values for US
        // so how far can we go on a tank of gas?
        let miPerTank = Math.floor(tank.getValue() * carFE.getValue())
        // how many refuel stops in our trip?
        let stops = distance.getValue() / miPerTank
        // how much gas will we purchase?
        let fuel = stops * tank.getValue()

        let message = `Your trip of ${distance.getValueAs(UnitType.Mile)} miles will require ${Math.ceil(stops)} stops\n` +
            `and you will buy ${fuel} gallons of gas,` +
            `assuming your car gets ${carFE.getMilesPerGallon()} mpg.\n`
        console.log(message)

        console.log('\n(b) European trip')
        // so how far can we go on a tank of gas?
        let kmPerTank = Math.floor(tank.getValueAs(UnitType.Liter)  *  carFE.getValueAs(UnitType.Kilometer, UnitType.Liter))

        // how many refuel stops in our trip?
        stops = distance.getValueAs(UnitType.Kilometer) / kmPerTank

        // how much gas will we purchase?
        fuel = stops * tank.getValueAs(UnitType.Liter)

        message =
            `Your trip of ${distance.getValueAs(UnitType.Kilometer)} Kilometers will require ${Math.ceil(stops)} stops and\n` +
            `you will buy ${fuel} liters of petrol,\n` +
            `assuming your car gets ${carFE.getLitersPer100Km()} l/100km (${carFE.getKilometersPerLiter()} km/l).`

        console.log(message)

        t.end()
    })
}

function scenario3() {
    Tap.test(t => {
        let distance = new Distance(296, UnitType.Mile)
        let speed = new Speed()
        speed.setRatioValues(65, UnitType.Mile, 1, UnitType.Hour)
        let bookPages = 269;
        // reading speed of 2 minutes per page
        let readSpeed = new Speed(UnitType.Count, UnitType.Minute, 1, 2)
        let readTime = bookPages / readSpeed.getValueAs(UnitType.Count, UnitType.Hour); // time to read in hours
        let time = new Time(readTime, UnitType.Hour)
        let duration = distance.getValueAs(UnitType.Kilometer) / speed.getValueAs(UnitType.Kilometer, UnitType.Hour)

        let message =
        `Ashley's train trip of ${distance.getValueAs(UnitType.Kilometer)} km will take ${duration} hrs\n` +
        `It will take Ashley  ${time.getValueAs(UnitType.Hour)} hrs to read her book\n`

        let success = (time.getValueAs(UnitType.Hour) < duration)
        if(success) {
            message += 'So, yes, she will finish her book before arrival.\n'
        } else {
            message += 'So, no, she will not finish her book before arrival.\n'
            let reqSpeed = new Speed(UnitType.Count, UnitType.Hour, bookPages, duration)
            let reqPgsPerMinute = Math.round(reqSpeed.getValueAs(UnitType.Count, UnitType.Minute))
            message += `Unless she reads it at ${reqPgsPerMinute} pages / minute.`
        }
        console.log(message)

        t.end()

    })
}


scenario1()
scenario2()
scenario3()

