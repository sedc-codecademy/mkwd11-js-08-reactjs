export default function AddToTrip({ addToTrip, id }) {
  return (
    <button type="button" onClick={() => addToTrip(id)}>
      Add to trip
    </button>
  );
}
