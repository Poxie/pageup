import HomeContactForm from "./HomeContactForm";

export default function HomeContact() {
    return(
        <section className="bg-secondary" id="contact-us">
            <div className="p-section w-main max-w-main mx-auto border-t-[1px] border-t-tertiary">
                <h2 className="mb-5 text-3xl md:text-4xl font-bold text-center">
                    Låt oss skapa kontakt.
                </h2>
                <HomeContactForm />
            </div>
        </section>
    )
}