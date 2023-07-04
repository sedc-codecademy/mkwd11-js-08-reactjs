import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../common/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = () => {
    dispatch(login(email, password));
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={onFormSubmit}>
        Login
      </button>
    </div>
  );
};

export default Login;
