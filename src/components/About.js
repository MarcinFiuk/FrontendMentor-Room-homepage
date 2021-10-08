import React from 'react';
import Image from '../UI/Image';
import { Paragraph } from '../assets/styles/Paragraph.style';
import { Flex } from './../assets/styles/Flex.style';

import imageAboutDark from './../assets/images/image-about-dark.jpg';
import imageAboutLight from './../assets/images/image-about-light.jpg';

const About = () => {
    return (
        <Flex>
            <Image photo={imageAboutDark} alt={'round table with chairs'} />
            <Paragraph>
                <h3>ABOUT OUR FURNITURE</h3>
                <p>
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </Paragraph>
            <Image photo={imageAboutLight} alt={'white chair'} />
        </Flex>
    );
};

export default About;
