import axios from "axios";
import { useContext } from "react";
import { AddsContext } from "../common/context/AddsContext";

const DeleteAdd = ({ id }) => {
  const { deleteAdvertisement } = useContext(AddsContext);

  const onDelete = async () => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    deleteAdvertisement(id);
  };

  return (
    <button className="btn btn-danger" onClick={onDelete}>
      Delete
    </button>
  );
};

export default DeleteAdd;
