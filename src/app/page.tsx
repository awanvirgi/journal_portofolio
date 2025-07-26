'use client'

import { useEffect, useRef, useState } from "react";
import HeroSection from "../component/heroSection";
import SkillSection from "../component/skillSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import ProjectSection from "@/component/projectSection";

export default function Home() {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function makeNewPosition() {
        const h = window.innerHeight - 50;
        const w = window.innerWidth - 50;
        const nh = Math.floor(Math.random() * h);
        const nw = Math.floor(Math.random() * w);
        return { x: nw, y: nh };
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(makeNewPosition());
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-[#393939] lg:py-10 flex flex-col items-center gap-4">
            <div
                ref={cursorRef}
                className="z-100 w-8 h-8 rounded-full fixed transition-all duration-700 ease-in-out hidden lg:block"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}>
                <FontAwesomeIcon icon={faArrowPointer} className="text-2x" />
            </div>
            <div className="max-w-[1080px]">
                <HeroSection />
                <SkillSection />
            </div>
            <div className="max-w-[1080px] lg:min-w-[1080px]">
                <ProjectSection />
            </div>

        </div>
    );
}
