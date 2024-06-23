"use client";
import Link from "next/link";
import Button from "../button";
import { twMerge } from "tailwind-merge";
import HamIcon from "@/assets/icons/HamIcon";
import { useEffect, useRef, useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import scrollToSection from "@/utils/scrollToSection";
import Image from "next/image";
import LogoIcon from "@/assets/icons/LogoIcon";

const tabs = [
    { text: 'Om oss', id: 'about-us' },
    { text: 'Hur vi jobbar', id: 'how-we-work' },
    { text: 'Referenser', id: 'references' },
]
export default function Navbar() {
    const screenSize = useScreenSize();
    const isSmall = ['sm', 'md'].includes(screenSize);

    const ref = useRef<HTMLElement>(null);
    const [open, setOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if(!isSmall) setOpen(false);
    }, [isSmall]);
    useEffect(() => {
        const onScroll = () => {
            const aboutSection = document.getElementById('about-us');
            if(!ref.current || !aboutSection) return;

            const rect = aboutSection.getBoundingClientRect();
            const { height } = ref.current.getBoundingClientRect();
            const fromTop = rect.top - height / 2;

            if(fromTop < 0) {
                setDark(true);
            } else {
                setDark(false);
            }

            if(window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        }
        onScroll();

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (id: string) => {
        setOpen(false);
        scrollToSection(id);
    }

    return(
        <nav
            className={twMerge(
                "py-6 fixed w-full left-0 z-30 flex items-center justify-between border-b-[1px] border-b-transparent transition-[backdrop-filter,border] duration-300",
                hasScrolled && 'backdrop-blur-md border-b-black/40',
            )}
            ref={ref}
        >
            <div className="w-main max-w-main mx-auto flex items-center justify-between gap-8">
                <button
                    className={twMerge(
                        "relative z-30 flex items-center gap-2 text-2xl font-bold text-light transition-colors",
                        !open && dark && 'text-primary',
                    )}
                    onClick={() => handleClick('hero')}
                >
                    <LogoIcon 
                        whiteClassName={dark ? 'fill-t-primary' : 'fill-c-primary'}
                        mainColorClassName="fill-c-primary"
                    />
                    <span>
                        daisy
                        <span className="text-c-primary">
                            web
                        </span>
                    </span>
                </button>
                <div className={twMerge(
                    "flex items-center flex-1 justify-between",
                    "pt-28 fixed left-0 top-0 justify-start flex-col gap-10 w-full h-[100dvh] bg-black/90 transition-[left,opacity] duration-300 ease-in-out",
                    "md:opacity-100 md:pt-0 md:relative md:left-[unset] md:top-[unset] md:justify-between md:flex-row md:gap-4 md:w-[unset] md:h-[unset] md:bg-transparent",
                    !open && 'left-full opacity-0',
                )}>
                    <ul className="flex flex-col md:flex-row items-center gap-10 md:gap-4">
                        {tabs.map(tab => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => handleClick(tab.id)}
                                    className={twMerge(
                                        "text-3xl md:text-base text-light font-semibold md:font-normal transition-colors",
                                        !open && dark && 'text-primary',
                                    )}
                                >
                                    {tab.text}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <Button 
                        className="text-xl font-semibold md:text-base md:font-medium"
                        onClick={() => handleClick('contact-us')}
                    >
                        Kontakta oss
                    </Button>
                </div>
                <button 
                    className={twMerge(
                        "relative z-40 text-light md:hidden",
                        !open && dark && 'text-primary',
                    )}
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Stäng menyn' : 'Öppna menyn'}
                >
                    <HamIcon className="w-8" />
                </button>
            </div>
        </nav>
    )
}