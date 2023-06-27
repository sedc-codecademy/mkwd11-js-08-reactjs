import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AddsContext = createContext({
  adds: [],
  addAdvertisement: () => {},
  updateAdvertisement: () => {},
  deleteAdvertisement: () => {},
});

export const AddsProvider = ({ children }) => {
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      setAdds(response.data);
    });
  }, []);

  const addAdvertisement = newAdd => {
    setAdds(prevAdds => [...prevAdds, newAdd]);
  };

  const updateAdvertisement = updatedAdvertisement => {
    setAdds(prevState =>
      prevState.map(add =>
        add.id === updatedAdvertisement.id ? updatedAdvertisement : add
      )
    );
  };

  const deleteAdvertisement = id => {
    setAdds(prevAdds => prevAdds.filter(add => add.id !== id));
  };

  return (
    <AddsContext.Provider
      value={{
        adds,
        addAdvertisement,
        updateAdvertisement,
        deleteAdvertisement,
      }}
    >
      {children}
    </AddsContext.Provider>
  );
};
