import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;
