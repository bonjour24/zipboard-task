import React, { Fragment, useState } from "react";
import { postCollection } from "../api/links";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

export const Hello = (props) => {
  const [comment, setComment] = useState("");
  const posts = useTracker(() => postCollection.find({}).fetch());
  const user = useTracker(() => Meteor.user());

  const insertPost = (e) => {
    e.preventDefault();
    postCollection.insert({
      text: comment,
      userId: user._id,
      author: user.username,
      createdAt: new Date(),
    });
    setComment("");
  };

  const handleDelete = (id) => {
    console.log(id);
    postCollection.remove(id);
  };

  return (
    <Fragment>
      <div id="" className="container text-center formDiv">
        <div id="postDiv">
          {posts.map((post, index) => (
            <div className="card w-100 my-2 p-2" key={post.createdAt}>
              <div className="card-body text-left">{post.text}</div>
              <div className="card-footer text-muted text-right">
                Posted by {post.author}
                {user && post.author == user.username && (
                  <i
                    onClick={() => handleDelete(post._id)}
                    className="fa fa-trash text-danger mx-1"
                  ></i>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container my-5 text-center">
        {user ? (
          <form onSubmit={insertPost}>
            <textarea
              type="text"
              className="form-control"
              name="post"
              required
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="text-left">
              <button className="btn btn-outline-success my-1" type="submit">
                Submit Post!
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center ">
            <Link to="/login">
              <button id="orangeButton" type="submit" className="btn w-50 ">
                Log in to post!
              </button>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
