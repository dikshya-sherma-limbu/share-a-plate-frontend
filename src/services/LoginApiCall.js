export const login = async (email, password) => {
  // This is a placeholder for the login logic
  console.log("Email:", email);
  console.log("Password:", password);
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  // Parse the JSON response body
  await response.json().then((data) => {
    // Save the token in sessionStorage if the login is successful for later use
    sessionStorage.setItem("jwtToken", data.token);
  });
};
