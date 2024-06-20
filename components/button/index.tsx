export default function Button({ children }: {
    children: React.ReactNode;
}) {
    return (
        <button className="px-4 py-3 bg-c-primary text-light rounded-md">
            {children}
        </button>
    )
}