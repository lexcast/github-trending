import React from "react";

function SpokenLanguageFilter({ spokenLanguage, setSpokenLanguage, spokenLanguages}) {
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
