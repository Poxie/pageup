"use client";
import { useState } from "react";
import Input from "../input";
import Button from "../button";
import { twMerge } from "tailwind-merge";

const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function HomeContactForm() {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [feedback, setFeedback] = useState<null | {
        message: string;
        type: 'danger' | 'success';
    }>(null);
    const [loading, setLoading] = useState(false);

    const updateInfo = (key: keyof typeof info, value: string) => {
        setInfo({
            ...info,
            [key]: value,
        });
        setFeedback(null);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!info.name || !info.email || !info.message) {
            setFeedback({
                message: 'Var snäll och fyll i alla fälten.',
                type: 'danger',
            })
            return;
        }
        if(info.email.match(mailRegex) === null) {
            setFeedback({
                message: 'Var snäll och fyll i en giltig email address.',
                type: 'danger',
            })
            return;
        }
        

        setLoading(true);
        const response = await fetch(`/api/message`, {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        setLoading(false);

        if(!response.ok) {
            return setFeedback({
                message: data.message,
                type: 'danger',
            })
        }

        setFeedback({
            message: data.message,
            type: 'success',
        })
        setInfo({
            name: '',
            email: '',
            message: '',
        })
    }

    return(
        <form 
            className="w-[650px] max-w-full mx-auto p-5 flex flex-col gap-3 bg-primary rounded-lg"
            onSubmit={handleSubmit}
        >
            {feedback && (
                <span className={twMerge(
                    "p-3 border-[1px] rounded-md",
                    feedback.type === 'danger' && 'border-danger bg-danger/30',
                    feedback.type === 'success' && 'border-success bg-success/30',
                )}>
                    {feedback.message}
                </span>
            )}
            <div className="flex flex-col md:flex-row gap-3">
                <Input 
                    onChange={text => updateInfo('name', text)}
                    placeholder="Fullständigt namn"
                    value={info.name}
                />
                <Input 
                    onChange={text => updateInfo('email', text)}
                    placeholder="Email address"
                    value={info.email}
                />
            </div>
            <Input 
                onChange={text => updateInfo('message', text)}
                placeholder="Meddelande"
                value={info.message}
                textArea
            />
            <Button 
                className="font-semibold self-end"
                disabled={loading}
            >
                {loading ? 'Skapar kontakt...' : 'Skapa kontakt'}
            </Button>
        </form>
    )
}