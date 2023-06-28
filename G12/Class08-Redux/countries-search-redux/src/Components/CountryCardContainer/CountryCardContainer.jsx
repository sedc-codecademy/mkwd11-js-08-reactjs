import { useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import "./CountryCardContainer.css";

const CountryCardContainer = () => {
  const {
    value: countries,
    status,
    error,
  } = useSelector(state => state.countries);

  return (
    <div className="CountryCardContainer">
      {status === "loading" && <h3>Loading...</h3>}
      {status === "fail" && <h2>{error}</h2>}
      {status === "success" &&
        countries?.map(country => (
          <CountryCard key={Math.random()} country={country} />
        ))}
    </div>
  );
};

export default CountryCardContainer;
