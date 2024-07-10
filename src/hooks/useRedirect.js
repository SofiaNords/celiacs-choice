import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

// Custom hook to handle redirection based on user authentication status
export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        // Refresh the authentication token
        await axios.post("/dj-rest-auth/token/refresh/");
        // If the user is logged in, redirect to the home page
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // If the user is not logged in, also redirect to the home page
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};
