import axios from "axios";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  console.log("countries", countries);

  return (
    <div style={wrapperStyle}>
      <div style={countriesListStyle}>
        {countries.map(country => (
          <CountryBox
            key={country.cca2}
            name={country.name.common}
            capital={country.capital?.[0]}
            region={country.region}
            subregion={country.subregion}
            flagSrc={country.flags.png}
            flagAlt={country.flags.alt}
          />
        ))}
      </div>
      <div style={countriesListStyle}>test2</div>
    </div>
  );
}

// name: name.common
// capital: capital[0]
// region: region
// subregion: subregion
// flag: flags.png / alt: flags.alt
