import Categories from '../components/categories/Categories';
import NotFound from '../components/not-found/Not-found';
import Sort from '../components/sort/Sort';

function Error(): JSX.Element {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <NotFound />
    </div>
  );
}

export default Error;
