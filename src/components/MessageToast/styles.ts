import styled, { css } from 'styled-components'

interface IContainer {
    status: "success" | "error" | undefined
}

export const Container = styled.div<IContainer>`
    transform: translateX(calc(-100% - 1rem));
    font-size: 52px;
    width: 24rem;
    overflow: hidden;
    animation: slideToLeft 0.3s ease-out;

    display: flex;
    align-items: center;

    border-radius: 0.5rem;
    margin-bottom: 1rem;

    -webkit-box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.2);

    ${props => props.status === "error" && css`
        background: ${props.theme.colors.errorDark};
        div {
            background-color: ${props.theme.colors.error}
        };
    `}

    ${props => props.status === "success" && css`
        background: ${props.theme.colors.successDark};
        div {
            background-color: ${props.theme.colors.success}
        };
    `}

    div {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-radius: 0.5rem;
        flex: auto;

        svg {
            margin-right: 1rem;
            color: #fff;
        }
    }

    p {
        color: #fff;
        font-size: 1.2rem;
        text-align: left;
    }

    button {
        background: transparent;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.5rem;
        color: #fff;

        opacity: 0.8;

        &:hover {
            opacity: 1;
        }
    }
`
