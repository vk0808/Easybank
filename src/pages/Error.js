import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as NotFound } from "../images/page-not-found-outline.svg";
import "../css/App.css";

function Error() {
  return (
    <div className="not-found">
      <NotFound />
      <Link className="request-btn" to="/">
        Go back to Home
      </Link>
    </div>
  );
}

export default Error;
