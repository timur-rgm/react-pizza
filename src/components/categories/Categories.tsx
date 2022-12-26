import { categories } from '../../const';

type CategoriesPropsType = {
  id: number;
  onCategoryClick: (id: number) => void;
};

function Categories({ id, onCategoryClick }: CategoriesPropsType): JSX.Element {
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => onCategoryClick(index)}
            className={id === index ? 'active' : ''}
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
