import React from "react";

function Repository({ repo }) {
  return (
    <div className="Repo">
      <img className="Repo-Image" src={repo.avatar} alt={repo.name} />
      <div>
        <a className="Repo-Title" href={repo.url}>
          {repo.name}
        </a>
        <a className="Repo-Author" href={`//github.com/${repo.author}`}>
          @{repo.author}
        </a>
        <div className="Repo-Meta">
          {repo.language && (
            <>
              <div
                className="Repo-Lang"
                style={{ backgroundColor: repo.languageColor }}
              />
              <span>{repo.language}</span>
            </>
          )}
          <span>Stars: {repo.stars}</span>
          <span>Forks: {repo.forks}</span>
        </div>
      </div>
    </div>
  );
}

export default Repository;
