import React, { useState } from 'react';
import { useLanguageContext } from './context/LanguageContext';

function DisplayLanguage() {
  const langValueContext = useLanguageContext();
  const [lang, setLang] = useState('English');
  langValueContext.lang = lang;
  return (
    <div>
      <label htmlFor='language'>Choose a Language:</label>
      <select
        name='langauges'
        id='language'
        value={lang}
        onChange={(e) => selectedLang(e)}
      >
        <option value='Yoruba'>Yoruba</option>
        <option value='English'>English</option>
        <option value='Turkish'>Turkish</option>
        <option value='Italian'>Italian</option>
      </select>
      <h1>Selected language is {langValueContext.lang}</h1>
    </div>
  );

  function selectedLang(e) {
    setLang(() => e.target.value);
  }
}

export default DisplayLanguage;
