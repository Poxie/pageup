import { twMerge } from "tailwind-merge";

export default function BallDivider({ className }: {
    className?: string;
}) {
    return(
        <div 
            className={twMerge(
                "bg-[url('/halfball.svg')] w-full h-3.5",
                className,
            )}
        />
    )
}