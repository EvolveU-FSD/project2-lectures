
function getOven() {
  console.info("Finding the oven")
  let oven = {
    content: null,
    temperature: 21,
    temperatureSetpoint: 0,
    description: "oven"
  }
  return oven
}
      
module.exports = {
  getOven
}
  