import React, { useState } from "react";

import Articles from "./Articles";
import Search from "./Search";
import "./blog.css";

function Posts() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div class="blog-intro">
        <div className="blog-left">
          <h1>Know everything there is to banking</h1>
        </div>
      </div>
      <div className="blog">
        <Search query={query} setQuery={setQuery} />
        <Articles query={query} />
      </div>
    </>
  );
}

export default Posts;
