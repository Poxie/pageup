import ArrowIcon from "@/assets/icons/ArrowIcon";
import { twMerge } from "tailwind-merge";

const HERO_TITLE = "Alla behöver en hemsida.";
const HERO_SUBTITLE = "Och det löser vi! Vi skapar fantastiska, högpresterande webbplatser anpassade efter dina affärsbehov. Oavsett om du är en startup eller ett etablerat varumärke, förverkligar vi din vision med innovativ design och sömlös funktionalitet. Låt oss bygga din framgångshistoria online tillsammans.";
export default function HomeHero() {
    return(
        <div className={twMerge(
            "h-[80dvh] relative",
            "flex items-center justify-center"
        )}>
            <div className="absolute h-full w-full overflow-hidden">
                <div className={twMerge(
                    "h-full w-full scale-105 blur-sm",
                    "bg-[url('/hero.jpg')] bg-no-repeat bg-cover bg-center",
                    "after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-50 after:z-10"
                )} />
            </div>

            <div className="w-[800px] max-w-main relative z-20 grid gap-5 text-center text-light">
                <h1 className="text-5xl font-bold">
                    {HERO_TITLE}
                </h1>
                <p className="text-xl leading-8">
                    {HERO_SUBTITLE}
                </p>
            </div>

            <div className="z-20 absolute bottom-0 left-2/4 -translate-x-2/4">
                <svg className="absolute right-[calc(100%-1.9rem)] bottom-0 translate-y-[.2rem]" xmlns="http://www.w3.org/2000/svg" width="157" height="76" viewBox="0 0 149 68" fill="none">
                    <path d="M149 67.5V0C149 0 128.808 19.1524 92.6028 38.4238C56.3972 57.6952 0 67.5 0 67.5H149Z" className="fill-secondary" />
                </svg>
                <div className={twMerge(
                    "[--width:10rem] [--height:5.5rem]",
                    "w-[--width] h-[--height] rounded-t-full bg-secondary",
                    "after:absolute after:right-full after:top-0 after:h-[calc(var(--height)/2)] after:w-full after:rotate-45 after:rounded-full",
                )} />
                <svg className="absolute left-[calc(100%-1.9rem)] scale-x-[-1] bottom-0 translate-y-[.2rem]" xmlns="http://www.w3.org/2000/svg" width="157" height="76" viewBox="0 0 149 68" fill="none">
                    <path d="M149 67.5V0C149 0 128.808 19.1524 92.6028 38.4238C56.3972 57.6952 0 67.5 0 67.5H149Z" className="fill-secondary" />
                </svg>

                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center gap-2 text-primary">
                    <span>
                        Läs mer
                    </span>
                    <ArrowIcon className="w-6 -mb-1 animate-bounce" />
                </div>
            </div>
        </div>
    )
}