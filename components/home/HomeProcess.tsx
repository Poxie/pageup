"use client";
import React from 'react';
import process from '@/assets/data/process.json';
import HomeProcessCard from './HomeProcessCard';
import HomeProcessLine from './HomeProcessLine';

export default function HomeProcess() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const refs = process.map(() => React.createRef<HTMLDivElement>());

    return(
        <section className="bg-secondary overflow-hidden" id="process">
            <div className="relative" ref={containerRef}>
                {process.map((step, index) => {
                    const ref = refs[index];

                    return(
                        <HomeProcessCard 
                            card={step}
                            index={index}
                            isLast={index === process.length - 1}
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