import { fetchSunriseSunsetData } from "./api/sunriseSunsetData.js";
import { getCoordinatesFromAddress } from "./api/geocoding.js";

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
  try {
    const { lat, lng, locationOutput } = await getCoordinatesFromAddress(address);
    output.textContent = locationOutput;
    const data = await fetchSunriseSunsetData(lat, lng);
    displaySunriseSunsetData(data);
  } catch (error) {
    handleAPIError(error);
  }
}

function displaySunriseSunsetData(data) {
  if (data.results.sunrise && data.results.sunset) {
    sunriseTime.textContent = data.results.sunrise;
    sunsetTime.textContent = data.results.sunset;
  } else {
    displayError("No sunrise and sunset data available for this location.");
  }
}

function displayError(message) {
  sunriseTime.textContent = "";
  sunsetTime.textContent = "";
  output.textContent = message;
}

function handleAPIError(error) {
  console.error("API Error:", error);
  displayError("An error occurred while fetching data. Please try again later.");
}
