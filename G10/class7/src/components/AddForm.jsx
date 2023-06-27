import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AddsContext } from "../common/context/AddsContext";

// errors = {
//   title: "Title is required",
//   body: "Body is required",
// };

const AddForm = () => {
  const { id } = useParams();

  const { addAdvertisement, updateAdvertisement } = useContext(AddsContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});

  const isEditing = useMemo(() => !!id, [id]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      setTitle(res.data.title);
      setBody(res.data.body);
    });
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    if (!isEditing) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );
      addAdvertisement(response.data);
    } else {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          title,
          body,
          userId: 1,
        }
      );
      updateAdvertisement(response.data);
    }

    navigate("/");
  };

  const validateForm = useCallback(() => {
    console.log("validating");
    const validationErrors = {};

    if (!title.trim()) {
      validationErrors.title = "Title is required";
    }

    if (!body.trim()) {
      validationErrors.body = "Description is required";
    }

    return validationErrors;
  }, [title, body]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="title"
            value={title}
            className="form-control"
            placeholder="Add title..."
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        {errors.title && <span>{errors.title}</span>}
      </div>
      <div>
        <label htmlFor="body">Description</label>
        <div className="form-floating">
          <textarea
            name="body"
            id="body"
            value={body}
            rows="10"
            className="form-control"
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>
        {errors.body && <span>{errors.body}</span>}
      </div>
      <button className="btn btn-danger">Cancel</button>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddForm;
