const wrapperStyle = {
  maxWidth: "150px",
  margin: "5px",
  padding: "2px",
  border: "1px solid blue",
};

export default function CountryBox({
  name,
  capital,
  region,
  subregion,
  flagSrc,
  flagAlt,
}) {
  return (
    <div style={wrapperStyle}>
      <h3>{name}</h3>
      <p>{capital}</p>
      <p>
        {region} - {subregion}
      </p>
      <img style={{ width: "100%" }} src={flagSrc} alt={flagAlt} />
    </div>
  );
}
