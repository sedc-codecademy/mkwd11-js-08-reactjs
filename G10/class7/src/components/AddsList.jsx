import { useContext } from "react";
import AddItem from "./AddItem";
import { AddsContext } from "../common/context/AddsContext";

const AddsList = () => {
  const { adds } = useContext(AddsContext);

  return (
    <div>
      {adds.map(add => (
        <AddItem key={add.id} {...add} />
      ))}
    </div>
  );
};

export default AddsList;
