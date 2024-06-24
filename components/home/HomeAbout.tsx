"use client";
import { useRef } from 'react';
import { ABOUT_CARDS } from '@/assets/data';
import HomeAboutCard from './HomeAboutCard';
import useAnimateIntoView, { DEFAULT_INITIAL_STATE } from '@/hooks/useAnimateIntoView';

export default function HomeAbout() {
    const header = useRef<HTMLHeadingElement>(null);

    useAnimateIntoView(header);

    return(
        <section className="p-section bg-secondary" id="about-us">
            <h2 
                className="mb-16 text-4xl font-bold text-center"
                style={DEFAULT_INITIAL_STATE}
                ref={header}
            >
                Vilka ligger bakom 
                {' '}
                <span className="text-c-primary">
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME}?
                </span>
            </h2>
            <ul className="w-main max-w-main mx-auto grid gap-x-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {ABOUT_CARDS.map((card, key) => (
                    <li key={card.name}>
                        <HomeAboutCard 
                            index={key}
                            data={card}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}