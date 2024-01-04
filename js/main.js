import { fetchSunriseSunsetData } from "./api/sunriseSunsetData.js";
import { getCoordinatesFromAddress } from "./api/geocoding.js";
import { displayError, handleAPIError } from "./errorHandlers.js";

// Get the DOM elements
const addressInput = document.getElementById("addressInput");
const searchButton = document.getElementById("searchButton");
const output = document.getElementById("output");
const sunriseTime = document.getElementById("sunriseTime");
const sunsetTime = document.getElementById("sunsetTime");

// Add an event listener to the search button
searchButton.addEventListener("click", handleSearch);

async function handleSearch() {
  const address = addressInput.value;

  // If the address is empty, display an error message and return
  if (!address || address.trim().length === 0) {
    return displayError("Please enter a valid address.");
  }

  try {
    const coordinates = await getCoordinatesFromAddress(address);
    output.textContent = coordinates.locationOutput;
    const data = await fetchSunriseSunsetData(coordinates.lat, coordinates.lng);
    displaySunriseSunsetData(data);
  } catch (error) {
    handleAPIError(error, displayError);
  }
}

// Display the sunrise and sunset times
function displaySunriseSunsetData(data) {
  if (data.results.sunrise && data.results.sunset) {
    sunriseTime.textContent = data.results.sunrise;
    sunsetTime.textContent = data.results.sunset;
  } else {
    displayError("No sunrise and sunset data available for this location.");
  }
}