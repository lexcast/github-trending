import React from "react";
import Repository from "./Repository";

function List({ repositories }) {
  if (repositories.length === 0) {
    return (
      <div className="List-Empty">
        <h1>No repositories found</h1>
      </div>
    );
  }

  return (
    <div className="List">
      {repositories.map(repo => {
        return <Repository key={repo.name} repo={repo} />;
      })}
    </div>
  );
}

export default List;
