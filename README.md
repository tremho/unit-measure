# unit-measure

Migration of the "Unit" code from TBT.

Just started 11/6/2020 
Nothing exposed yet.

Things to be done:

- not in Typescript, might want to update
- Need a Weight measure
- Need to change Ounce to FluidOunce
- Need to add kitchen measure units (tsp, tbsp, etc)

- Should also work on Substance
 - a substance is a described material
 - it has weight and volume properties in unit standard
 - it has a state (solid, liquid, gas)
 - it has transition temps for each state

In another package: 
 - Then declare FoodSubstance or Ingredient
    - Semantics
    - Perishability (PerishableSubstance)
    - NutritionalInfo
