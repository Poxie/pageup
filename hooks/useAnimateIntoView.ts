import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

export const DEFAULT_INITIAL_STATE = {
    opacity: 0,
    transform: 'translateY(40px)',
} as const;
const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = 500;
const DEFAULT_THRESHOLD = .7;
export default function useAnimateIntoView(ref: RefObject<HTMLElement>, { 
    delay=DEFAULT_DELAY,
    duration=DEFAULT_DURATION, 
    threshold=DEFAULT_THRESHOLD, 
    initialState=DEFAULT_INITIAL_STATE,
}: {
    delay?: number;
    duration?: number;
    threshold?: number;
    initialState?: typeof DEFAULT_INITIAL_STATE;
} | undefined = {}) {
    useEffect(() => {
        if(!ref.current) {
            console.error('useAnimateIntoView: ref is not defined');
            return;
        }

        ref.current.style.opacity = initialState.opacity.toString();
        ref.current.style.transform = initialState.transform;
        ref.current.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
        ref.current.style.transitionDelay = `${delay}ms`;

        const onScroll = () => {
            if(!ref.current) return;
            
            const { top, height } = ref.current.getBoundingClientRect();
        
            const isVisible = top / window.innerHeight <= threshold;

            if(isVisible) {
                ref.current.style.opacity = '1';
                ref.current.style.transform = 'translateY(0px)';

                window.removeEventListener('scroll', onScroll);
            }
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
}