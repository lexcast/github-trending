import React from "react";
import { spokenLanguages } from "@huchenme/github-trending";

function SpokenLanguageFilter({ spokenLanguage, setSpokenLanguage }) {
  return (
    <div className="Filter">
      <select
        value={spokenLanguage}
        onChange={e => setSpokenLanguage(e.target.value)}
      >
        <option value="">Select Spoken Language</option>
        {spokenLanguages.map(lang => (
          <option key={lang.urlParam} value={lang.urlParam}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SpokenLanguageFilter;
