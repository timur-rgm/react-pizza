import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../../pages/Main';
import NoFound from '../../pages/Not-found';
import '../../scss/app.scss';

function App(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
