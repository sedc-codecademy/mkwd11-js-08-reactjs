export default function RegionInput({ name, setRegion }) {
  return (
    <>
      <input
        type="radio"
        id={name}
        name="region"
        value={name}
        onChange={e => setRegion(e.target.value)}
      />
      <label htmlFor={name}>{name || "None"}</label>
    </>
  );
}
