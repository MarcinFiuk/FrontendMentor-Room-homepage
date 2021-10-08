import { useState } from 'react';
import Slider from './Slider';
import HeroDesc from './HeroDescription';

import { Flex } from '../../assets/styles/Flex.style';

const Hero = () => {
    const [slideNr, setSlideNr] = useState(0);

    const nextPhotoHandler = () => {
        setSlideNr((prev) => {
            if (prev === 2) {
                return 0;
            }
            return prev + 1;
        });
    };
    const prevPhotoHandler = () => {
        setSlideNr((prev) => {
            if (prev === 0) {
                return 2;
            }
            return prev - 1;
        });
    };

    return (
        <Flex>
            <Slider
                photoNr={slideNr}
                nextPhoto={nextPhotoHandler}
                prevPhoto={prevPhotoHandler}
            />
            <HeroDesc
                descNr={slideNr}
                nextPhoto={nextPhotoHandler}
                prevPhoto={prevPhotoHandler}
            />
        </Flex>
    );
};

export default Hero;
