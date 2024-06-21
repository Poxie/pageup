import { ABOUT_CARDS } from '@/assets/data';
import HomeAboutCard from './HomeAboutCard';

export default function HomeAbout() {
    return(
        <section className="p-section bg-secondary">
            <h2 className="mb-16 text-4xl font-bold text-center">
                Vilka ligger bakom 
                {' '}
                <span className="text-c-primary">
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME}?
                </span>
            </h2>
            <ul className="w-main max-w-main mx-auto grid grid-cols-3 gap-4">
                {ABOUT_CARDS.map(card => (
                    <li key={card.name}>
                        <HomeAboutCard 
                            data={card}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}