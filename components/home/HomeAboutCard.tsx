"use client";
import { AboutCard } from "@/assets/data/types";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import MailIcon from "@/assets/icons/MailIcon";
import MobileIcon from "@/assets/icons/MobileIcon";
import QuoteIcon from "@/assets/icons/QuoteIcon";
import useAnimateIntoView, { DEFAULT_INITIAL_STATE } from "@/hooks/useAnimateIntoView";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function HomeAboutCard({ index, data: { name, title, image, quote, telephone, email, linkedin } }: {
    data: AboutCard;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useAnimateIntoView(ref, { delay: index * 150 });

    const phoneHref = `tel:${telephone.replace('-', '').replaceAll(' ', '').trim()}`;
    return(
        <div 
            className="h-full p-5 flex flex-col gap-3 bg-primary rounded-lg shadow-md"
            style={DEFAULT_INITIAL_STATE}
            ref={ref}
        >
            <div className="flex gap-2">
                <div className={twMerge(
                    "[--translate:3.5rem] border-[.5rem] -mb-[--translate] -translate-y-[--translate] border-primary rounded-full overflow-hidden",
                    "[--size:115px] w-[--size] h-[--size] min-w-[--size]"
                )}>
                    <Image 
                        className="aspect-square object-cover"
                        src={image}
                        alt={name}
                        fill
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-semibold">
                        {name}
                    </span>
                    <span className="text-sm text-muted">
                        {title}
                    </span>
                </div>
            </div>
            <div>
                <QuoteIcon className="w-8 min-w-8 -mt-2 mr-2 float-left fill-t-muted/30" />
                <span className="text-sm">
                    {quote}
                </span>
            </div>
            <div className="flex-1 flex flex-col justify-end gap-2">
                <div className="flex gap-2 text-muted">
                    <MobileIcon className="w-5" />
                    <a 
                        className="text-sm hover:underline"
                        href={phoneHref}
                    >
                        {telephone}
                    </a>
                </div>
                <div className="flex gap-2 text-muted">
                    <MailIcon className="w-5" />
                    <a 
                        className="text-sm hover:underline"
                        href={`mailto:${email}`}
                    >
                        {email}
                    </a>
                </div>
                <div className="flex gap-2 text-muted">
                    <LinkedInIcon className="w-5" />
                    <a 
                        className="text-sm hover:underline"
                        href={linkedin}
                        target="_blank"
                    >
                        {name}
                    </a>
                </div>
            </div>
        </div>
    )
}