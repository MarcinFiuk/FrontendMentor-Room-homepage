import styled from 'styled-components';

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 840px;
    overflow: hidden;
    margin: 0 auto;
    background-color: pink;

    @media (min-width: 1024px) {
        width: 420px;
        margin: 0;
    } ;
`;

const StyledImage = styled.img`
    vertical-align: middle;
    width: 100%;
    height: 100%;
`;

const Image = ({ photo, alt }) => {
    return (
        <ImageWrapper>
            <StyledImage src={photo} alt={alt} />
        </ImageWrapper>
    );
};

export default Image;
