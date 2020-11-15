
### Scenarios

The following scenarios are admittedly contrived, but should
provide a pretty good example of the sorts of things that could
be done in real-life scenario situations.

Note that unit-measure is meant to be one of many handy tools one
might use for the purpose of unit conversion or localization, 
not necessarily a complete solution to these concerns in whole. 

#### Inventory measurements

Scenario: a manufacturer makes extruded plastic piping in various
standard diameters and sells by custom length. 


Let's say the inventory data for a typical item is recorded like this
one for a standard 1/2" diameter extrusion product:
```
inventory: {
...

halfInch: {
    diameter: 0.5, // in US inches
    ozsPerFoot: 2.48, // in US Ft
    pricePerFoot: 0.25, // in USD
}
...
}
```

A local customer orders 18 feet of the 2" piping for their project.

The sales system code can process this by starting with and instance
of the item inventory definition, and filling it out to the
desired length.

And this is simple enough to do without using the unit-measure package
at all, so let's look at that first:

```
let item = inventory.halfInch
let orderAmt = 18 // in inches... but we have to know both the amount and the unit type here.
let orderUnit = "inches"
let orderInFt = orderAmt / 12 // we have to convert to feet before computing weight and price, and know we're converting from inches
let ozWeight = orderInFt * item.ozsPerFoot // weight in ounces, which is okay for this scenario.
let price = orderInFt * item.pricePerFoot
let message = `
Thank you for your order of ${orderAmt} ${orderUnit} of our 1/2" piping product!
Your cost today is ${price} (USD)
Net Weight: ${ozWeight} ounces.
`
console.log(message)
```
and we'll see:

    Thank you for your order of 18 inches of our 1/2" piping product!
    Your cost today is 0.375 (USD)
    Net Weight: 3.7199999999999998 ounces.

Which, aside from formatting issues, makes sense: 18" of pipe costs us
about 38 cents (not counting minimum order and handling or shipping fees), 
and weighs about 3.72 ounces.

Formatting output is beyond the scope of this library, but is
well addressed by other packages and coding techniques.

The problem with the above approach is that if the store accepts
orders in multiple types of unit measures (e.g. feet, inches, yards,
meters, etc), it needs to keep track of this so it can apply the
correct converison math as needed.  

Now let's look at the same example, but this time, let's employ 
the unit-measure class types to the same situation:
``
let orderLength = new Length(18, UnitType.Inch)
let orderBase = orderLength.getValueAs(UnitType.Foot) //  translate length to our inventory base value
let orderWeight = new Mass(orderBase * item.ozsPerFoot, UnitType.Ounce) // and weight in our base
let price = orderBase * item.pricePerFoot // price base (USD)
let message = `
Thank you for your order of ${orderLength.getValue()} ${orderLength.getValueUnit()} of our 1/2" piping product!
Your cost today is $${price} (USD)
Net Weight: ${orderWeight.getValueAs(UnitType.Ounce)} ounces.
`
console.log(message)
``
and, not surprisingly, we get as output:

    Thank you for your order of 18 in of our 1/2" piping product!
    Your cost today is $0.37499999999999994 (USD)
    Net Weight: 3.7199999999999998 ounces.

So (again, ignoring numeric formatting), nothing different. Nor should
there be.

That's not too spectacular an example, though, 
because no unit conversion was needed.

But you can see that if we were to enter the orderLength as
`let orderLength = new Length(1.5, UnitType.Foot)` we would
get exactly the same answer, because the unit-measure library 
already knows that 18 inches and 1.5 feet are equivalent.

Let's scale to a larger order for the next example.  
Rather than a small order, a contractor wishes a larger supply:
```
let orderLength = new Length(200, UnitType.Foot)
let orderBase = orderLength.getValueAs(UnitType.Foot) //  translate length to our inventory base value
let orderWeight = new Mass(orderBase * item.ozsPerFoot, UnitType.Ounce) // and weight in our base
let price = orderBase * item.pricePerFoot // price base (USD)
let message = `
Thank you for your order of ${orderLength.getValue()} ${orderLength.getValueUnit()} of our 1/2" piping product!
Your cost today is $${price} (USD)
Net Weight: ${orderWeight.getValueAs(UnitType.Pound)} lbs.
`
console.log(message)
```
Here, we see

    Thank you for your order of 199.99999999999997 ft of our 1/2" piping product!
    Your cost today is $49.99999999999999 (USD)
    Net Weight: 30.999999999678508 lbs.

so you can see we've computed the weight in lbs instead of ounces,
which probably better suits this large order and/or the 
unit type expected by the shipper or the recipient.
Again, ignore the numeric formatting for these examples.

Note also we used `getValueUnit()` to show the order amount in the
unit name (abbreviation) the order was recorded as.

A Final example in this category:
The store is US based but does business internationally,
so the unit conversion is very helpful.

An international customer orders 36 meters of the 1/2" piping.

This transaction looks like this:
```
orderLength = new Length(36, UnitType.Meter)
orderBase = orderLength.getValueAs(UnitType.Foot) //  translate length to our inventory base value
orderWeight = new Mass(orderBase * item.ozsPerFoot, UnitType.Ounce) // and weight in our base
price = orderBase * item.pricePerFoot // price base (USD)
message = `
Thank you for your order of ${orderLength.getValue()} ${orderLength.getValueUnit()} of our 1/2" piping product!
Your cost today is $${price} (USD)
Net Weight: ${orderWeight.getValueAs(UnitType.Kilogram)} kg.
`
console.log(message)
```
so the order reflects

    Thank you for your order of 36 m of our 1/2" piping product!
    Your cost today is $29.527559055118108 (USD)
    Net Weight: 8.303948031496063 kg.
    
Note that currency conversion is out of the scope of unit-measure
as it is a non-consistent relationship that varies by the moment
in international markets.    

#### A Road trip

A person wishes to plan out a trip of 1000 miles, one being
in the US and a similar hypothetical trip in Europe.

so, here's the data
```
// we're going 1000 miles
let distance = new Distance(1000, UnitType.Mile)

// our car is rated at 30mpg
let carFE = new FuelEfficiency(UnitType.Mile, UnitType.Gallon, 30)

// the car holds 15 US gallons of gas
let tank = new Volume(15, UnitType.Gallon)
```
and here's how we would compute it for US unit values:
```
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
```

The output would read:

    Your trip of 999.9999999999999 miles will require 3 stops
    and you will buy 33.33333333333333 gallons of gas,assuming your car gets 30 mpg.

As before, ignoring the numeric rounding formatting, you will see
that this is properly represented for the scenario.

For the european conversion:
```
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
```

The output reads:

    Your trip of 1609.34 Kilometers will require 2.222845303867403 stops and
    you will buy 126.21571262569061 liters of petrol,
    assuming your car gets 7.840501903471816 l/100km (12.754285533139079 km/l).


(liters per 100 Kilometers, or l/100km is a common form of expressing 
fuel efficiency in Europe.  It is the inverse of Kilometers per Liter 
multiplied by 100.)

#### Speed and Duration

Ashley is on a European trip and blogging about her adventures,
with video, photos, and writing.

Her lastest blog content, with all assets is about 1 GB in total
size. 
She is on a train from Paris to Frankfurt, which she knows from 
her guidebook is 296 miles of travel, and that the type of train she
is on typically runs at about 65 miles per hour.

She can utilize the onboard Internet and acheive an upload speed of 
about 35 mbps (about 4375 KBytes / second) to post her blog content.

Will she be able to upload her blog content while on the train?

Will she have time for a celebratory drink onboard after uploading?

---

_These examples are played out in `test/scenario.test.ts`_
 

 



 








```
