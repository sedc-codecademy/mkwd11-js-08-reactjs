import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AddsContext = createContext({
  adds: [],
});

export const AddsProvider = ({ children }) => {
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      setAdds(response.data);
    });
  }, []);

  return (
    <AddsContext.Provider
      value={{
        adds,
      }}
    >
      {children}
    </AddsContext.Provider>
  );
};
