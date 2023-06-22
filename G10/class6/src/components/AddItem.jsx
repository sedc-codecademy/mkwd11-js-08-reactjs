import { Link } from "react-router-dom";

const AddItem = ({ id, title, userId, body }) => {
  return (
    <div className="col-sm mt-2">
      <div className="card">
        <h3 className="card-header">{title}</h3>
        <div className="card-body">
          <p className="card-text">{body}</p>
          <Link to={`/adds/${id}`} className="btn btn-primary">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
