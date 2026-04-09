import React from "react";
import devopsIntegrationImg from "../../assets/image/devops_integration.png";

export default function BlackSection() {
    return (
        <section
            id="devops-integration-section"
            className="w-full relative h-[100vh] overflow-hidden bg-[#f4ede6]"
        >
            {/* Background column dividers visibly matching the exact grid pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="w-full h-full flex divide-x divide-[#4d6628] divide-dashed md:divide-solid">
                    {[...Array(6)].map((_, i) => <div key={i} className="flex-1 w-full h-full border-[#4d6628]" />)}
                </div>
            </div>

            {/* Top/Bottom border lines framing the illustration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#4d6628] opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4d6628] opacity-40 pointer-events-none" />

            {/* Main content grid identical to the image layout */}
            <div className="relative z-10 w-full h-full max-w-[1700px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center">

                {/* Left Text (Top aligned) */}
                <div className="flex flex-col justify-start h-full pt-[15vh]">
                    <h2 className="text-[2.5rem] md:text-[3vw] lg:text-[3.5vw] font-[500] leading-[1.1] tracking-tight text-[#4d6628] font-['Outfit']">
                        Monitor repositories
                        <br />
                        effortlessly via
                        <br />
                        GitHub
                    </h2>
                </div>

                {/* Center DevOps Integration Graphic */}
                <div className="relative w-full aspect-square flex items-center justify-center min-w-[350px] max-w-[550px] mx-auto overflow-hidden">
                    <img 
                        src={devopsIntegrationImg} 
                        alt="BugSentry Integration Shield" 
                        className="w-full h-auto object-contain transform scale-110"
                        style={{ filter: "drop-shadow(0 20px 40px rgba(77,102,40,0.15))" }}
                    />
                    
                    {/* Scanning Line Animation Mockup */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#4d6628] opacity-30 blur-[1px] transform translate-y-[-100%] animate-[scan_3s_infinite]" />
                </div>

                {/* Right Text (Bottom aligned) */}
                <div className="flex flex-col justify-end h-full pb-[15vh]">
                    <h2 className="text-[2.5rem] md:text-[3vw] lg:text-[3.5vw] font-[500] leading-[1.1] tracking-tight text-[#4d6628] font-['Outfit'] md:text-left pl-0 md:pl-12">
                        analyzed instantly
                        <br />
                        by our AI
                    </h2>
                </div>

            </div>
        </section>
    );
}
