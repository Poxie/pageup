"use client";
import FocusCards from '@/assets/data/focus.json';
import HomeFocusCard from './HomeFocusCard';
import { useRef } from 'react';
import useAnimateIntoView, { DEFAULT_INITIAL_STATE } from '@/hooks/useAnimateIntoView';

export default function HomeFocus() {
    const header = useRef<HTMLHeadingElement>(null);
    const paragraph = useRef<HTMLParagraphElement>(null);

    useAnimateIntoView(header);
    useAnimateIntoView(paragraph, { siblingRef: header, delay: 100 });

    return(
        <section id="how-we-work">
            <div className="p-section w-main max-w-main mx-auto md:flex divide-y-2 md:divide-y-0 md:divide-x-2 divide-secondary">
                <div className="pb-5 md:pb-0 md:pr-8 flex-1 flex flex-col gap-3 md:sticky md:top-[20%] md:self-start">
                    <h2 
                        className="text-3xl md:text-4xl font-semibold"
                        style={DEFAULT_INITIAL_STATE}
                        ref={header}
                    >
                        Vårt fokus är
                        {' '}
                        <span className="text-c-primary">
                            prestation.
                        </span>
                    </h2>
                    <p 
                        className="text-sm md:text-base"
                        style={DEFAULT_INITIAL_STATE}
                        ref={paragraph}
                    >
                        Vi strävar efter att leverera webbsidor som är optimerade för alla användare, med hög tillgänglighet, SEO-optimering, responsiv design och snabb prestanda. Varje detalj är noggrant utformad för att säkerställa en användarvänlig och effektiv upplevelse oavsett enhet eller plattform
                    </p>
                </div>
                <ul className="pt-5 md:pt-0 md:pl-8 flex-1 grid gap-3 lg:grid-cols-2">
                    {FocusCards.map((card, index) => (
                        <li key={card.title}>
                            <HomeFocusCard 
                                index={index}
                                card={card}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}