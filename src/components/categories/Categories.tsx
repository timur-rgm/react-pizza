import { useState } from 'react';
import { categories } from '../../const';

function Categories(): JSX.Element {
  const [categoryActiveId, setCategoryActiveId] = useState(0);

  const handleCategoryClick = (index: number) => {
    setCategoryActiveId(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => handleCategoryClick(index)}
            className={categoryActiveId === index ? 'active' : ''}
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
