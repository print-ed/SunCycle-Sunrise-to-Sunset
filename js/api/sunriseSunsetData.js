// Make an API call to https://api.sunrisesunset.io
// TODO: add more error handling
// TODO: hide api key
// TODO: check UTC offset
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
        // TODO: remove console.log
        console.log("Sunrise-sunset API response:", data);
        return data;
      }
    } catch (error) {
      console.log("There was an error!", error);
    }
  }