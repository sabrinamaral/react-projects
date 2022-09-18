import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="page-error">
      <h2>404</h2>
      <h3>somenthing went wrong 🫤</h3>
      <Link to="/" className="btn">
        go back
      </Link>
    </div>
  );
}

export default Error;
