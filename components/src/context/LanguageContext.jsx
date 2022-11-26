import { createContext, useContext } from 'react';

const languageContext = createContext({});
export const useLanguageContext = () => useContext(languageContext);

export default function LangaugeProvider({ children }) {
  return (
    <languageContext.Provider value={{}}>{children}</languageContext.Provider>
  );
}
