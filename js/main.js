import { fetchSunriseSunsetData } from "./api.js";

document.getElementById("searchButton").addEventListener("click", () => {
  const address = document.getElementById("addressInput").value;
  getCoordinatesFromAddress(address)
    .then(({ lat, lng, locationOutput }) => {
        // Display the location output
        document.getElementById('output').textContent = locationOutput;
      fetchSunriseSunsetData(lat, lng)
        .then((data) => {
          // Display the sunrise and sunset data
          console.log(data); // Replace this with code to update the UI
        })
        .catch((error) => {
          console.error("Error fetching sunrise-sunset data:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching coordinates:", error);
    });
});

async function getCoordinatesFromAddress(address) {
  // Replace with your Geocodify API endpoint and key
  const geocodifyApiUrl = `https://api.geocodify.com/v2/geocode?api_key=txmifcC2HNA6iah4cXCbbiYAbtEDKT9Z&q=${encodeURIComponent(
    address
  )}`;
  const response = await fetch(geocodifyApiUrl);
  const data = await response.json();
  console.log("API Response:", data);
  const lat = data.response.features[0].geometry.coordinates[1];
  const lng = data.response.features[0].geometry.coordinates[0];
  const locationOutput = data.response.features[1].properties.label;
  return { lat, lng, locationOutput };
}
