import styled, { css } from 'styled-components';

interface WrapperProps {
    isActive: boolean;
    isAscending: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
    display: flex;
    height: 3rem;
    align-items: center;
    align-items: center;
    padding: 0 14px;
    background-color: #fff;

    :hover { 
        cursor: pointer;
        background-color: rgba(38, 30, 30, 0.04);
    }

    img {
        width: 1.6rem;
        display:${props => props.isActive ? "inline" : "none"};
        ${props => props.isAscending && css`
            transform: rotateX(180deg);
        `}
    }



`