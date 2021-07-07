import { FilterTypes } from '../../types/filterTypes';
import * as S from './styles';

import ImageArrow from '../../assets/filter.svg';
import { useSearch } from '../../hooks';

const FilterButton: React.FC<FilterTypes> = ({ id, label }) => {
  const { changeSearch, sort, sortBy } = useSearch();

  console.log(typeof 1);

  return (
    <S.Wrapper
      type="button"
      className="filters__item"
      onClick={() => changeSearch(id)}
      isActive={sortBy === id}
      isAscending={sort === 1}
    >
      <p>{label}</p>
      <img src={ImageArrow} />
    </S.Wrapper>
  );
};

export default FilterButton;
