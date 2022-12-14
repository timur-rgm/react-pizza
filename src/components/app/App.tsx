import { useEffect, useState } from 'react';
import Header from '../header/Header';
import Categories from '../categories/Categories';
import Sort from '../sort/Sort';
import Pizza from '../pizza/Pizza';
import Skeleton from '../skeleton/Skeleton';
import { PizzaListType } from '../../types/pizza';
import '../../scss/app.scss';

function App(): JSX.Element {
  const [pizza, setPizza] = useState<PizzaListType>([]);
  const [isPizzaLoading, setIsPizzaLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza')
      .then((response) => response.json())
      .then((pizza) => {
        setPizza(pizza);
        setIsPizzaLoading(false);
      });
  }, []);

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
            {isPizzaLoading
              ? [...new Array(8)].map((_item, index) => (
                  <Skeleton key={index} />
                ))
              : pizza.map((item) => (
                  <Pizza
                    title={item.title}
                    price={item.price}
                    image={item.imageUrl}
                    sizes={item.sizes}
                    types={item.types}
                    key={item.id}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
