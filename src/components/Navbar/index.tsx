import React from 'react';

import { useCategories } from '../../hooks';

import NavBarItem from '../NavbarItem';

import * as S from './styles';

const NavBar: React.FC = () => {
  const { categories } = useCategories();

  return (
    <S.Container>
      <ul className="menu__list">
        {categories?.map(category => (
          <NavBarItem
            key={category.id}
            id={category.id}
            label={category.label}
            path={category.path}
          />
        ))}
      </ul>
    </S.Container>
  );
};

export default NavBar;
