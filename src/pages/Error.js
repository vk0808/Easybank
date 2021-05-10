import React from "react";

import { ReactComponent as NotFound } from "../images/page-not-found-outline.svg";
import "../css/App.css";

function Error() {
  return (
    <div className="not-found">
      <NotFound />
    </div>
  );
}

export default Error;
