import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { user } = props;
  console.log(user);
  const logout = () => Meteor.logout();
  return (
    <Fragment>
      <nav
        style={{
          backgroundColor: "#ffa500",
          boxShadow: "3px 0px 3px 3px grey",
        }}
        className="navbar navbar-expand-lg mt-0 navbar-light"
      >
        <Link className="navbar-brand" to="/">
          zipBoard
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        {user ? (
          <Fragment>
              Welcome, {user.username}!
            <button onClick={logout} className="btn text-dark">
              Logout
            </button>
          </Fragment>
        ) : (
          <Link to="/login">
            <button className="btn text-dark">Login/SignUp</button>
          </Link>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
