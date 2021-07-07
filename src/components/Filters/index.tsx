import { FilterTypes } from '../../types/filterTypes';
import FilterButton from '../FilterButton';

import * as S from './styles';

interface FiltersProps {
  filters: FilterTypes[] | undefined;
}

const Filters: React.FC<FiltersProps> = ({ filters }) => {
  return (
    <S.Wrapper>
      {filters?.map(filterOption => (
        <FilterButton
          key={filterOption.id}
          id={filterOption.id}
          label={filterOption.label}
        />
      ))}
    </S.Wrapper>
  );
};

export default Filters;
