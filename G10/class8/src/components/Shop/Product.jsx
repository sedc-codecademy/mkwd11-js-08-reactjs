const Product = ({ imgUrl, title, description, price }) => {
  return (
    <div className="col-6">
      <div className="card">
        <div style={{ height: "230px" }}>
          <img
            src={imgUrl}
            alt={title}
            className="card-img-top"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {price}$</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
