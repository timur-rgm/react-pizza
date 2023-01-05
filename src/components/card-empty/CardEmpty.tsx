import { Link } from 'react-router-dom';
import cardEmptyImg from '../../assets/img/empty-cart.png';

function CardEmpty(): JSX.Element {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cardEmptyImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}

export default CardEmpty;
