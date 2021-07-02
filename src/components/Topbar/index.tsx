import React from 'react';

import Navbar from '../Navbar';

import ImageMenu from '../../assets/menu.svg';
import ImageLogoSmall from '../../assets/rchlo.svg';
import ImageLogo from '../../assets/riachuelo.svg';
import SearchBar from '../SearchBar';

import './styles.scss';

import * as S from './styles';

const TopBar: React.FC = () => {
  return (
    <S.Wrapper>
      <div>
        <S.HeaderMobile>
          <div className="header__drawer menu header__drawer--active">
            <img className={ImageMenu} src="../../assets/menu.svg" />
            <p className="menu__title">menu</p>
          </div>
          <div className="header__drawer close">
            <img src="../../assets/close.svg" />
            <p className="close__title">fechar</p>
          </div>
          <h1 className="header__logo">
            <img className="header__img" src={ImageLogoSmall} alt="Logo" />
          </h1>
        </S.HeaderMobile>

        <S.HeaderDesktop>
          <h1 className="header__logo">
            <img className="header__img" src={ImageLogo} alt="Logo" />
          </h1>
        </S.HeaderDesktop>

        <SearchBar />

        <Navbar />
      </div>
    </S.Wrapper>
  );
};

export default TopBar;
