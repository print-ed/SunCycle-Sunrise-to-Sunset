import { fetchSunriseSunsetData } from "./api.js"

const lat = 40.730610;
const lng = -73.935242;

fetchSunriseSunsetData(lat, lng).then(data => {
 // Do something with the data
 console.log(data);
}).catch(error => {
 // Handle any errors
 console.log(error);
});
