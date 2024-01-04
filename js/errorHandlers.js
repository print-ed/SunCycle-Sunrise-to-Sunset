export function handleAPIError(error) {
  console.error("API Error:", error);

  let errorMessage;

  if (error instanceof Error) {
    // Standard Error object with message property
    errorMessage = error.message;
  } else if (typeof error === "string") {
    // Error is just a string
    errorMessage = error;
  } else {
    // Unknown error format
    errorMessage = "An unexpected error occurred. Please try again.";
  }

  let userFriendlyMessage;

  if (errorMessage.includes("Address not found")) {
    userFriendlyMessage = "The provided address could not be located.";
  } else if (errorMessage.includes("Geocoding API error")) {
    userFriendlyMessage =
      "There was a problem with the address lookup service.";
  } else if (errorMessage.includes("Sunrise-sunset API error")) {
    userFriendlyMessage = "Unable to retrieve sunrise and sunset times.";
  } else if (
    errorMessage.includes("No coordinates found for the given address.")
  ) {
    userFriendlyMessage = "No coordinates found for the given address.";
  } else {
    userFriendlyMessage = errorMessage;
  }

  displayError(userFriendlyMessage);
}

export function displayError(message) {
  sunriseTime.textContent = "";
  sunsetTime.textContent = "";
  output.textContent = message;
}
