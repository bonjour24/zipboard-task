import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Link, useHistory } from "react-router-dom";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
    history.push("/");
  };
  return (
    <div className="container formDiv">
      <h1 className="display-5 text-center">Login</h1>
      <form onSubmit={submit} className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="form-control"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center">
          <button
            id="orangeButton"
            className="btn my-4 text-center  w-50"
            type="submit"
          >
            Log In
          </button>
        </div>
        Not Registered? Registere <Link to="/sign">here!</Link>
      </form>
    </div>
  );
};
