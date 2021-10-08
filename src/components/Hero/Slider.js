import useMatch from './../../hooks/useMatch';

import AngleArrows from './../../UI/AngleArrow';

import {
    desktopImages,
    mobileImages,
    photoAlt,
} from './../../assets/sliderData/sliderData';
import { ImageWrapper, StyledImage } from './../../assets/styles/SliderStyle';

const Image = ({ photoNr, nextPhoto, prevPhoto }) => {
    const { isMatch: photoChange } = useMatch(648);
    const { isMatch: arrowsRender } = useMatch(1024);

    return (
        <ImageWrapper>
            {photoChange && (
                <StyledImage
                    src={mobileImages[photoNr]}
                    alt={photoAlt[photoNr]}
                />
            )}
            {!photoChange && (
                <StyledImage
                    src={desktopImages[photoNr]}
                    alt={photoAlt[photoNr]}
                />
            )}
            {arrowsRender && (
                <AngleArrows nextPhoto={nextPhoto} prevPhoto={prevPhoto} />
            )}
        </ImageWrapper>
    );
};

export default Image;
