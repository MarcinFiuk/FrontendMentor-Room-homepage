import styled from 'styled-components';

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 840px;
    min-height: 100px;
    overflow: hidden;
    margin: 0 auto;

    @media (min-width: 1024px) {
        width: 58.3%;
        margin: 0;
    } ;
`;

export const StyledImage = styled.img`
    vertical-align: middle;
    width: 100%;
    height: 100%;
`;
