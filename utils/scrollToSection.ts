const OFFSET = 100;
export default function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if(section) {
        window.scrollTo({
            top: section.offsetTop - OFFSET,
            behavior: 'smooth',
        })
    }
}