import { fetchSunriseSunsetData } from "./api/sunriseSunsetData.js";
import { getCoordinatesFromAddress } from "./api/geocoding.js";

// Add an event listener to the search button
document.getElementById("searchButton").addEventListener("click", () => {
  // Get the address input from the user
  const address = document.getElementById("addressInput").value;
  getCoordinatesFromAddress(address)
    .then(({ lat, lng, locationOutput }) => {
      // Display the location output
      document.getElementById("output").textContent = locationOutput;
      fetchSunriseSunsetData(lat, lng)
        .then((data) => {
          // Display the sunrise and sunset data
          displaySunriseSunsetData(data);
        })
        // Catch sunrise-sunset API errors
        .catch((error) => {
          console.error("Error fetching sunrise-sunset data:", error);
          displayError("Error fetching sunrise and sunset times.");
        });
    })
    // Catch geocoding API errors
    .catch((error) => {
      console.error("Error fetching coordinates:", error);
      displayError("Error fetching location coordinates.");
    });
});

// Function to display sunrise and sunset data
function displaySunriseSunsetData(data) {
  if (data.results.sunrise && data.results.sunset) {
    document.getElementById("sunriseTime").textContent = data.results.sunrise;
    document.getElementById("sunsetTime").textContent = data.results.sunset;
  } else {
    displayError("no data available on said location.");
  }
}

// Function to display error message
function displayError(message) {
  document.getElementById("sunriseTime").textContent = message;
  document.getElementById("sunsetTime").textContent = message;
}
