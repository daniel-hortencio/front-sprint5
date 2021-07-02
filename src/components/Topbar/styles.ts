import styled from 'styled-components'

export const Wrapper = styled.div`

    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;

    & > div {
        margin: auto;
        width: 95%;
        max-width: 1200px;
    }

    .header__logo {
        height: 70px;
        line-height: 70px;
        text-align: center;

        @media (max-width: 1200px) {
            flex-grow: 1;
        }
    }   
`

export const HeaderMobile = styled.div`

    display: none;
    margin-bottom: 25px;

    @media (max-width: 1200px) {
        display: flex;
        align-items: center;
    }

    .header__drawer {
        width: 24px;
        opacity: 54%;
        display: none;
    }
    .header__drawer--active {
        display: block;
    }
    .header__drawer .menu__title,
    .header__drawer .close__title {
        text-transform: lowercase;
        font-size: 0.5625rem;
        font-weight: 400;
        line-height: 0;
    }

`

export const HeaderDesktop = styled.div`
    
    @media (max-width: 1200px) {    
        display: none;
    }

`

