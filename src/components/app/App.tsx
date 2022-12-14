import { Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../../pages/Main';
import Error from '../../pages/Error';
import '../../scss/app.scss';

function App(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
