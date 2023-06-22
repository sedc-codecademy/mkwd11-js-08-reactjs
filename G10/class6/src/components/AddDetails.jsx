import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [add, setAdd] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
    ]).then(([addResponse, commentsResponse]) => {
      setAdd(addResponse.data);
      setComments(commentsResponse.data);
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
          <ul className="list-group list-group-flush">
            {comments.map(comment => (
              <li key={comment.id} className="list-group-item">
                <strong>{comment.name}</strong>
                <p>{comment.body}</p>
                <em>Author: {comment.email}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddDetails;
