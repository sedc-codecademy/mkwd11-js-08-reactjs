export default function DaysCount({ count, handleDaysCountChange }) {
  return (
    <div>
      <h3>Days: {count}</h3>
      <input
        type="number"
        onChange={e => handleDaysCountChange(e.target.value)}
      />
    </div>
  );
}
