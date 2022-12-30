import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../store/filter/filterSlice';
import type { RootState } from '../../store/store';
import { categories } from '../../const';

function Categories(): JSX.Element {
  const currentCategoryId = useSelector(
    (state: RootState) => state.filter.categoryId
  );
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => dispatch(setCategoryId(index))}
            className={currentCategoryId === index ? 'active' : ''}
            key={category + index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
