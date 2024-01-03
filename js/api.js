// Make an API call to https://api.sunrisesunset.io
async function fetchSunriseSunsetData(lat, lng) {
  try {
    const response = await fetch(
      // Replace with your sunrise-sunset API endpoint and key
      `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("There was an error!", error);
  }
}

// Make an API call to https://api.geocodify.com
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
  const locationOutput = data.response.features[0].properties.label;
  return { lat, lng, locationOutput };
}

export { fetchSunriseSunsetData, getCoordinatesFromAddress };
