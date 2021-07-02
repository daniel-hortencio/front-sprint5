import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(36rem, 1fr));

    > div {
        > h1 {
            margin-bottom: 4rem;
        }

        > small {
            margin-bottom: 1rem;
            display: block;
        }
    }
`

interface SizeOptionProps {
    isActive: boolean;
}

export const SizeOption = styled.button<SizeOptionProps>`
    border: solid 1px #000;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
    margin-bottom: 3rem;

    ${props => props.isActive ? css`
        background: #000;
        color: #fff;
    ` : css`
        background: #fff;
        color: #000;
    ` }

`

export const Actions = styled.div`
    padding: 1rem;
    text-align: center;
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.35); 
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.35);

    h2{
        margin-bottom: 2rem;
    }

    button {
        margin-bottom: 1rem;
        display: block;
        text-align: center;
        color: #fff;
        background-color: ${props => props.theme.colors.successDark};
        width: 100%;
        padding: 0.5rem;

        &:last-child {
            background-color: ${props => props.theme.colors.errorDark};
        }
        
    }


`