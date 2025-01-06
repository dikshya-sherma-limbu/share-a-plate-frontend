export const login = async (email, password) => {
  try {
    const response = await fetch("/Api/Account/Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: "include", // Include credentials if you're using cookies
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Login error:", response.status, errorData);
      throw new Error(`Login failed: ${response.status}`);
    }

    const token = await response.json();
    if (token) {
      sessionStorage.setItem("jwtToken", token);
      return token;
    } else {
      throw new Error("No token received");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
