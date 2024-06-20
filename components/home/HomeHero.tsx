import { twMerge } from "tailwind-merge";

const HERO_TITLE = "Alla behöver en hemsida.";
const HERO_SUBTITLE = "Och det löser vi! Vi skapar fantastiska, högpresterande webbplatser anpassade efter dina affärsbehov. Oavsett om du är en startup eller ett etablerat varumärke, förverkligar vi din vision med innovativ design och sömlös funktionalitet. Låt oss bygga din framgångshistoria online tillsammans.";
export default function HomeHero() {
    return(
        <div className={twMerge(
            "h-[80dvh] relative overflow-hidden",
            "flex items-center justify-center"
        )}>
            <div className={twMerge(
                "h-full w-full scale-105 absolute z-10 blur-sm",
                "bg-[url('/hero.jpg')] bg-no-repeat bg-cover bg-center",
                "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-50 after:z-10"
            )} />

            <div className="w-[800px] max-w-main relative z-20 grid gap-5 text-center text-light">
                <h1 className="text-5xl font-bold">
                    {HERO_TITLE}
                </h1>
                <p className="text-xl leading-8">
                    {HERO_SUBTITLE}
                </p>
            </div>
        </div>
    )
}