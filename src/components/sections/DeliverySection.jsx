import React from "react";
import dashboardMockup from "../../assets/image/bugsentry_dashboard_mockup.png";

const browserWindowStyle = {
    width: "100%",
    maxWidth: "100%",
    background: "#0a0a0a",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
    position: "relative",
    transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
    zIndex: 2,
};

const trafficLightsStyle = {
    display: "flex",
    gap: "8px",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.03)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
};

const lightStyle = (color) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: color,
    opacity: 0.8
});

export default function DeliverySection() {
    return (
        <section id="delivery-section" style={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
            padding: "120px 6vw",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        }}>
            {/* Background Decor */}
            <div style={{
                position: "absolute",
                top: "40%",
                right: "-10%",
                width: "60vw",
                height: "60vw",
                background: "radial-gradient(circle, rgba(183,194,94,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0
            }} />

            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "80px",
                width: "100%",
                maxWidth: "1400px",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 1
            }}>
                
                {/* ── Left Content ── */}
                <div className="delivery-anim" style={{ 
                    flex: "1 1 450px",
                    textAlign: "left"
                }}>
                    <div style={{ 
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "6px 14px",
                        background: "rgba(183,194,94,0.08)",
                        border: "1px solid rgba(183,194,94,0.15)",
                        borderRadius: "99px",
                        marginBottom: "24px"
                    }}>
                        <i className="ri-shield-check-line" style={{ color: "#b7c25e", fontSize: "0.9rem" }} />
                        <span style={{ 
                            color: "#b7c25e", 
                            fontSize: "0.68rem", 
                            fontWeight: 700, 
                            letterSpacing: "0.15em", 
                            textTransform: "uppercase", 
                            fontFamily: "'Outfit', sans-serif" 
                        }}>Role-Based Intelligence</span>
                    </div>

                    <h2 style={{ 
                        fontFamily: "'Outfit', sans-serif", 
                        fontWeight: 900, 
                        fontSize: "clamp(2.5rem, 4.5vw, 4rem)", 
                        color: "#f4ede6", 
                        margin: "0 0 24px", 
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em"
                    }}>
                        Developer &amp; Manager <br/>
                        <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#c8dfa0" }}>in perfect sync.</span>
                    </h2>

                    <p style={{ 
                        color: "#f4ede6", 
                        opacity: 0.65, 
                        fontSize: "1.05rem", 
                        lineHeight: 1.7, 
                        fontFamily: "'Outfit', sans-serif", 
                        maxWidth: "520px",
                        margin: "0 0 40px"
                    }}>
                        Different views for different roles. BugSentry provides a unified interface that balances deep engineering insights with executive-level visibility.
                    </p>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        marginBottom: "48px"
                    }}>
                        <div style={{ display: "flex", gap: "16px" }}>
                            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(183,194,94,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <i className="ri-code-s-slash-line" style={{ color: "#b7c25e", fontSize: "1.1rem" }} />
                            </div>
                            <div>
                                <h4 style={{ color: "#f4ede6", fontSize: "1.05rem", fontWeight: 700, marginBottom: "4px", fontFamily: "'Outfit', sans-serif" }}>For Developers</h4>
                                <p style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.88rem", lineHeight: 1.5, fontFamily: "'Outfit', sans-serif", maxWidth: "400px" }}>
                                    Granular code insights, instant fix suggestions, and automated PRs.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "16px" }}>
                            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(200,223,160,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <i className="ri-presentation-line" style={{ color: "#c8dfa0", fontSize: "1.1rem" }} />
                            </div>
                            <div>
                                <h4 style={{ color: "#f4ede6", fontSize: "1.05rem", fontWeight: 700, marginBottom: "4px", fontFamily: "'Outfit', sans-serif" }}>For Managers</h4>
                                <p style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.88rem", lineHeight: 1.5, fontFamily: "'Outfit', sans-serif", maxWidth: "400px" }}>
                                    Sprint impact analysis, team velocity, and risk forecasting.
                                </p>
                            </div>
                        </div>
                    </div>

                    <a 
                        href="https://bugsentry-console.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "18px 36px",
                            background: "#b7c25e",
                            color: "#0a0a0a",
                            borderRadius: "14px",
                            fontSize: "0.95rem",
                            fontWeight: 800,
                            textDecoration: "none",
                            fontFamily: "'Outfit', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            boxShadow: "0 10px 40px rgba(183,194,94,0.2)"
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = "translateY(-4px)";
                            e.currentTarget.style.boxShadow = "0 15px 50px rgba(183,194,94,0.4)";
                            e.currentTarget.style.background = "#c8dfa0";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 10px 40px rgba(183,194,94,0.2)";
                            e.currentTarget.style.background = "#b7c25e";
                        }}
                    >
                        View Live Demo
                        <i className="ri-external-link-line" />
                    </a>
                </div>

                {/* ── Right Dashboard Showcase ── */}
                <div className="delivery-anim" style={{ 
                    flex: "1 1 550px",
                    display: "flex",
                    justifyContent: "center",
                    perspective: "2000px"
                }}>
                    <div className="browser-window" 
                         style={{
                             ...browserWindowStyle,
                             transform: "rotateY(-12deg) rotateX(4deg) scale(1.02)",
                         }}
                         onMouseEnter={e => {
                             e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) scale(1.1) translateY(-20px)";
                         }}
                         onMouseLeave={e => {
                             e.currentTarget.style.transform = "rotateY(-12deg) rotateX(4deg) scale(1.02) translateY(0)";
                         }}>
                        <div style={trafficLightsStyle}>
                            <div style={lightStyle("#ff5f56")} />
                            <div style={lightStyle("#ffbd2e")} />
                            <div style={lightStyle("#27c93f")} />
                            <div style={{ marginLeft: "14px", color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", fontFamily: "monospace", display: "flex", alignItems: "center", letterSpacing: "0.05em" }}>
                                console.bugsentry.io
                            </div>
                        </div>
                        <div style={{ position: "relative", background: "#050505" }}>
                            <img 
                                src={dashboardMockup} 
                                alt="BugSentry Dashboard Mockup" 
                                style={{ 
                                    width: "100%", 
                                    height: "auto", 
                                    display: "block",
                                    opacity: 0.9,
                                    filter: "contrast(1.1) brightness(1.1)"
                                }}
                            />
                            {/* Interactive Glow overlay */}
                            <div style={{
                                position: "absolute",
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: "linear-gradient(135deg, rgba(183,194,94,0.05) 0%, transparent 50%)",
                                pointerEvents: "none"
                            }} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
