import Header from '../header/Header';
import Categories from '../categories/Categories';
import Sort from '../sort/Sort';
import Pizza from '../pizza/Pizza';
import { pizza } from '../../mocks/pizza';
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
            {pizza.map((item) => (
              <Pizza
                title={item.title}
                price={item.price}
                image={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
