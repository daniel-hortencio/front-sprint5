import styled from 'styled-components'

export const Container = styled.div`
    background: $gray-200;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.8rem;
    font-weight: ${props => props.theme.fontWeight.normal};
    padding: 0.5rem 1rem;
    margin: 4rem auto 6rem auto;

    svg {
        margin-right: 1rem;
    }
`
