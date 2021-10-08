import useMatch from './../../hooks/useMatch';

import { paragraphsInfo } from './../../assets/sliderData/sliderData';
import { Paragraph, Button } from './../../assets/styles/Paragraph.style';
import ArrowIcon from './../../assets/icons/ArrowIcon';
import AngleArrows from './../../UI/AngleArrow';

const HeroDescription = ({ nextPhoto, prevPhoto, descNr }) => {
    const { isMatch } = useMatch(1024);

    return (
        <>
            {paragraphsInfo[descNr].map((desc, i) => (
                <Paragraph hero key={i}>
                    <h2>{desc.title}</h2>
                    <p>{desc.desc}</p>
                    <Button>
                        SHOP NOW
                        <span>
                            <ArrowIcon />
                        </span>
                    </Button>
                    {!isMatch && (
                        <AngleArrows
                            nextPhoto={nextPhoto}
                            prevPhoto={prevPhoto}
                        />
                    )}
                </Paragraph>
            ))}
        </>
    );
};

export default HeroDescription;
