import BallDivider from "../BallDivider";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeFocus from "./HomeFocus";
import HomeHero from "./HomeHero";
import HomeProcess from "./HomeProcess";
import HomeProjects from "./HomeProjects";

export default function Home() {
    return(
        <main>
            <HomeHero />
            <HomeProcess />
            <HomeProjects />
            <HomeFocus />
            <BallDivider className="rotate-180" />
            <HomeAbout />
            <HomeContact />
        </main>
    )
}