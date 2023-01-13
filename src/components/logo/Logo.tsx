import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import logo from '../../assets/img/pizza-logo.svg';

function Logo() {
  return (
    <Link to={AppRoute.Root}>
      <div className="header__logo">
        <img width="38" src={logo} alt="Pizza logo" />
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
