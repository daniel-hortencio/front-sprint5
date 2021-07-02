import { NavLinkTypes } from '../../types/navLinksTypes';

import * as S from './styles';

interface BreadcrumbsProps extends NavLinkTypes {
  isLastItem: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  label,
  path,
  isLastItem,
}) => {
  return (
    <S.Wrapper>
      {path ? <a href={path}>{label}</a> : <span>{label}</span>}

      {!isLastItem && <span>/</span>}
    </S.Wrapper>
  );
};

export default Breadcrumbs;
