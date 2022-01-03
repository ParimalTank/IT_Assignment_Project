import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/course");
  };
  return (
    <div className="container">
      <form class="form-group col-md-6 m-5" onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        {/* <div className="form-group mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div> */}

        <a href="/course">
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Sign in With Google
          </button>
        </a>
        <p className="forgot-password text-left mt-4">
          New User ? <a href="/signup">Sign Up Here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
