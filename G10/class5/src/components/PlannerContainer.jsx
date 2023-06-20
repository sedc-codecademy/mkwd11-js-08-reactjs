import axios from "axios";
import { useEffect, useState } from "react";
import TripPlan from "./TripPlan";
import CountriesList from "./CountriesList";

// Using CSS like this is similar to using the "CSS in JS" way, read more on: https://cssinjs.org/
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
  const [countries, setCountries] = useState([]); // all counties
  const [tripList, setTripList] = useState([]); // countries that are added to my personal trip list

  useEffect(() => {
    // Try to avoid using async callbacks in useEffect
    axios.get("https://restcountries.com/v3.1/all").then(response => {
      setCountries(response.data); // set all countries received from the BE api
    });
  }, []);

  const addToTrip = id => {
    // find the country
    const countryToAdd = countries.find(country => country.cca2 === id);
    // add the country to the trip list (right column)
    setTripList(prevTripListCountries => [
      ...prevTripListCountries,
      countryToAdd,
    ]);

    // remove the country from the list of all countries (left column)
    setCountries(prevCountries =>
      prevCountries.filter(country => country.cca2 !== id)
    );
    // updated state is NOT AVAILABLE here. State is updated within this loop, and you can access the value ONLY the next event loop.
    // You can't await setState because setState technically doesn't return a Promise to be awaited
    // console.log("trip list", tripList);
  };

  // Regarding previous comment above, you can only get updated state in a useEffect, which will be executed when the state is updated
  // useEffect(() => {
  //   console.log("trip list vo useEffect", tripList);
  // }, [tripList]);

  const removeFromTrip = id => {
    // find the country to be removed
    const countryToRemove = tripList.find(country => country.cca2 === id);
    // add the country back to the all countries list (left column)
    setCountries(prevCountries => [countryToRemove, ...prevCountries]);
    // remove the country from the list of selected countries
    setTripList(prevTripListCountries =>
      prevTripListCountries.filter(country => country.cca2 !== id)
    );
  };

  return (
    <div style={wrapperStyle}>
      <div style={countriesListStyle}>
        <CountriesList countries={countries} addToTrip={addToTrip} />
      </div>
      <div style={countriesListStyle}>
        <TripPlan tripList={tripList} removeFromTrip={removeFromTrip} />
      </div>
    </div>
  );
}

// Countries model structure
// name: name.common
// capital: capital[0]
// region: region
// subregion: subregion
// flag: flags.png / alt: flags.alt
