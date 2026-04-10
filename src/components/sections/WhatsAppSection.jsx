import React from "react";
import videoSrc from "../../assets/video/new_video.mp4";

const WA_CHANNELS = [
    { name: "GitHub", icon: "ri-github-fill", color: "#ffffff", bg: "rgba(255,255,255,0.1)", border: "rgba(255,255,255,0.2)" },
    { name: "GitLab", icon: "ri-gitlab-fill", color: "#FCA121", bg: "rgba(252,161,33,0.15)", border: "rgba(252,161,33,0.3)" },
];

const WA_FEATURES = [
    { icon: "ri-bug-line", text: "Automated syntax & logic debugging" },
    { icon: "ri-git-branch-line", text: "Predictive module failure tracking" },
    { icon: "ri-line-chart-line", text: "Technical debt cost analysis" },
    { icon: "ri-shield-keyhole-line", text: "Proactive security vulnerability scans" },
];

export default function WhatsAppSection() {
    return (
        <section id="whatsapp-section" className="relative w-full h-[100vh] z-30 overflow-hidden bg-black" style={{ boxShadow: "0 -20px 50px rgba(0,0,0,0.3)" }}>
            {/* Full-screen Video Box (Will be animated to 50% width) */}
            <div className="wa-video-box absolute top-0 left-0 w-full h-full overflow-hidden bg-black">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={videoSrc}
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ filter: "brightness(0.9)" }}
                />
            </div>

            {/* Right Box: Content */}
            <div className="wa-content-box absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#0a0a0a] flex flex-col justify-center px-8 md:px-[6vw] lg:px-[6vw]">
                {/* Title */}
                <h2 className="font-['Outfit'] font-[900] text-[clamp(2rem,3vw,3.2rem)] text-white mb-5 leading-[1.05] tracking-tight">
                    Predict system failures<br />
                    <span className="font-serif italic font-[400] text-[#aaaaaa]">before they happen.</span>
                </h2>

                <p className="text-[#eeeeee] opacity-80 text-[0.95rem] leading-[1.65] font-['Outfit'] max-w-[480px] mb-8 font-[500]">
                    Connect your repository to our multi-agent network. The AI instantly processes your codebase to flag vulnerabilities, predict 90-day crash risks, and generate pre-written "Shadow PRs".
                </p>

                {/* Channel Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-10">
                    {WA_CHANNELS.map(c => (
                        <div key={c.name} className="flex items-center gap-2 px-3 py-1 rounded-[14px] border border-solid" style={{ backgroundColor: c.bg, borderColor: c.border }}>
                            <i className={`${c.icon} text-[1rem]`} style={{ color: c.color }} />
                            <span className="font-['Outfit'] font-[700] text-[0.75rem] tracking-wide" style={{ color: c.color }}>{c.name}</span>
                        </div>
                    ))}
                </div>

                {/* Feature list */}
                <div className="flex flex-col gap-4">
                    {WA_FEATURES.map(f => (
                        <div key={f.text} className="flex items-center gap-4">
                            <div className="w-[36px] h-[36px] rounded-[10px] shrink-0 bg-white/5 border border-white/20 flex items-center justify-center">
                                <i className={`${f.icon} text-white opacity-80 text-[1.1rem]`} />
                            </div>
                            <span className="text-white opacity-90 text-[0.9rem] font-['Outfit'] font-[600] tracking-wide">{f.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
