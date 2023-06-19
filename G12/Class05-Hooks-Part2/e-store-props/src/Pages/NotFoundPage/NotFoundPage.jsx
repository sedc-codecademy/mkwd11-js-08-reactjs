import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="page">
      <div className="page-heading">
        <h2>ERROR 404!</h2>
        <p>Page Not Found</p>
        <Link to="/">Return to home</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
