import { ProcessCard } from "@/assets/data/types"
import CloudIllustration from "@/assets/illustrations/CloudIllustration";
import { twMerge } from "tailwind-merge";
import React, { RefObject, useRef } from "react";
import BrainstormIcon from "@/assets/icons/BrainstormIcon";
import HomeProcessIcon from "./HomeProcessIcon";
import useAnimateIntoView from "@/hooks/useAnimateIntoView";
import WaveDivider from "@/assets/icons/WaveDivider";

type Props = {
    card: ProcessCard;
    index: number;
    isLast: boolean;
}

const HomeProcessCard = React.forwardRef<HTMLDivElement, Props>(({
    index,
    isLast,
    card: { title, description, icon }, 
}, ref) => {
    const textRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    const { initialState } =  useAnimateIntoView(textRef, { siblingRef: iconRef, threshold: .8 });
    useAnimateIntoView(iconRef, { delay: 150, siblingRef: textRef, threshold: .8 });

    const reversed = index % 2 !== 0;

    return(
        <>
        <div className={twMerge(
            "py-24 md:py-36 relative",
            isLast && 'bg-primary',
        )}>
            {isLast && (
                <WaveDivider className="absolute top-0 left-0 w-full" />
            )}
            <div className={twMerge(
                "w-[1000px] max-w-main mx-auto flex items-center relative z-10",
                reversed ? "flex-row-reverse" : "flex-row",
            )}>
                <div 
                    className="flex-1 relative"
                    style={initialState}
                    ref={textRef}
                >
                    <h2 className="mb-3 text-2xl md:text-3xl font-semibold">{title}</h2>
                    <p className="text-sm md:text-lg leading-7">{description}</p>
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
        </div>
        </>
    )
})
HomeProcessCard.displayName = 'HomeProcessCard';

export default HomeProcessCard;