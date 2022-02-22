// Define variables and get eements
let number = document.getElementById("input-el")
let meterResult = document.getElementById("meter-result")
let feetResult = document.getElementById("feet-result")
let literResult = document.getElementById("liter-result")
let gallonResult = document.getElementById("gallon-result")
let kiloResult = document.getElementById("kilo-result")
let poundResult = document.getElementById("pound-result")

let meters = 0
let feet = 0
let liters = 0
let gallons = 0
let kilos = 0
let pounds = 0
let testData = document.querySelectorAll(".test")

// Define function
function convertMetric() {
    let userInput = number.value

    let parseUserInput = parseFloat(userInput)
    //Change Txt Content of appropriate regions 
    for (let i = 0; i < testData.length; i++) {
        testData[i].textContent = parseUserInput
    }

    // Meters to Feet
    meters = parseUserInput * 3.28084
    meters = meters.toFixed(3)
    meterResult.textContent = meters
    // Feet to Meters
    feet = parseUserInput * 0.3048
    feet = feet.toFixed(3)
    feetResult.textContent = feet
    // Liters to Gallons
    liters = parseUserInput * 0.264172
    liters = liters.toFixed(3)
    literResult.textContent = liters
    // Gallons to Liters
    gallons = parseUserInput * 3.78541
    gallons = gallons.toFixed(3)
    gallonResult.textContent = gallons
    // Kilos to Pounds
    kilos = parseUserInput * 2.20462
    kilos = kilos.toFixed(3)
    kiloResult.textContent = kilos
    // Pounds to Kilos
    pounds = parseUserInput * 0.453592
    pounds = pounds.toFixed(3)
    poundResult.textContent = pounds
}