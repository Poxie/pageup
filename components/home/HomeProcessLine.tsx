import { RefObject, useEffect, useRef, useState } from "react";

const START_OFFSET = 50;
const CURVE_SIZE = 100;
export default function HomeProcessLine({ refs, containerRef }: {
    refs: RefObject<HTMLElement>[];
    containerRef: RefObject<HTMLElement>;
}) {
    const svgRef = useRef<SVGSVGElement>(null);

    const [points, setPoints] = useState<({
        x: number;
        y: number;
        isCurve?: boolean;
        isStart?: boolean;
    })[]>([]);

    const updatePosition = () => {
        if(!containerRef.current || !svgRef.current) return;

        const { left: containerLeft, top: containerTop, width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
        
        svgRef.current.setAttribute('viewBox', `0 0 ${containerWidth} ${containerHeight}`);

        const points: ({
            x: number;
            y: number;
            isCurve?: boolean;
            isStart?: boolean;
        })[] = [];
        for(let i = 0; i < refs.length; i++) {
            const currentRef = refs[i].current;
            const nextRef = refs[i + 1]?.current;
            
            if(!currentRef) return;

            const { left, top, height, width } = currentRef.getBoundingClientRect();
            const startPoint = { x: left - containerLeft + width / 2, y: top - containerTop + height - START_OFFSET, isStart: true };

            if(nextRef) {
                const { left: nextLeft, top: nextTop, height: nextHeight, width: nextWidth } = nextRef.getBoundingClientRect();
                const endPoint = { x: nextLeft - containerLeft + nextWidth / 2, y: nextTop - containerTop };

                const diffX = endPoint.x - startPoint.x;
                const diffY = endPoint.y - startPoint.y;

                const curvePoint1 = {
                    x: startPoint.x + diffX / 3,
                    y: startPoint.y + diffY + CURVE_SIZE,
                    isCurve: true,
                };
                
                const curvePoint2 = {
                    x: startPoint.x + diffX - diffX / 3,
                    y: startPoint.y - diffY / 3,
                }

                points.push(startPoint, curvePoint1, curvePoint2, endPoint);

                continue;
            }

            points.push(startPoint);
        }

        setPoints(points);
    }

    useEffect(() => {
        updatePosition();

        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    const pointsString = points.map(({ x, y, isCurve, isStart }) => {
        if(isCurve) return `C${x} ${y}`;
        if(isStart) return `M${x} ${y}`;
        return `${x} ${y}`;
    });
    const d = pointsString.join(', ')
    return(
        <svg
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }} 
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
        >
            <path d={d} stroke="black" strokeDasharray="8" strokeWidth={1.5} className="stroke-c-primary" fill="none" />
        </svg>
    )
}