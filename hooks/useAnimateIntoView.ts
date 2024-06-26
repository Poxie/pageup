import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

export const DEFAULT_INITIAL_STATE = {
    opacity: 0,
    transform: 'translateY(40px)',
} as const;
const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = 600;
const DEFAULT_THRESHOLD = .7;
export default function useAnimateIntoView(ref: RefObject<HTMLElement>, { 
    delay=DEFAULT_DELAY,
    duration=DEFAULT_DURATION, 
    threshold=DEFAULT_THRESHOLD, 
    initialState=DEFAULT_INITIAL_STATE,
    siblingRef,
}: {
    delay?: number;
    duration?: number;
    threshold?: number;
    initialState?: typeof DEFAULT_INITIAL_STATE;
    siblingRef?: RefObject<HTMLElement>;
} | undefined = {}) {
    const getVisible = (ref: RefObject<HTMLElement>) => {
        if(!ref.current) return false;

        const { top, height } = ref.current.getBoundingClientRect();
        return top / window.innerHeight <= threshold;
    }

    const getSiblingVisible = () => {
        if(!siblingRef?.current) return false;
        return getVisible(siblingRef);
    }

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
            
            const isVisible = getVisible(ref) || getSiblingVisible();

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

    return { initialState };
}