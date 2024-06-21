import { twMerge } from "tailwind-merge";

export default function BallDivider({ className, dark }: {
    className?: string;
    dark?: boolean;
}) {
    const url = dark ? '/halfball-dark.svg' : '/halfball.svg';
    return(
        <div 
            style={{
                backgroundImage: `url('${url}')`,
            }}
            className={twMerge(
                `w-full h-3.5`,
                className,
            )}
        />
    )
}