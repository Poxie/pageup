import { FocusCard } from "@/assets/data/types"
import CheckmarkIcon from "@/assets/icons/CheckmarkIcon";
import useAnimateIntoView, { DEFAULT_INITIAL_STATE } from "@/hooks/useAnimateIntoView";
import { useRef } from "react";

export default function HomeFocusCard({ index, card: { title, description } }: {
    card: FocusCard;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useAnimateIntoView(ref);

    return(
        <div 
            className="p-5 h-full flex flex-col gap-1 relative border-[1px] border-tertiary rounded-md"
            style={DEFAULT_INITIAL_STATE}
            ref={ref}
        >
            <div className="flex justify-between">
                <span className="text-lg font-medium">
                    {title}
                </span>
                <CheckmarkIcon className="w-7 text-c-primary" />
            </div>
            <span className="text-sm text-muted">
                {description}
            </span>
        </div>
    )
}