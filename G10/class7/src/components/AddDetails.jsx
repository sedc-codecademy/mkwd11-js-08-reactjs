import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CommentsSection from "./CommentsSection";

const AddDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [add, setAdd] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(addResponse => {
        setAdd(addResponse.data);
      });
  }, [id]);

  return (
    <div className="col-sm mt-2">
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className="card">
        <h2 className="card-header">{add.title}</h2>
        <div className="card-body">
          <p className="card-text">{add.body}</p>
          <CommentsSection id={id} />
        </div>
      </div>
    </div>
  );
};

export default AddDetails;
