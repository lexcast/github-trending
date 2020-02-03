import React from "react";

function LanguageFilter({ language, setLanguage, languages }) {
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
