import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import LanguageFilter from "./components/LanguageFilter";
import SpokenLanguageFilter from "./components/SpokenLanguageFilter";
import Sort from "./components/Sort";
import { fetchRepositories } from "@huchenme/github-trending";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [language, setLanguage] = useState("");
  const [spokenLanguage, setSpokenLanguage] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRepositories({ language, spoken_language_code: spokenLanguage }).then(
      repositories => {
        setRepositories(repositories);
        setLoading(false);
      }
    );
  }, [language, spokenLanguage]);

  if (loading) {
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  let sortedRepos = repositories;
  if (sort) {
    sortedRepos = [...repositories].sort((a, b) => {
      if (sort === "STARS") {
        return a.stars > b.stars ? -1 : a.stars < b.stars ? 1 : 0;
      }

      if (sort === "FORKS") {
        return a.forks > b.forks ? -1 : a.forks < b.forks ? 1 : 0;
      }

      return 0;
    });
  }

  return (
    <div className="App">
      <div className="Header">
        <Sort sort={sort} setSort={setSort} />
        <LanguageFilter language={language} setLanguage={setLanguage} />
        <SpokenLanguageFilter
          spokenLanguage={spokenLanguage}
          setSpokenLanguage={setSpokenLanguage}
        />
      </div>
      <List repositories={sortedRepos} />
    </div>
  );
}

export default App;
