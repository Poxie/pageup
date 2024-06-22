"use client";
import Link from "next/link";
import Button from "../button";
import { twMerge } from "tailwind-merge";
import HamIcon from "@/assets/icons/HamIcon";
import { useEffect, useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";

const tabs = [
    { text: 'Om oss', id: 'about-us' },
    { text: 'Hur vi jobbar', id: 'how-we-work' },
    { text: 'Referenser', id: 'references' },
]
export default function Navbar() {
    const screenSize = useScreenSize();
    const isSmall = ['sm', 'md'].includes(screenSize);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!isSmall) setOpen(false);
    }, [isSmall]);

    return(
        <nav className="p-6 absolute w-full left-0 z-30 flex items-center justify-between">
            <div className="w-main max-w-main mx-auto h-[48px] flex items-center justify-between gap-8">
                <Link
                    className="relative z-30 text-2xl font-bold text-light" 
                    href={'/'}
                >
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                </Link>
                <div className={twMerge(
                    "flex items-center flex-1 justify-between",
                    isSmall && "pt-28 fixed left-0 top-0 justify-start flex-col gap-10 w-full h-[100dvh] bg-black/90 transition-[left,opacity] duration-300 ease-in-out",
                    !open && isSmall && 'left-full opacity-0',
                )}>
                    <ul className="flex flex-col md:flex-row items-center gap-10 md:gap-4">
                        {tabs.map(tab => (
                            <li key={tab.id}>
                                <a
                                    className="text-3xl md:text-base text-light font-semibold md:font-normal"
                                    href={`#${tab.id}`}
                                >
                                    {tab.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button className="text-xl font-semibold md:text-base md:font-medium">
                        Kontakta oss
                    </Button>
                </div>
                {isSmall && (
                    <button 
                        className={"relative z-40 text-light"}
                        onClick={() => setOpen(!open)}
                        aria-label={open ? 'Stäng menyn' : 'Öppna menyn'}
                    >
                        <HamIcon className="w-8" />
                    </button>
                )}
            </div>
        </nav>
    )
}