import React from "react";
import { languages } from "@huchenme/github-trending";

function LanguageFilter({ language, setLanguage }) {
  return (
    <div className="Filter">
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="">Select Language</option>
        {languages.map(lang => (
          <option key={lang.urlParam} value={lang.urlParam}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageFilter;
