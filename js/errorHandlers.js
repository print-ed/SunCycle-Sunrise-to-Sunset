const ErrorMessages = {
  "Address not found": "The provided address could not be located.",
  "Geocoding API error": "There was a problem with the address lookup service.",
  "Sunrise-sunset API error": "Unable to retrieve sunrise and sunset times.",
  "No coordinates found for the given address.":
    "No coordinates found for the given address.",
};

// Handle errors from API calls
export function handleAPIError(error, errorCallback) {
  // console.error("API Error:", error);

  // Get the error message
  let errorMessage = getErrorMessage(error);
  // Get the user-friendly error message
  let userFriendlyMessage = ErrorMessages[errorMessage] || errorMessage;

  // Call the error callback
  if (errorCallback && typeof errorCallback === "function") {
    errorCallback(userFriendlyMessage);
  } else {
    console.warn("No error callback provided to handleAPIError");
  }
}

// Get the error message from an error object
function getErrorMessage(error) {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    return "An unexpected error occurred. Please try again.";
  }
}

// Display an error message to the user
export function displayError(message) {
  sunriseTime.textContent = "";
  sunsetTime.textContent = "";
  output.textContent = message;
}
