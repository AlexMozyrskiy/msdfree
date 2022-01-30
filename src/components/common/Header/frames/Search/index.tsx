import { FC, useEffect, useState } from 'react';
import SVG from 'react-inlinesvg';

import searchIcon from 'src/library/icons/header/search.svg';

import st from './index.module.scss';

interface ISearch {
  callBack: (text: string) => void;
}

/**
 *
 * @param callBack - функция выполняющаяся при поиске. Например санка запрос в базу и сет найденных юзеров в стейт
 * @returns
 */
const Search: FC<ISearch> = ({ callBack }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout>>();

  const onInputFieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    /*
        Скидываем таймаут чтобы запрос на сервер не пошел,
        таким образом на сервер цйдет только 1 последний запрос,
        потому что мы его не скинем
      */
    timerId && clearTimeout(timerId);

    const timerIdTemp: ReturnType<typeof setTimeout> = setTimeout(() => {
      searchValue !== '' && callBack(searchValue);
    }, 2000);

    setTimerId(timerIdTemp);
  }, [searchValue, callBack, timerId]);

  return (
    <div className={st.search}>
      {/* Когда реализую поиск тогда раскомментирую */}
      <figure>
        <SVG src={searchIcon} />
      </figure>
      <input placeholder='search' value={searchValue} onChange={onInputFieldChangeHandler} />
    </div>
  );
};

export default Search;
