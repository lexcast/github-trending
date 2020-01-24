import React from "react";

function Sort({ sort, setSort }) {
  return (
    <div className="Filter">
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Select Sort</option>
        <option value="STARS">Stars</option>
        <option value="FORKS">Forks</option>
      </select>
    </div>
  );
}

export default Sort;
