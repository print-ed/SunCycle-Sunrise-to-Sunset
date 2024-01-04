const ErrorMessages = {
  "Address not found": "The provided address could not be located.",
  "Geocoding API error": "There was a problem with the address lookup service.",
  "Sunrise-sunset API error": "Unable to retrieve sunrise and sunset times.",
  "No coordinates found for the given address.":
    "No coordinates found for the given address.",
};

export function handleAPIError(error, errorCallback) {
  console.error("API Error:", error);

  let errorMessage = getErrorMessage(error);
  let userFriendlyMessage = ErrorMessages[errorMessage] || errorMessage;

  if (errorCallback && typeof errorCallback === "function") {
    errorCallback(userFriendlyMessage);
  } else {
    console.warn("No error callback provided to handleAPIError");
  }
}

function getErrorMessage(error) {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    return "An unexpected error occurred. Please try again.";
  }
}

export function displayError(message) {
  sunriseTime.textContent = "";
  sunsetTime.textContent = "";
  output.textContent = message;
}
