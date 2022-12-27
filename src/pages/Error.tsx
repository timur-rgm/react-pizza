import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import NotFound from '../components/not-found/Not-found';
import Sort from '../components/sort/Sort';

function Error(): JSX.Element {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            {/* <Sort /> */}
          </div>
          <NotFound />
        </div>
      </div>
    </div>
  );
}

export default Error;
