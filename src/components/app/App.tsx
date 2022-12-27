import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import Card from '../../pages/Card';
import Error from '../../pages/Error';
import '../../scss/app.scss';

function App(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/card" element={<Card />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
