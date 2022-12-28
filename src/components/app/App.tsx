import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import Card from '../../pages/Card';
import Error from '../../pages/Error';
import '../../scss/app.scss';

type SearchContextType = {
  searchInputValue: string;
  setSearchInputValue?: React.Dispatch<React.SetStateAction<string>> | null;
};

export const SearchContext = createContext<SearchContextType>({
  searchInputValue: '',
  setSearchInputValue: null,
});

function App(): JSX.Element {
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchInputValue, setSearchInputValue }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
