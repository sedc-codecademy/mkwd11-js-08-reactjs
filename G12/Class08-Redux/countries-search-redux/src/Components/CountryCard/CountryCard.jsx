import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <div className="CountryCard">
      <h3>
        {country.name.common} {country.flag}
      </h3>
      <img src={country.flags.png} alt={country.name.common + "'s flag"} />
      <div className="country-details">
        <p>Capital: {country.capital?.length ? country.capital[0] : "none"}</p>
        <p>Area: {country.area} sq/m</p>
        <p>Population: {(country.population / 1000000).toFixed(3)} million</p>
      </div>
    </div>
  );
};

export default CountryCard;
