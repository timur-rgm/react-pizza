import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import Card from '../../pages/Card';
import Error from '../../pages/Error';
import Pizza from '../../pages/Pizza';
import MainLayout from '../../layouts/MainLayout';
import { AppRoute } from '../../const';
import '../../scss/app.scss';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainLayout />}>
        <Route path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.Card} element={<Card />} />
        <Route path={`${AppRoute.Pizza}/:id`} element={<Pizza />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
