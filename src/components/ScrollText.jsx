import React, { useEffect, useRef, useState } from "react";



const ScrollText = () => {

    const title = [
        {
            title: "Calculate"
        },
        {
            title: "Square"
        },
        {
            title: "-"
        },
        {
            title: "Calculate"
        },
        {
            title: "Square"
        },
        {
            title: "-"
        },
        {
            title: "Calculate"
        },
        {
            title: "Square"
        },
        {
            title: "-"
        },
        {
            title: "Calculate"
        },
        {
            title: "Square"
        },
        {
            title: "-"
        },
    ];

    const containerRef = useRef(null);
    const [text, setText] = useState([...title, ...title]); // duplicate for looping

    useEffect(() => {
        const container = containerRef.current;

        const scrollSpeed = 1; // pixels per interval
        const interval = setInterval(() => {
            if (container) {
                container.scrollLeft += scrollSpeed;

                // Reset scroll to beginning when it ends
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
        }, 10); // smaller = smoother

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden text-[#ffffff] py-[18px] px-4">
            <div
                ref={containerRef}
                className="flex gap-6"
                style={{
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",
                }}
            >
                {text.map((text, index) => (
                    <h1 key={index} className="text-[6rem] font-bold scroll-font">
                        {text.title}
                    </h1>
                ))}
            </div>
        </div>
    );
};

export default ScrollText;