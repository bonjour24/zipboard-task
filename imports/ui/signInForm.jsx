import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Link, useHistory } from "react-router-dom";

export const SignInform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    Accounts.createUser({
      username: username,
      password: password,
    });
    history.push("/");
  };
  return (
    <div className="container formDiv">
      <h1 className="display-5 text-center">Sign Up</h1>
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
          className="form-control"
          placeholder="Enter password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center">
          <button id="orangeButton" className="btn btn-primary w-50 my-4 " type="submit">
            Sign Up!
          </button>
        </div>
        Already registered? Login <Link to="/login">here!</Link>
      </form>
    </div>
  );
};
