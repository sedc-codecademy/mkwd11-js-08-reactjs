import axios from "axios";

// AXIOS IS LIBRARY TO MAKE API CALLS
export const api_request = async (url) => {
  const response = await axios.get(url);

  // console.log("axios response", response);

  return response.data;
};
