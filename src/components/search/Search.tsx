import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/filter/filterSlice';
import debounce from 'lodash.debounce';

function Search(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    handleInputUpdate(evt.target.value);
  };

  const handleInputUpdate = useCallback(
    debounce(
      (value: string) => {
        dispatch(setSearchValue(value));
      },
      500),
    [],
  );

  const handleClearIconClick = () => {
    dispatch(setSearchValue(''));
    setInputValue('');
    inputRef.current?.focus();
  };

  return (
    <div className="header__search search">
      <svg
        className="search__icon"
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      <input
        value={inputValue}
        onChange={handleInputChange}
        className="search__input"
        type="text"
        placeholder="Поиск пиццы..."
      />
      {inputValue && (
        <svg
          onClick={handleClearIconClick}
          className="search__clear-icon"
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </div>
  );
}

export default Search;
