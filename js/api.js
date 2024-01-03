// Make an API call to https://api.sunrisesunset.io
async function fetchSunriseSunsetData(lat, lng) {
  try {
    const response = await fetch(
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

export { fetchSunriseSunsetData };
