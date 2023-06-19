import CountryCard from "../CountryCard/CountryCard";
import "./CountryCardContainer.css";

const CountryCardContainer = ({ countries, errorMsg }) => {
  return (
    <div className="CountryCardContainer">
      {!countries && !errorMsg && <h3>Loading...</h3>}
      {errorMsg && <h2>{errorMsg}</h2>}
      {countries &&
        !errorMsg &&
        countries?.map(country => (
          <CountryCard key={Math.random()} country={country} />
        ))}
    </div>
  );
};

export default CountryCardContainer;
