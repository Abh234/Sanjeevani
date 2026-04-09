import React from "react";
import rightImage from "../../assets/image/devops_rightside_bg.png";

export default function VoiceSection() {
    return (
        <section id="sms-voice-section" className="relative w-full h-[100vh] z-30 overflow-hidden bg-[#f4ede6]" style={{ boxShadow: "0 -20px 50px rgba(0,0,0,0.3)" }}>

            {/* Full-screen Image Box (Will be animated to 50% width on the right) */}
            <div className="sv-image-box absolute top-0 right-0 w-full h-full overflow-hidden bg-[#f4ede6]">
                <img
                    src={rightImage}
                    alt="Pharmacy Voice AI Interface"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: "brightness(0.95)" }}
                />
            </div>

            {/* Left Box: Content (Starts hidden off-screen to the left) */}
            <div className="sv-content-box absolute top-0 left-0 w-full md:w-1/2 h-full bg-[#f4ede6] flex flex-col justify-center px-8 md:px-[6vw] lg:px-[6vw]">

                <div style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    marginBottom: "30px", opacity: 0.8
                }}>
                    <i className="ri-robot-2-line" style={{ color: "#4d6628", fontSize: "1.2rem" }} />
                    <span style={{ color: "#4d6628", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Autonomous Context Engine</span>
                </div>

                <h2 style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                    fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#1a2a0a",
                    margin: "0 0 24px 0", lineHeight: 1.05, letterSpacing: "-0.03em"
                }}>
                    A Senior Engineer Itself&nbsp;—<br />
                    Reviewing Every Commit
                </h2>

                <div style={{ maxWidth: "480px" }}>
                    <p style={{
                        color: "#4d6628", opacity: 0.85, fontSize: "0.95rem",
                        lineHeight: 1.65, fontFamily: "'Outfit', sans-serif", margin: "0 0 16px",
                        fontWeight: 600
                    }}>
                        Just like having a senior engineer constantly reviewing your code, BugSentry acts silently.
                    </p>
                    <p style={{
                        color: "#4d6628", opacity: 0.85, fontSize: "0.95rem",
                        lineHeight: 1.65, fontFamily: "'Outfit', sans-serif", margin: "0 0 32px",
                        fontWeight: 500
                    }}>
                        It continuously scans your repositories, maps dependencies, and understands historical context. When a deployment occurs, it instantly knows if the new code breaks existing architecture — all without you writing a single test.
                    </p>
                </div>

            </div>

        </section>
    );
}
