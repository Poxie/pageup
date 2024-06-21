export default function Footer() {
    return(
        <footer className="py-6 flex justify-center bg-tertiary">
            <span className="text-sm">
                Copyright © 2024 {process.env.NEXT_PUBLIC_WEBSITE_NAME}. All rights reserved.
            </span>
        </footer>
    )
}