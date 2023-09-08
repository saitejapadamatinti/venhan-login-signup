export const loginUser = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 200) {
        try {
          const data = await response.json();
          if (data.message === "Login successful" && data.user) {
            return { success: true, user: data.user };
          } else {
            return { success: false, error: "Invalid response data" };
          }
        } catch (jsonError) {
          return { success: false, error: "Invalid JSON response" };
        }
      } else {
        try {
          const errorData = await response.json();
          return { success: false, error: errorData.error };
        } catch (jsonError) {
          return { success: false, error: "Invalid JSON error response" };
        }
      }
    } catch (error) {
      console.error("Error:", error);
      return { success: false, error: "An error occurred while logging in" };
    }
  };
  