// Function to validate an email address using a regular expression
export function validateEmail(email) {
  // Regular expression pattern for validating email addresses
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Use the test method to check if the provided email matches the pattern
  return re.test(String(email).toLowerCase());
}
