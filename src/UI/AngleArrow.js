import React from 'react';
import styled from 'styled-components';
import IconAngleRight from '../assets/icons/IconAngleRight';
import IconAngleLeft from '../assets/icons/IconAngleLeft';

const ArrowsWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;

    @media (min-width: 1024px) {
        right: -10%;
        left: 0;
        right: auto;
    }
`;

const AngleArrowStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    border: none;
    transition: background-color 0.3s linear;

    @media (min-width: 1024px) {
        width: 80px;
        height: 80px;

        &:hover {
            background-color: ${({ theme }) => theme.colors.veryDarkGray};
        }
    }
`;

const AngleArrows = ({ nextPhoto, prevPhoto }) => {
    return (
        <ArrowsWrapper>
            <AngleArrowStyled onClick={prevPhoto}>
                <IconAngleLeft />
            </AngleArrowStyled>
            <AngleArrowStyled onClick={nextPhoto}>
                <IconAngleRight />
            </AngleArrowStyled>
        </ArrowsWrapper>
    );
};

export default AngleArrows;
