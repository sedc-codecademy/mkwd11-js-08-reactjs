import { useState, useMemo } from "react";
import CountryBox from "./CountryBox";
import SearchInput from "./SearchInput";

export default function CountriesList({ countries, addToTrip }) {
  const [searchTerm, setSearchTerm] = useState(""); // value in the search input

  // Using useMemo to prevent unnecessary rerenders
  const filteredCountries = useMemo(() => {
    return countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [countries, searchTerm]);

  return (
    <>
      <SearchInput setSearchTerm={setSearchTerm} />
      {filteredCountries.map(country => (
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
      ))}
    </>
  );
}
