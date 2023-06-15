const wrapperStyle = {
  maxWidth: "150px",
  margin: "5px",
  padding: "2px",
  border: "1px solid blue",
};

export default function CountryBox({
  name,
  id,
  capital,
  region,
  subregion,
  flagSrc,
  flagAlt,
  addToTrip,
  removeFromTrip,
  showAddButton,
}) {
  return (
    <div style={wrapperStyle}>
      <h3>{name}</h3>
      <p>{capital}</p>
      <p>
        {region} - {subregion}
      </p>
      <img style={{ width: "100%" }} src={flagSrc} alt={flagAlt} />
      {showAddButton ? (
        <button type="button" onClick={() => addToTrip(id)}>
          Add to trip
        </button>
      ) : (
        <button type="button" onClick={() => removeFromTrip(id)}>
          Remove
        </button>
      )}
    </div>
  );
}
