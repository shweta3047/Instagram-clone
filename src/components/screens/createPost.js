import React from "react";
import { Link } from "react-router-dom";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const create = () => {
  return (
    <>
      <div className="createPost">
        <div className="content">
          <div className="head">
            Create post <BorderColorIcon className="icon" />
          </div>
          <div className="title">
            <input type="text" placeholder="Title" />
          </div>
          <div className="body">
            <input type="text" placeholder="Body" />
          </div>
          <div className="file">
            <span>Upload Image: </span>
            <input type="file" />
          </div>
          <div className="submit">
            <input type="submit" value="Submit Post" />
          </div>
        </div>
      </div>
    </>
  );
};

export default create;
