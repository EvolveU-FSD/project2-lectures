
const MeasuringTools = require('./measuringTools')
const Ingredients = require('./ingredients')
const Bowls = require('./bowls')

const FlouredSurface = require('./flouredSurface')
const Pans = require('./pans')
const Oven = require('./oven')
const { measure } = require('../10-control-flow-start/measuringTools')

// Do the recipe!
console.log("Let us begin!")

let someYeast = MeasuringTools.measure(Ingredients.yeast, 1 * MeasuringTools.TEASPOON)
let someWater = MeasuringTools.measure(Ingredients.water, 2.25 * MeasuringTools.CUP)
let someSugar = MeasuringTools.measure(Ingredients.sugar, 0.5 * MeasuringTools.TEASPOON)

let mixingBowl = Bowls.getBowl(4.5 * MeasuringTools.QUART)

Bowls.addToBowl(mixingBowl, someYeast)
Bowls.addToBowl(mixingBowl, someWater)
Bowls.addToBowl(mixingBowl, someSugar)

Bowls.printContents(mixingBowl)
Bowls.mix(mixingBowl)
Bowls.printContents(mixingBowl)

let moreSugar = MeasuringTools.measure(Ingredients.sugar, 3 * MeasuringTools.TABLESPOON)
let someFlour = MeasuringTools.measure(Ingredients.flour, 6 * MeasuringTools.CUP)
let someSalt = MeasuringTools.measure(Ingredients.salt, 6 * MeasuringTools.TABLESPOON)
let someOil = MeasuringTools.measure(Ingredients.oil, 2 * MeasuringTools.TABLESPOON)

Bowls.addToBowl(mixingBowl, moreSugar)
Bowls.addToBowl(mixingBowl, someSalt)
Bowls.addToBowl(mixingBowl, someOil)
Bowls.addToBowl(mixingBowl, someFlour)

Bowls.printContents(mixingBowl)
Bowls.mix(mixingBowl)
Bowls.printContents(mixingBowl)
// expect to find dough