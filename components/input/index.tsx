export default function Input({ onChange, value, placeholder, textArea }: {
    onChange: (text: string) => void;
    value: string;
    placeholder: string;
    textArea?: boolean;
}) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(e.target.value);
    }

    const props = {
        className: 'p-3 bg-secondary border-[1px] border-tertiary rounded-md w-full',
        onChange: handleChange,
        placeholder,
        value,
    }

    if(textArea) {
        return(
            <textarea {...props} />
        )
    }

    return(
        <input {...props} />
    )
}