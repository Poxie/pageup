import BrainstormIcon from "@/assets/icons/BrainstormIcon";
import BuildIcon from "@/assets/icons/BuildIcon";
import DesignIcon from "@/assets/icons/DesignIcon";

export default function HomeProcessIcon({ icon }: {
    icon: string;
}) {
    const className = "w-56 fill-c-primary/50";

    switch(icon) {
        case 'brainstorm':
            return <BrainstormIcon className={className} />;
        case 'design':
            return <DesignIcon className={className} />;
        case 'build':
            return <BuildIcon className={className} />;
        default:
            return null;
    }
}