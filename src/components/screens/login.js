import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";

const login = () => {
  return (
    <div className="card">
      <div className="brand">
        <div className="logo">
          <InstagramIcon className="icon" />
        </div>
        <div className="brandName">Instagram</div>
      </div>
      <form>
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="password" name="email" placeholder="Enter your password" />
        <input type="submit" value="Login" />
      </form>
      <div className="forgetPassword">
        <Link to="/resetPassword">Forgot Password?</Link>
      </div>
      <hr />
      <div className="sign">Not yet Registered?</div>
      <div classname="button">
        <Link to="/signup">
          {" "}
          <input type="submit" value="Signup" />
        </Link>
      </div>
    </div>
  );
};

export default login;
