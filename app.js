//Getting Text from a input box
let tempUnit = document.querySelector("select");
let removeDefault = document.getElementById("default");
console.log(removeDefault);
console.log(tempUnit.value);
let temperature = document.getElementById("temperature");
console.log(temperature.value);
let convertButton = document.getElementById("convert");
let clearButton = document.getElementById("clear");
let tempUnitChosen = "";
let tempInput = "";
function celsiusToKelvin(temperature) //Convert functions for later when the user selects which temp unit they want to convert to and from.
{
    let convertedTemp = parseFloat(temperature) + 273.15;
    let result= Math.round(convertedTemp * 100) / 100;
    return result;
}
function celsiusToFarenheit(temperature)
{
    let convertedTemp = (temperature * 9/5) + 32;
    let result= Math.round(convertedTemp * 100) / 100;
    return result;
}
function kelvinToFarenheit(temperature)
{
    let convertedTemp = (temperature - 273.15) * 1.8 + 32;
    let result= Math.round(convertedTemp * 100) / 100;
    return result;
}
function kelvinToCelsius(temperature)
{
    let convertedTemp = temperature - 273.15;
    let result= Math.round(convertedTemp * 100) / 100;
    return result;
}
function farenheitToCelsius(temperature)
{
    let convertedTemp = (temperature - 32) * 5/9;
    let result= Math.round(convertedTemp * 100) / 100;
    return result;
}
function farenheitToKelvin(temperature)
{
    let convertedTemp = (temperature - 32) * 5/9 + 273.15;
    let result= Math.round(convertedTemp * 100) / 100;
    return result;
}

tempUnit.addEventListener("click", () => //event listener to pick the temp unit they want to convert once they choose and click the button
{   
    tempUnitChosen = tempUnit.value;
})
temperature.addEventListener("input", () => //collects the character and keeps adding on while entering text
{
    tempInput = temperature.value;
    if (isNaN(temperature.value) && temperature.value != ".") //Input validation that restricts the user from putting in any character other than a number
    {
        temperature.value = temperature.value.slice(0, -1);
    }
    else {tempInput = temperature.value;}
})
convertButton.addEventListener("click", () => {
    tempUnitChosen = tempUnit.value;
    tempInput = temperature.value;
    if (tempUnitChosen == "kelvinToCelsius"){let convertedTemp = kelvinToCelsius(tempInput); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "kelvinToFarenheit"){let convertedTemp = kelvinToFarenheit(tempInput); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "celsiusToFarenheit"){let convertedTemp = celsiusToFarenheit(tempInput); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "celsiusToKelvin"){let convertedTemp = celsiusToKelvin(tempInput); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "farenheitToCelsius"){let convertedTemp = farenheitToCelsius(tempInput); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "farenheitToKelvin"){let convertedTemp = farenheitToKelvin(tempInput); confirm(`Temperature Conversion: ${convertedTemp}°`);}
})
clearButton.addEventListener("click", () => {
    tempUnit.value = "Select Temp Unit";
    temperature.value = "";
})
