import { ProcessCard } from "@/assets/data/types"
import CloudIllustration from "@/assets/illustrations/CloudIllustration";
import { twMerge } from "tailwind-merge";
import React, { RefObject, useRef } from "react";
import BrainstormIcon from "@/assets/icons/BrainstormIcon";
import HomeProcessIcon from "./HomeProcessIcon";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";

type Props = {
    card: ProcessCard;
    index: number;
}

const HomeProcessCard = React.forwardRef<HTMLDivElement, Props>(({
    index,
    card: { title, description, icon }, 
}, ref) => {
    const textRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    const { initialState } =  useAnimateIntoView(textRef, { siblingRef: iconRef, threshold: .8 });
    useAnimateIntoView(iconRef, { delay: 150, siblingRef: textRef, threshold: .8 });

    const reversed = index % 2 !== 0;

    return(
        <div className={twMerge(
            "flex items-center relative z-10",
            reversed ? "flex-row-reverse" : "flex-row",
        )}>
            <div 
                className="flex-1 relative"
                style={initialState}
                ref={textRef}
            >
                <h2 className="mb-3 text-2xl md:text-3xl font-semibold">{title}</h2>
                <p className="md:text-lg leading-8">{description}</p>
                <div 
                    className={twMerge(
                        "z-[-1] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4",
                    )}
                    ref={ref}
                >
                    <CloudIllustration index={index} />
                </div>
            </div>
            <div 
                className={twMerge(
                    "flex-1 hidden md:flex",
                    !reversed && 'justify-end',
                )}
                style={initialState}
                ref={iconRef}
            >
                <HomeProcessIcon 
                    icon={icon}
                />
            </div>
        </div>
    )
})
export default HomeProcessCard;