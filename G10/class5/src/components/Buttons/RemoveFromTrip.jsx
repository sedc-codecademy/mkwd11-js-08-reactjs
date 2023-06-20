export default function RemoveFromTrip({ removeFromTrip, id }) {
  return (
    <button type="button" onClick={() => removeFromTrip(id)}>
      Remove
    </button>
  );
}
