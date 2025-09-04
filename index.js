function convertToCelsius(temperature) {
  return ((temperature - 32) * 5) / 9;
}
function describeTemperature(temperature) {
  let celsius = convertToCelsius(temperature);
  let description;
  if (celsius < 0) {
    description = "very cold";
  } else if (celsius < 20) {
    description = "cold";
  } else if (celsius < 30) {
    description = "warm";
  } else if (celsius < 40) {
    description = "hot";
  } else {
    description = "very hot";
  }
  return `${temperature} is ${celsius} which is ${description}`;
}
let temperature = prompt("Enter temperature in Fahrenheit:");
let answer = describeTemperature(temperature);
alert(answer);
