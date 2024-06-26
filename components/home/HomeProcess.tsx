"use client";
import React from 'react';
import process from '@/assets/data/process.json';
import HomeProcessCard from './HomeProcessCard';
import HomeProcessLine from './HomeProcessLine';

export default function HomeProcess() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const refs = process.map(() => React.createRef<HTMLDivElement>());

    return(
        <section className="py-40 bg-secondary overflow-hidden">
            <div className="w-[1000px] max-w-main mx-auto relative grid gap-72" ref={containerRef}>
                {process.map((step, index) => {
                    const ref = refs[index];

                    return(
                        <HomeProcessCard 
                            card={step}
                            index={index}
                            ref={ref}
                            key={step.title}
                        />
                    )
                })}

                <HomeProcessLine 
                    refs={refs}
                    containerRef={containerRef}
                />
            </div>
        </section>
    )
}