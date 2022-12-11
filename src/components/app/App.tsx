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
            <Pizza title="Маргарита" price={450} />
            <Pizza title="Четыре сезона" price={395} />
            <Pizza title="Пепперони" price={675} />
            <Pizza title="Чизбургер-пицца" price={415} />
            <Pizza title="Овощи и грибы 🌱" price={285} />
            <Pizza title="Сырная" price={245} />
            <Pizza title="Пепперони Фреш с перцем" price={803} />
            <Pizza title="Цыпленок барбекю" price={295} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
