import React from "react";
import { Link } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";

const profile = () => {
  return (
    <>
      <div className="p_container">
        <div className="info">
          <div className="dp" />
          <div className="user">
            <p>@alisha13</p>
            <p>Alisha Kelly</p>
            <p>
              <i>Catch me if u can!!</i>
            </p>
            <div className="editicon">
              <Link to="/xyz">Edit profile</Link>
              <CreateIcon />
            </div>
          </div>
        </div>
        <div className="follow">
          <div className="numPosts">
            <Link to="/x">41 Posts</Link>
          </div>
          <div className="followers">
            <Link to="/x">498 Followers</Link>
          </div>
          <div className="following">
            <Link to="/x">500 Following</Link>
          </div>
        </div>
        <div className="posts">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
      </div>
    </>
  );
};

export default profile;
