import { useEffect, useState } from "react";

type ScreenSize = 'sm' | 'md' | 'lg' | 'xl';

const getScreenSize = () => {
    if(typeof window === 'undefined') return 'md';

    const windowSize = window.innerWidth;

    if (windowSize < 640) {
        return 'sm';
    } else if (windowSize < 768) {
        return 'md';
    } else if (windowSize < 1024) {
        return 'lg';
    } else {
        return 'xl';
    }
}

export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());
  
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize());
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return screenSize;
}