import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppRoute } from '../const';
import { PizzaItemType } from '../types/pizza';

function Pizza() {
  const [pizza, setPizza] = useState<PizzaItemType>();
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizzaById() {
      try {
        const { data } = await axios.get(
          `https://6353e24dccce2f8c02fe8dcd.mockapi.io/pizza/${id}`
        );

        setPizza(data);
      } catch (error) {
        navigate(`${AppRoute.Root}`);
      }
    }

    fetchPizzaById();
  }, []);

  return (
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
  );
}

export default Pizza;
