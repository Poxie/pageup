import FocusCards from '@/assets/data/focus.json';
import Image from "next/image";
import BallDivider from "../BallDivider";
import HomeFocusCard from './HomeFocusCard';

export default function HomeFocus() {
    return(
        <section>
            <div className="p-section w-main max-w-main mx-auto flex divide-x-2 divide-secondary">
                <div className="pr-8 flex-1 flex flex-col gap-3 sticky top-6 self-start">
                    <h2 className="text-4xl font-semibold">
                        Vårt fokus är
                        {' '}
                        <span className="text-c-primary">
                            prestation.
                        </span>
                    </h2>
                    <span>
                        Vi strävar efter att leverera webbsidor som är optimerade för alla användare, med hög tillgänglighet, SEO-optimering, responsiv design och snabb prestanda. Varje detalj är noggrant utformad för att säkerställa en användarvänlig och effektiv upplevelse oavsett enhet eller plattform
                    </span>
                </div>
                <ul className="pl-8 flex-1 grid grid-cols-2 gap-3">
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