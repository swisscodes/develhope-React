import React from 'react';
import LangaugeProvider from './context/LanguageContext';
import DisplayLanguage from './DisplayLanguage';

function DisplayProvider() {
  return (
    <LangaugeProvider>
      <DisplayLanguage />
    </LangaugeProvider>
  );
}

export default DisplayProvider;
