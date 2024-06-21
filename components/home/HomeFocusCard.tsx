import { FocusCard } from "@/assets/data/types"
import CheckmarkIcon from "@/assets/icons/CheckmarkIcon";

export default function HomeFocusCard({ card: { title, description } }: {
    card: FocusCard;
}) {
    return(
        <div className="p-5 grid gap-1 relative border-[1px] border-tertiary rounded-md">
            <div className="flex justify-between">
                <span className="text-lg font-medium">
                    {title}
                </span>
                <CheckmarkIcon className="w-7 text-c-primary" />
            </div>
            <span className="text-sm text-muted">
                {description}
            </span>
        </div>
    )
}