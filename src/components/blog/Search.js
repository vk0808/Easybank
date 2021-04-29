import React from "react";

function Search({ query, setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="search"
          value={query}
          onInput={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
