import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";

const homeCard = () => {
  return (
    <>
      <div className="homeCard">
        <div className="postedBy">
          <img
            className="dp"
            alt=""
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          />
          <span className="user">Jenner123</span>
        </div>
        <img
          alt=""
          className="postimg"
          src="https://images.unsplash.com/photo-1476611317561-60117649dd94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
        <div className="content">
          <Link to="/xyz">
            <FavoriteBorderIcon className="like" />
          </Link>
          <div className="title">Bubbly bloo</div>
          <div className="body">I found this awesome click in my gallary</div>
        </div>
        <div className="comment-box">
          <input type="text" placeholder="Add a comment..." />
          <input type="submit" value="Add" />
        </div>
      </div>
    </>
  );
};

export default homeCard;
