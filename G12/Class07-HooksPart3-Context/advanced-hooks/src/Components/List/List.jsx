import { useEffect, useState } from "react";

const List = ({ generateArray }) => {
  const [indexArray, setIndexArray] = useState([]);

  useEffect(() => {
    console.log("List use effect called");
    setIndexArray(generateArray());
  }, [generateArray]);

  return (
    <p>
      <strong>{indexArray.join(", ")}</strong>
    </p>
  );
};

export default List;
