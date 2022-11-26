import React, { useState } from 'react';
import { useLanguageContext } from './context/LanguageContext';

function DisplayLanguage() {
  const langValueContext = useLanguageContext();
  const [lang, setLang] = useState('English');
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
    </div>
  );

  function selectedLang(e) {
    setLang(() => e.target.value);
    langValueContext.lang = lang;
  }
}

export default DisplayLanguage;
