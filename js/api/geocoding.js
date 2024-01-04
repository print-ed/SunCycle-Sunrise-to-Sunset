// Make an API call to https://api.geocodify.com
export async function getCoordinatesFromAddress(address) {
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