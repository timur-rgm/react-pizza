import Header from '../header/Header';
import Categories from '../categories/Categories';
import Sort from '../sort/Sort';
import Pizza from '../pizza/Pizza';
import '../../scss/app.scss';

function App(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
