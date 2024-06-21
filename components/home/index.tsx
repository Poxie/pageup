import BallDivider from "../BallDivider";
import HomeAbout from "./HomeAbout";
import HomeFocus from "./HomeFocus";
import HomeHero from "./HomeHero";

export default function Home() {
    return(
        <main>
            <HomeHero />
            <HomeAbout />
            <BallDivider />
            <HomeFocus />
            <BallDivider className="rotate-180" />
        </main>
    )
}