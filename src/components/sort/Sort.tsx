import React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType, setOrderType } from '../../store/filter/filterSlice';
import { getCurrentSortType } from '../../store/filter/selectors';
import { sorting } from '../../const';
import { SortType } from '../../types/sort';

function Sort(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sortRef = useRef<HTMLDivElement | null>(null);
  const currentSortType = useSelector(getCurrentSortType);
  const dispatch = useDispatch();

  const handleSortListClick = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const handleSortItemClick = useCallback((sort: SortType) => {
    dispatch(setSortType(sort));
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useEffect(() => {
    const bodyClickHandler = (evt: MouseEvent) => {
      if (!evt.composedPath().includes(sortRef.current as Node)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', bodyClickHandler);

    return () => {
      document.body.removeEventListener('click', bodyClickHandler);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          onClick={() => dispatch(setOrderType('asc'))}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <svg
          onClick={() => dispatch(setOrderType('desc'))}
          className="desc"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={handleSortListClick}>{currentSortType.name}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sorting.map((sort) => (
              <li
                onClick={() => handleSortItemClick(sort)}
                className={sort === currentSortType ? 'active' : ''}
                key={sort.type}
              >
                {sort.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default React.memo(Sort);
