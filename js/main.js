import { fetchSunriseSunsetData } from "./api.js";
import { getCoordinatesFromAddress } from "./api.js";

document.getElementById("searchButton").addEventListener("click", () => {
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
        .catch((error) => {
          console.error("Error fetching sunrise-sunset data:", error);
          displayError("Error fetching sunrise and sunset times.");
        });
    })
    .catch((error) => {
      console.error("Error fetching coordinates:", error);
      displayError("Error fetching location coordinates.");
    });
});

function displaySunriseSunsetData(data) {
  if (data.results) {
    document.getElementById("sunriseTime").textContent = data.results.sunrise;
    document.getElementById("sunsetTime").textContent = data.results.sunset;
  } else {
    displayError("No sunrise and sunset data available.");
  }
}

function displayError(message) {
  document.getElementById("sunriseTime").textContent = message;
  document.getElementById("sunsetTime").textContent = message;
}
