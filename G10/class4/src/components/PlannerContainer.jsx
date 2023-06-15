import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import CountryBox from "./CountryBox";

const wrapperStyle = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
};

const countriesListStyle = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  alignItems: "flex-start",
  maxWidth: "50%",
  border: "1px solid black",
};

export default function PlannerContainer() {
  const [countries, setCountries] = useState([]);
  const [tripList, setTripList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cost, setCost] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      console.log(response.data);
      setCountries(response.data);
      inputRef.current.focus();
    });
  }, []);

  useEffect(() => {
    const newCost = tripList.reduce((acc, country) => {
      return acc + Math.round(country.area / 300);
    }, 1);

    setCost(newCost);
  }, [tripList]);

  const filteredCountries = useMemo(() => {
    return countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [countries, searchTerm]);

  const addToTrip = id => {
    const countryToAdd = countries.find(country => country.cca2 === id);
    setTripList(prevTripListCountries => [
      ...prevTripListCountries,
      countryToAdd,
    ]);
    setCountries(prevCountries =>
      prevCountries.filter(country => country.cca2 !== id)
    );

    // console.log("trip list", tripList);
  };

  // useEffect(() => {
  //   console.log("trip list vo useEffect", tripList);
  // }, [tripList]);

  const removeFromTrip = id => {
    const countryToRemove = tripList.find(country => country.cca2 === id);
    setCountries(prevCountries => [countryToRemove, ...prevCountries]);
    setTripList(prevTripListCountries =>
      prevTripListCountries.filter(country => country.cca2 !== id)
    );
  };

  console.log("countries", countries);

  return (
    <div style={wrapperStyle}>
      <div style={countriesListStyle}>
        <input
          style={{ flexBasis: "100%", height: "50px" }}
          type="search"
          ref={inputRef}
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
        {filteredCountries.map(country => (
          <CountryBox
            key={country.cca2 + "initial-country"}
            id={country.cca2}
            name={country.name.common}
            capital={country.capital?.[0]}
            region={country.region}
            subregion={country.subregion}
            flagSrc={country.flags.png}
            flagAlt={country.flags.alt}
            addToTrip={addToTrip}
            removeFromTrip={removeFromTrip}
            showAddButton={true}
          />
        ))}
      </div>
      <div style={countriesListStyle}>
        <h3 style={{ flexBasis: "100%" }}>Cost: {cost}$</h3>
        {tripList.map(country => (
          <CountryBox
            key={country.cca2 + "trip-list-country"}
            id={country.cca2}
            name={country.name.common}
            capital={country.capital?.[0]}
            region={country.region}
            subregion={country.subregion}
            flagSrc={country.flags.png}
            flagAlt={country.flags.alt}
            addToTrip={addToTrip}
            removeFromTrip={removeFromTrip}
            showAddButton={false}
          />
        ))}
      </div>
    </div>
  );
}

// name: name.common
// capital: capital[0]
// region: region
// subregion: subregion
// flag: flags.png / alt: flags.alt
