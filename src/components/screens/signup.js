import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";

const signup = () => {
  return (
    <div className="card">
      <div className="brand">
        <div className="logo">
          <InstagramIcon className="icon" />
        </div>
        <div className="brandName">Instagram</div>
      </div>
      <form>
        <input type="text" name="name" placeholder="Enter your Username" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="password" name="email" placeholder="Enter your password" />
        <input type="submit" value="Signup" />
      </form>
      <hr />
      <div className="sign">Already a User?</div>
      <div classname="button">
        <Link to="/Login">
          {" "}
          <input type="submit" value="Login" />
        </Link>
      </div>
    </div>
  );
};

export default signup;
