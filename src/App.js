import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import LanguageFilter from "./components/LanguageFilter";
import SpokenLanguageFilter from "./components/SpokenLanguageFilter";
import Sort from "./components/Sort";
import Search from "./components/Search";
import { getRepositories, getLanguages, getSpokenLanguages } from "./utils/api";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [language, setLanguage] = useState("");
  const [spokenLanguage, setSpokenLanguage] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [languagesOptions, setLanguagesOptions] = useState([]);
  const [spokenLanguagesOptions, setSpokenLanguagesOptions] = useState([]);

  useEffect(() => {
    const loadOptions = async () => {
        const langaugesResponse = await getLanguages();
        const spokenLanguagesResponse = await getSpokenLanguages();
        setLanguagesOptions(langaugesResponse.data);
        setSpokenLanguagesOptions(spokenLanguagesResponse.data);
    };
    loadOptions();
  }, []);

  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true);
      const repositoriesResponse = await getRepositories({ language, spoken_language_code: spokenLanguage });
      setRepositories(repositoriesResponse.data);
      setLoading(false);
    };
    loadRepos();
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

  if (search) {
    sortedRepos = sortedRepos.filter(r => r.name.toLowerCase().includes(search.trim().toLowerCase()));
  }

  return (
    <div className="App">
      <div className="Header">
        <Search search={search} setSearch={setSearch} />
        <Sort sort={sort} setSort={setSort} />
        <LanguageFilter
          languages={languagesOptions}
          language={language}
          setLanguage={setLanguage}
        />
        <SpokenLanguageFilter
          spokenLanguages={spokenLanguagesOptions}
          spokenLanguage={spokenLanguage}
          setSpokenLanguage={setSpokenLanguage}
        />
      </div>
      <List repositories={sortedRepos} />
    </div>
  );
}

export default App;
