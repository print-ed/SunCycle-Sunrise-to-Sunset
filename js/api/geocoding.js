// Make an API call to https://api.geocodify.com
// TODO: add more error handling
// TODO: hide api key
export async function getCoordinatesFromAddress(address) {
  try {
    const response = await fetch(
      // Replace with your Geocodify API key
      `https://api.geocodify.com/v2/geocode?api_key=txmifcC2HNA6iah4cXCbbiYAbtEDKT9Z&q=${encodeURIComponent(
        address
      )}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      // Get data from the response and coordinates from the data
      const data = await response.json();
      const coordinates = data.response.features[0].geometry.coordinates;
      // Return the coordinates and location output
      return {
        lat: coordinates[1],
        lng: coordinates[0],
        locationOutput: data.response.features[0].properties.label,
      };
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }
}
