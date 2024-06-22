import BallDivider from "../BallDivider";

export default function Footer() {
    return(
        <footer className="py-6 relative bg-tertiary">
            <BallDivider className="absolute bottom-full rotate-180" dark />
            <div className="flex justify-center">
                <span className="text-sm">
                    Copyright © 2024 {process.env.NEXT_PUBLIC_WEBSITE_NAME}. All rights reserved.
                </span>
            </div>
        </footer>
    )
}