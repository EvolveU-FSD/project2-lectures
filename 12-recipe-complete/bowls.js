
function getBowl(size) {
  console.info("Finding a bowl of size " + size + "mL")
  let bowl = {
    capacity: size,
    contents: [],
    description: "bowl of size " + size + "mL"
  }
  return bowl
}
  
function addToBowl(bowl, someStuff) {
  console.info("Adding " + someStuff.description + " to " + bowl.description)
  bowl.contents.push(someStuff)
}

function printContents(bowl) {
  console.info("The " + bowl.description + " contains: ")
  bowl.contents.forEach((stuff) => {
    console.info("  " + stuff.description)    
  })
}

function sumContentsVolume(bowl) {
  let sumAmount = 0
  bowl.contents.forEach((stuff) => {
    sumAmount = sumAmount + stuff.amount
  })
  return sumAmount
}

function bowlContains(bowl, ingredientName) {
  let foundIt = false
  bowl.contents.forEach((stuff) => { 
    if (stuff.ingredient === ingredientName) {
      foundIt = true
    } 
  })
  return foundIt
}

function replaceContents(bowl, newContents) {
  bowl.contents = [ newContents ]
}

function mix(bowl) {
  console.info("Mixing the contents of the bowl!")
  if (bowlContains(bowl, "yeast") && bowlContains(bowl, "water") && bowlContains(bowl, "sugar")) {
    let combinedVolume = sumContentsVolume(bowl)
    let newContents = {
      ingredient: "yeast mixture",
      amount: combinedVolume,
      description: combinedVolume + "mL of bubbly yeast mixture",
      bubbly: true
    }
    replaceContents(bowl, newContents)
  }
  else if (bowlContains(bowl, "yeast mixture") && bowlContains(bowl, "flour")) {
    let combinedVolume = sumContentsVolume(bowl)
    let newContents = {
      ingredient: "dough",
      amount: combinedVolume,
      description: combinedVolume + "mL of dough",
    }
    replaceContents(bowl, newContents)
  }
  else {
    console.info("Stuff in the bowl is mixed... but we don't know what the result is!")
  }
}

module.exports = {
    getBowl,
    addToBowl,
    printContents,
    mix
}