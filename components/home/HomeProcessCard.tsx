import { ProcessCard } from "@/assets/data/types"
import CloudIllustration from "@/assets/illustrations/CloudIllustration";
import { twMerge } from "tailwind-merge";
import React, { RefObject } from "react";
import BrainstormIcon from "@/assets/icons/BrainstormIcon";
import HomeProcessIcon from "./HomeProcessIcon";

type Props = {
    card: ProcessCard;
    index: number;
}

const HomeProcessCard = React.forwardRef<HTMLDivElement, Props>(({
    index,
    card: { title, description, icon }, 
}, ref) => {
    const reversed = index % 2 !== 0;

    return(
        <div className={twMerge(
            "flex items-center relative z-10",
            reversed ? "flex-row-reverse" : "flex-row",
        )}>
            <div className="flex-1 relative">
                <h2 className="mb-3 text-3xl font-semibold">{title}</h2>
                <p className="text-lg leading-8">{description}</p>
                <div 
                    className={twMerge(
                        "z-[-1] absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4",
                    )}
                    ref={ref}
                >
                    <CloudIllustration index={index} />
                </div>
            </div>
            <div className={twMerge(
                "flex-1 flex",
                !reversed && 'justify-end',
            )}>
                <HomeProcessIcon 
                    icon={icon}
                />
            </div>
        </div>
    )
})
export default HomeProcessCard;