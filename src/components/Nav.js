import { useState, useEffect } from 'react';
import useMatch from '../hooks/useMatch';

import Hamburger from './../assets/icons/HamburgerIcon';
import Close from '../assets/icons/CloseIcon';
import {
    StyledNav,
    Overlay,
    Button,
    ListWrapper,
    List,
} from './../assets/styles/Nav.style';
import logo from './../assets/logo/logo.svg';

const listElements = ['home', 'shop', 'about', 'contact'];

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isMatch } = useMatch(840);

    useEffect(() => {
        isMatch ? setIsOpen(false) : setIsOpen(true);
    }, [isMatch]);

    return (
        <StyledNav>
            <Button onClick={() => setIsOpen(true)}>
                <Hamburger />
            </Button>
            <h1>
                <img src={logo} alt='logo' />
            </h1>
            {isOpen && isMatch && <Overlay />}
            {isOpen && (
                <ListWrapper>
                    <Button onClick={() => setIsOpen(false)}>
                        <Close />
                    </Button>
                    <List>
                        {listElements.map((el, i) => (
                            <li key={i}>
                                <a href='/'>{el}</a>
                            </li>
                        ))}
                    </List>
                </ListWrapper>
            )}
        </StyledNav>
    );
};

export default Nav;
