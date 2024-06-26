"use client";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import useIsiOS from "@/hooks/useIsiOS";
import scrollToSection from "@/utils/scrollToSection";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const SCROLL_FACTOR = .5;
const HERO_SUBTITLE = "Oavsett om du är en startup eller ett etablerat varumärke, förverkligar vi din vision. Låt oss bygga din framgång online tillsammans.";
export default function HomeHero() {
    const isiOS = useIsiOS();

    const ref = useRef<HTMLDivElement>(null);
    const hero1Ref = useRef<HTMLSpanElement>(null);
    const hero2Ref = useRef<HTMLSpanElement>(null);
    const hero3Ref = useRef<HTMLSpanElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    const { initialState } = useAnimateIntoView(hero1Ref, { delay: 0 });
    useAnimateIntoView(hero2Ref, { delay: 450 });
    useAnimateIntoView(hero3Ref, { delay: 650 });
    useAnimateIntoView(paragraphRef, { delay: 900 });

    useEffect(() => {
        if(isiOS) return;

        const onScroll = () => {
            if(!ref.current) return;
            if(window.scrollY > ref.current.offsetHeight) return;

            const scroll = window.scrollY * SCROLL_FACTOR;

            const transform = `translateY(${scroll}px)`;
            ref.current.style.transform = transform;
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isiOS]);

    return(
        <section 
            className={twMerge(
                "h-[75vh] md:h-[80vh] relative",
                "flex items-center justify-center overflow-hidden"
            )}
            id="hero"
        >
            <div 
                className="w-full h-full flex items-center justify-center"
                ref={ref}
            >
                <div 
                    className={twMerge(
                        "absolute h-full w-full overflow-hidden",
                        "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-50 after:z-10",
                    )}
                >
                    <Image 
                        className="select-none object-cover"
                        src="/hero.jpg"
                        priority
                        fill
                        alt=""
                    />
                </div>

                <div className="w-[800px] max-w-main relative z-20 grid gap-5 text-center text-light">
                    <h1 className="flex justify-center flex-wrap gap-2 md:gap-3 text-4xl md:text-5xl font-bold">
                        <span 
                            className="block"
                            style={initialState}
                            ref={hero1Ref}
                        >
                            Alla
                        </span>
                        <span
                            className="block"
                            style={initialState} 
                            ref={hero2Ref}
                        >
                            behöver en
                        </span>
                        <span
                            className="block"
                            style={initialState} 
                            ref={hero3Ref}
                        >
                            hemsida.
                        </span>
                    </h1>
                    <p 
                        className="text-lg leading-6 md:text-xl md:leading-8"
                        style={initialState}
                        ref={paragraphRef}
                    >
                        {HERO_SUBTITLE}
                    </p>
                </div>
            </div>

            <div className="z-20 absolute bottom-0 left-2/4 -translate-x-2/4">
                <svg className="absolute right-[calc(100%-1.9rem)] bottom-0 translate-y-[.2rem]" xmlns="http://www.w3.org/2000/svg" width="157" height="76" viewBox="0 0 149 68" fill="none">
                    <path d="M149 67.5V0C149 0 128.808 19.1524 92.6028 38.4238C56.3972 57.6952 0 67.5 0 67.5H149Z" className="fill-secondary" />
                </svg>
                <div className={twMerge(
                    "[--width:10rem] [--height:5.5rem]",
                    "w-[--width] h-[--height] rounded-t-full bg-secondary",
                    "after:absolute after:right-full after:top-0 after:h-[calc(var(--height)/2)] after:w-full after:rotate-45 after:rounded-full",
                )} />
                <svg className="absolute left-[calc(100%-1.9rem)] scale-x-[-1] bottom-0 translate-y-[.2rem]" xmlns="http://www.w3.org/2000/svg" width="157" height="76" viewBox="0 0 149 68" fill="none">
                    <path d="M149 67.5V0C149 0 128.808 19.1524 92.6028 38.4238C56.3972 57.6952 0 67.5 0 67.5H149Z" className="fill-secondary" />
                </svg>

                <button 
                    className="w-full h-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col justify-center items-center gap-2 text-primary"
                    onClick={() => scrollToSection('process')}
                    aria-label="Läs mer"
                >
                    <span>
                        Läs mer
                    </span>
                    <ArrowIcon className="w-6 -mb-1 animate-bounce" />
                </button>
            </div>
        </section>
    )
}