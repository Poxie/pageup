"use client";
import { ProjectCard } from "@/assets/data/types";
import ArrowIcon from "@/assets/icons/ArrowIcon";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Button from "../button";
import { useRef } from "react";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

export default function HomeProjectCard({ index, card: { title, shortDescription, description, image, link } }: {
    card: ProjectCard;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const { initialState } = useAnimateIntoView(ref, { delay: (index % 3) * 150 });

    return(
        <div 
            className={"hover:z-10 relative group rounded-md border-[1px]"}
            style={initialState}
            ref={ref}
        >
            <div className="m-3 hidden md:block z-[1] relative rounded-md overflow-hidden">
                <Image 
                    className="w-full object-cover"
                    src={`/imgs/projects/${image}`}
                    alt={title}
                    width={300}
                    height={200}
                />
                <div className={twMerge(
                    "p-6 flex justify-between items-end z-[2] absolute bottom-0 left-0 w-full text-light bg-gradient-to-t from-black to-black/0 transition-[bottom,opacity] duration-300",
                    "group-hover:-bottom-4 group-hover:opacity-0"
                )}>
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold">
                            {title}
                        </span>
                        <span>
                            {shortDescription}
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-nowrap">
                            Läs mer
                        </span>
                        <ArrowIcon className="w-5 -rotate-90" />
                    </div>
                </div>
            </div>
            <div className={twMerge(
                "z-10 md:absolute md:bottom-0 md:w-full md:opacity-0 bg-primary transition-[top,opacity,transform,box-shadow] duration-500 delay-100 rounded-md",
                "group-hover:opacity-100 group-hover:md:scale-110 group-hover:shadow-lg",
            )}>
                <Image 
                    className="w-full"
                    src={`/imgs/projects/${image}`}
                    alt={title}
                    width={300}
                    height={200}
                />
                <div className={twMerge(
                    "p-6 md:py-0 grid md:grid-rows-[0fr] overflow-hidden transition-[padding,grid-template-rows] duration-500",
                    "group-hover:py-6 group-hover:grid-rows-[1fr]",
                )}>
                    <div className="min-h-0">
                        <span className="text-2xl font-semibold">
                            {title}
                        </span>
                        <p className="text-muted mt-1">
                            {description}
                        </p>
                        <Button 
                            className="w-full mt-4 bg-t-primary hover:bg-t-primary/90 transition-colors"
                            href={link}
                        >
                            Besök sida
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}