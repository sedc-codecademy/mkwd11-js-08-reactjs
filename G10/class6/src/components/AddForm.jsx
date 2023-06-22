import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: 1,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Add title..."
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="body">Description</label>
        <div className="form-floating">
          <textarea
            name="body"
            id="body"
            rows="10"
            className="form-control"
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-danger">Cancel</button>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddForm;
