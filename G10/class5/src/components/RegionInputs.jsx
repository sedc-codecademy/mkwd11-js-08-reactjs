import RegionInput from "./RegionInput";

const regions = [
  "Americas",
  "Asia",
  "Africa",
  "Europe",
  "Oceania",
  "Antarctic",
  "",
];

export default function RegionInputs({ setRegion }) {
  return regions.map(regionName => (
    <RegionInput key={regionName} setRegion={setRegion} name={regionName} />
  ));
}
