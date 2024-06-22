import FocusCards from '@/assets/data/focus.json';
import Image from "next/image";
import BallDivider from "../BallDivider";
import HomeFocusCard from './HomeFocusCard';

export default function HomeFocus() {
    return(
        <section>
            <div className="p-section w-main max-w-main mx-auto md:flex divide-y-2 md:divide-y-0 md:divide-x-2 divide-secondary">
                <div className="pb-5 md:pb-0 md:pr-8 flex-1 flex flex-col gap-3 md:sticky md:top-[20%] md:self-start">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Vårt fokus är
                        {' '}
                        <span className="text-c-primary">
                            prestation.
                        </span>
                    </h2>
                    <span className="text-sm md:text-base">
                        Vi strävar efter att leverera webbsidor som är optimerade för alla användare, med hög tillgänglighet, SEO-optimering, responsiv design och snabb prestanda. Varje detalj är noggrant utformad för att säkerställa en användarvänlig och effektiv upplevelse oavsett enhet eller plattform
                    </span>
                </div>
                <ul className="pt-5 md:pt-0 md:pl-8 flex-1 grid gap-3 lg:grid-cols-2">
                    {FocusCards.map(card => (
                        <li key={card.title}>
                            <HomeFocusCard 
                                card={card}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}