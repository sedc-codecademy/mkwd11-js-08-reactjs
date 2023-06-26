export const makeApiCall = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log("API RESULT IN API FUNCTION:", result);
  return result;
};
