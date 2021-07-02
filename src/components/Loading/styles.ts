import styled from 'styled-components'

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    font-size: 0.8rem;
    font-weight: ${props => props.theme.fontWeight.normal};   
    z-index: 10;
    position: fixed;
    top:0;
    backdrop-filter: blur(4px);

    div {
        margin: auto;
        background: #fff;
        border-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: 0 2px 20px 8px rgba(8px, 0, 0, 0.2);
        -webkit-box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
    }

    svg {
        margin-right: 1rem;
    }
`
