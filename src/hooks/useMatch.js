import { useState, useEffect, useCallback } from 'react';

const useMatch = (brakePoint) => {
    const [isMatch, setisMatch] = useState(
        window.matchMedia(`(max-width: ${brakePoint}px)`).matches
    );

    const updateDimensions = useCallback(() => {
        setisMatch(window.matchMedia(`(max-width: ${brakePoint}px)`).matches);
    }, [brakePoint]);

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [updateDimensions]);
    return { isMatch };
};

export default useMatch;
