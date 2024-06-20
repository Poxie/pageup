"use client";
import Link from "next/link";
import Button from "../button";

const tabs = [
    { text: 'Om oss', id: 'about-us' },
    { text: 'Hur vi jobbar', id: 'how-we-work' },
    { text: 'Referenser', id: 'references' },
]
export default function Navbar() {
    return(
        <nav className="w-main max-w-main p-6 absolute left-2/4 -translate-x-2/4 z-20 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link
                    className="text-2xl font-bold text-light" 
                    href={'/'}
                >
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                </Link>
                <ul className="flex gap-4">
                    {tabs.map(tab => (
                        <li key={tab.id}>
                            <a
                                className="text-light"
                                href={`#${tab.id}`}
                            >
                                {tab.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <Button>
                Kontakta oss
            </Button>
        </nav>
    )
}