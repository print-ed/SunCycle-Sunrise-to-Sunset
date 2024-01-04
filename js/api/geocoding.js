// Make an API call to https://api.geocodify.com
// TODO: hide api key and replace the existing that was pushed to github
// TODO: implement autocomplete from the geocodify api
export async function getCoordinatesFromAddress(address) {
  try {
    const response = await fetch(
      `https://api.geocodify.com/v2/geocode?api_key=txmifcC2HNA6iah4cXCbbiYAbtEDKT9Z&q=${encodeURIComponent(
        address
      )}`
    );

    if (!response.ok) {
      throw new Error(`Geocoding API error: HTTP status ${response.status}`);
    }

    const data = await response.json();

    if (
      data.response &&
      data.response.features.length > 0
    ) {
      const coordinates = data.response.features[0].geometry.coordinates;
      return {
        lat: coordinates[1],
        lng: coordinates[0],
        locationOutput: data.response.features[0].properties.label,
      };
    } else {
      throw new Error("No coordinates found for the given address.");
    }
  } catch (error) {
    // console.error("Error fetching coordinates:", error);
    throw new Error(error.message);
  }
}
