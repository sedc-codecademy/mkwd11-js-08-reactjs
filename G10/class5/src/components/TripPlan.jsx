import { useState, useEffect } from "react";
import CountryBox from "./CountryBox";

export default function TripPlan({ tripList, removeFromTrip }) {
  const [cost, setCost] = useState(0); // total cost of the trip

  // Update cost on each change of tripList
  useEffect(() => {
    const newCost = tripList.reduce((acc, country) => {
      return acc + Math.round(country.area / 300);
    }, 1);

    setCost(newCost);
  }, [tripList]);

  return (
    <>
      <h3 style={{ flexBasis: "100%" }}>Cost: {cost}$</h3>
      {tripList.map(country => (
        <CountryBox
          key={country.cca2 + "trip-list-country"} // use unique values for KEY
          id={country.cca2}
          name={country.name.common}
          capital={country.capital?.[0]}
          region={country.region}
          subregion={country.subregion}
          flagSrc={country.flags.png}
          flagAlt={country.flags.alt}
          removeFromTrip={removeFromTrip}
          showAddButton={false}
        />
      ))}
    </>
  );
}
