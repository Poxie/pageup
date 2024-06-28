"use client";
import projects from '@/assets/data/projects.json';
import HomeProjectCard from './HomeProjectCard';
import { useRef } from 'react';
import useAnimateIntoView from '@/hooks/useAnimateIntoView';

export default function HomeProjects() {
    const ref = useRef<HTMLHeadingElement>(null);
    const moreProjectsRef = useRef<HTMLLIElement>(null);
    
    const { initialState } = useAnimateIntoView(ref);
    const { initialState: moreProjectsInitial } = useAnimateIntoView(moreProjectsRef, { delay: (projects.length % 3) * 150 });

    return(
        <section className="p-section bg-secondary" id="references">
            <div className="w-main max-w-main mx-auto">
                <h2 
                    className="mb-8 text-3xl md:text-4xl font-bold text-center"
                    style={initialState}
                    ref={ref}
                >
                    Vi har arbetat med dessa företag.
                </h2>
                <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {projects.map((project, index) => (
                        <li key={project.title}>
                            <HomeProjectCard 
                                card={project}
                                index={index}
                            />
                        </li>
                    ))}
                    <li 
                        className="py-12 flex justify-center items-center border-2 border-tertiary rounded-md"
                        style={moreProjectsInitial}
                        ref={moreProjectsRef}
                    >
                        <span>
                            Fler projekt är på väg.
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    )
}