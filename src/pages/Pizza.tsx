import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import { PizzaItemType } from '../types/pizza';

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState<PizzaItemType>();

  useEffect(() => {
    async function fetchPizzaById() {
      try {
        const { data } = await axios.get(
          `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza/${id}`
        );

        setPizza(data);
      } catch (error) {}
    }

    fetchPizzaById();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          {pizza ? (
            <>
              <img src={pizza.imageUrl} alt="" />
              <h2>{pizza.title}</h2>
              <p>{pizza.price}</p>
            </>
          ) : (
            <p>Загрузка...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Pizza;
