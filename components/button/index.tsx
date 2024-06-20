export default function Button({ children, onClick }: {
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <button 
            className="px-4 py-3 bg-c-primary text-light rounded-md"
            onClick={onClick}
        >
            {children}
        </button>
    )
}