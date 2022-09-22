import React from "react";
import { Link } from "react-router-dom";

function Error({ error }) {
  return (
    <div className="page-error">
      <h2>somenthing went wrong 🫤</h2>
      <p>Error: {error.msg}</p>
      <Link to="/" className="btn">
        go back
      </Link>
    </div>
  );
}

export default Error;
