import styled from 'styled-components';

export const Paragraph = styled.div`
    position: relative;
    padding: ${({ hero }) => (hero ? '4.5rem 2rem' : '3.5rem 2rem')};

    @media (min-width: 1024px) {
        width: ${({ hero }) => (hero ? '41.7%' : '40.3%')};
        padding: ${({ hero }) =>
            hero ? '7.5rem 6.25rem 9.5rem' : '4.25rem 3rem'};
    }

    p {
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 20px;
        letter-spacing: -0.25px;
        color: ${({ theme }) => theme.colors.darkGrey};
        margin: ${({ hero }) => (hero ? '14px 0 52px' : '9px 0 0')};
        /* margin: ${({ about }) => about && '9px 0 0'}; */
    }

    h2 {
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        font-size: ${({ theme }) => theme.fontSize.l};
        line-height: 31px;
        letter-spacing: -1.17px;
        margin: 0;
    }

    h3 {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        font-size: ${({ theme }) => theme.fontSize.m};
        line-height: 22px;
        text-align: justify;
        letter-spacing: 5px;
        margin: 0;
    }
`;

export const Button = styled.button`
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 16px;
    letter-spacing: 10px;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    transition: all 0.3s linear;

    span {
        display: inline-block;
        margin-left: 43px;
    }

    @media (min-width: 1024px) {
        :hover {
            color: ${({ theme }) => theme.colors.darkGrey};

            fill: ${({ theme }) => theme.colors.darkGrey};
        }
    }
`;
