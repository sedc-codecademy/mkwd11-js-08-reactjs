import { useState, useEffect, useCallback } from "react";
import CountryBox from "./CountryBox";
import DaysCount from "./DaysCount";
import PassengersList from "./PassengersList";

export default function TripPlan({ tripList, removeFromTrip }) {
  const [cost, setCost] = useState(0); // total cost of the trip
  const [daysCount, setDaysCount] = useState(0);

  // Update cost on each change of tripList
  useEffect(() => {
    const newCost = tripList.reduce((acc, country) => {
      return acc + Math.round(country.area / 300);
    }, 1);

    setCost(newCost);
  }, [tripList]);

  const handleDaysCountChange = useCallback(count => {
    setDaysCount(count);
  }, []);

  if (!tripList?.length) {
    return <h1>No countries in the list.</h1>;
  }

  return (
    <>
      <h3 style={{ flexBasis: "100%" }}>Cost: {cost}$</h3>
      <PassengersList />
      <DaysCount
        count={daysCount}
        handleDaysCountChange={handleDaysCountChange}
      />
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
