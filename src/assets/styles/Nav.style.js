import styled from 'styled-components';

export const StyledNav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 48px calc(50% - 31px) 0 24px;
    max-width: 1440px;
    margin: 0 auto;
    z-index: 100;

    h1 {
        margin: 0;
    }

    @media (min-width: 840px) {
        justify-content: center;
        padding: 64px;
    }

    @media (min-width: 1024px) {
        justify-content: flex-start;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.75;
    overflow: hidden;
`;

export const ListWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 1;
    padding: 47px 24px;
    transition: left 0.5s ease-out;

    @media (min-width: 840px) {
        position: static;
        width: auto;
        opacity: 1;
        background-color: transparent;
        padding: 0;
    }
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    margin: 0;

    li {
        margin-left: 32px;

        a {
            display: inline-block;
            font-weight: ${({ theme }) => theme.fontWeight.semiBold};
            font-size: ${({ theme }) => theme.fontSize.m};
            letter-spacing: -0.5px;
            line-height: 2.34;
            color: ${({ theme }) => theme.colors.black};
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: border-color 0.3s linear;

            @media (min-width: 840px) {
                color: ${({ theme }) => theme.colors.white};

                :hover {
                    border-color: ${({ theme }) => theme.colors.white};
                }
            }
        }
    }

    @media (min-width: 840px) {
        padding: 0;
        margin-left: 24px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    line-height: 0;

    @media (min-width: 840px) {
        display: none;
    }
`;
