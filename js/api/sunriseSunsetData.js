// Make an API call to https://api.sunrisesunset.io
// TODO: hide api key
// TODO: add a way to gather more data from the API besides sunrise and sunset
export async function fetchSunriseSunsetData(lat, lng) {
    try {
      const response = await fetch(
        // No need for an API key here
        `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        // Get data from the response and return it
        const data = await response.json();
        // console.log("Sunrise-sunset API response:", data);
        return data;
      }
    } catch (error) {
      // console.error("There was an error!", error);
      throw new Error("There was an error fetching sunrise and sunset data.");
    }
  }