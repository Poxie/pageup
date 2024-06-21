import { twMerge } from "tailwind-merge";

export default function Button({ children, onClick, className, disabled }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean
}) {
    return (
        <button 
            className={twMerge(
                "px-4 py-3 bg-c-primary text-light rounded-md",
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}