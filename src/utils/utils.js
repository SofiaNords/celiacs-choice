import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

// Fetch additional data and append it to the existing resource
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id) ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) { }
};

// Set the timestamp for the refresh token
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

// Check if the refresh token should be refreshed
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

// Remove the refresh token timestamp
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
