import { useState, useMemo, useEffect } from "react";
import CountryBox from "./CountryBox";
import SearchInput from "./SearchInput";
import RegionInputs from "./RegionInputs";

export default function CountriesList({ countries, addToTrip }) {
  const [searchTerm, setSearchTerm] = useState(""); // value in the search input
  const [region, setRegion] = useState("");

  // Using useMemo to prevent unnecessary rerenders
  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      if (region && searchTerm) {
        return (
          country.name.common
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) && country.region === region
        );
      } else if (region) {
        return country.region === region;
      } else if (searchTerm) {
        return country.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else {
        return true;
      }
    });
  }, [countries, searchTerm, region]);

  // useEffect(() => {
  //   console.log(region);
  // }, [region]);

  return (
    <>
      <SearchInput setSearchTerm={setSearchTerm} />
      <RegionInputs setRegion={setRegion} />
      {!filteredCountries?.length ? (
        <h1>No countries found.</h1>
      ) : (
        filteredCountries.map(country => (
          <CountryBox
            key={country.cca2 + "initial-country"} // use unique values for KEY
            id={country.cca2}
            name={country.name.common}
            capital={country.capital?.[0]}
            region={country.region}
            subregion={country.subregion}
            flagSrc={country.flags.png}
            flagAlt={country.flags.alt}
            addToTrip={addToTrip}
            showAddButton={true}
          />
        ))
      )}
    </>
  );
}
