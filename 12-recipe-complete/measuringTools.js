function measure(stuff, amount) {
    console.info("Measuring " + amount + "mL of " + stuff)
    let measuredStuff = {
        ingredient: stuff,
        amount: amount,
        description: amount + "mL of " + stuff
    }
    return measuredStuff
}

module.exports = {
    TEASPOON: 5, // mL
    TABLESPOON: 15, // mL
    CUP: 250, // mL
    QUART: 946, // mL
    measure
}