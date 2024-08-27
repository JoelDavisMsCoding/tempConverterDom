//Getting Text from a input box
let tempUnit = document.querySelector("option");
console.log(tempUnit);
let temperature = document.getElementById("temperature");
console.log(temperature.value);
let convertButton = document.getElementById("convert");
let refreshButton = document.getElementById("refresh");
let tempUnitChosen = "";
let tempChosen = "";
function celsiusToKelvin(temperature)
{
    let convertedTemp = temperature + 273.15;
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
    //return temperature + 459.67 * 5/9;
    //return temperature + 459.67 / 1.;
}

tempUnit.addEventListener("click", () =>
{
    
    tempUnitChosen = tempUnit.value;
})
temperature.addEventListener("input", () =>
{
    tempChosen = temperature.value;
})
convertButton.addEventListener("click", () => {
    tempUnitChosen = tempUnit.value;
    tempChosen = temperature.value;
    if (tempUnitChosen == "kelvinToCelsius"){let convertedTemp = kelvinToCelsius(tempChosen); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "kelvinToFarenheit"){let convertedTemp = kelvinToFarenheit(tempChosen); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "celsiusToFarenheit"){let convertedTemp = celsiusToFarenheit(tempChosen); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "celsiusToKelvin"){let convertedTemp = celsiusToKelvin(tempChosen); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "farenheitToCelsius"){let convertedTemp = farenheitToCelsius(tempChosen); confirm(`Temperature Conversion: ${convertedTemp}°`);}
    if (tempUnitChosen == "farenheitToKelvin"){let convertedTemp = farenheitToKelvin(tempChosen); confirm(`Temperature Conversion: ${convertedTemp}°`);}
})
refreshButton.addEventListener("click", () => {
    tempUnit.placeholder = "";
    temperature.value = "";
})
