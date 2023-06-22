import { useEffect, useState } from "react";
import axios from "axios";
import AddItem from "./AddItem";

const AddsList = () => {
  const [adds, setAdds] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      setAdds(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {adds.map(add => (
        <AddItem key={add.id} {...add} />
      ))}
    </div>
  );
};

export default AddsList;
