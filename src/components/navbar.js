import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";

const navbar = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="left item">
            <Link to="/" className="brand">
              <span className="logo">
                <InstagramIcon className="icon" />
              </span>
              <span className="brandName">Instagram</span>
            </Link>
          </div>
          <div className="right item">
            <Link to="/login">
              <span className="login">Login </span>
            </Link>
            <Link to="/signup">
              <span className="signup">SignUp </span>
            </Link>
            <Link to="/profile">
              <span className="profile">Profile </span>
            </Link>
            <Link to="/createPost">
              <span className="create">CreatePost </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
