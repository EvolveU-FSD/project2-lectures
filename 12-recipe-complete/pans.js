
function getPan() {
  console.info("Find a pan")
  let pan = {
    greased: false,
    content: null,
    description: "baking pan"
  }
  return pan
}

function grease(pan) {
  console.info("Greasing the pan")
  pan.greased = true
}

module.exports = {
  getPan
}
