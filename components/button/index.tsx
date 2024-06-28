import { twMerge } from "tailwind-merge";

export default function Button({ children, onClick, className, disabled, href }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    href?: string;
}) {
    className = twMerge(
        "px-4 py-3 block text-center bg-c-primary text-light rounded-md",
        className,
    );
    const props = {
        className,
        onClick,
    }

    if(href) {
        return (
            <a target="_blank" href={href} {...props}>
                {children}
            </a>
        )
    }

    return (
        <button {...props}>
            {children}
        </button>
    )
}