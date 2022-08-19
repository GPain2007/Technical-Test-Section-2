import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <nav className="text-center">
        {Auth.loggedIn() ? (
          <>
            <Link to="/profile">Me</Link>
            <a href="/">Logout</a>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>ToDos</h1>
      </div>
    </header>
  );
};

export default Header;
