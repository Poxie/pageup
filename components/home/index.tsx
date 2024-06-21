import BallDivider from "../BallDivider";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeFocus from "./HomeFocus";
import HomeHero from "./HomeHero";
import HomeProjects from "./HomeProjects";

export default function Home() {
    return(
        <main>
            <HomeHero />
            <HomeAbout />
            <BallDivider />
            <HomeFocus />
            <BallDivider className="rotate-180" />
            <HomeProjects />
            <HomeContact />
            <BallDivider className="rotate-180" dark />
        </main>
    )
}