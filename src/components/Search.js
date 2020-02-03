import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="Filter">
      <input
        placeholder="Search by repository name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
