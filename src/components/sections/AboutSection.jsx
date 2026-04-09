/**
 * AboutSection — Page 2
 * Brand story, mission pillars, and key stats.
 */
const STATS = [
    { value: "1.2K+", label: "Failures Explained" },
    { value: "420+", label: "Repos Connected" },
    { value: "38%", label: "Avg. MTTR Drop" },
    { value: "24 / 7", label: "Always On" },
];

const PILLARS = [
    {
        icon: "ri-heart-pulse-line",
        title: "Developer-First",
        body: "Clear explanations and next steps — written for engineers, not dashboards.",
    },
    {
        icon: "ri-robot-2-line",
        title: "AI-Native",
        body: "Purpose-built to read CI/CD logs, diffs, and deployment signals together.",
    },
    {
        icon: "ri-lock-2-line",
        title: "Secure by Design",
        body: "Least-privilege GitHub access with audit-friendly activity you can trust.",
    },
];

export default function AboutSection() {
    return (
        <section
            style={{
                minHeight: "100vh",
                background: "linear-gradient(160deg, #1a2a0a 0%, #2d3d1a 50%, #3a5020 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "100px 6vw 80px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background radial glow */}
            <div style={{
                position: "absolute", top: "30%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: "80vw", height: "80vw",
                background: "radial-gradient(ellipse, rgba(140,180,70,0.18) 0%, transparent 70%)",
                borderRadius: "50%", pointerEvents: "none",
            }} />

            {/* Eyebrow */}
            <p className="about-anim" style={{
                color: "#b7c25e", fontSize: "0.7rem", fontWeight: 700,
                letterSpacing: "0.24em", textTransform: "uppercase",
                fontFamily: "'Outfit', sans-serif", margin: "0 0 18px",
            }}>Our Mission</p>

            {/* Hero headline */}
            <h2 className="about-anim" style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                fontSize: "clamp(3rem, 7vw, 7rem)",
                color: "#f4ede6", margin: "0 0 28px",
                lineHeight: 0.95, letterSpacing: "-0.03em",
                maxWidth: "780px",
            }}>
                BugSentry<br />
                <span style={{
                    fontFamily: "Georgia, serif", fontStyle: "italic",
                    fontWeight: 400, fontSize: "0.52em", color: "#c8dfa0",
                }}>— DevOps, Clarified.</span>
            </h2>

            {/* Body text */}
            <p className="about-anim" style={{
                color: "#f4ede6", opacity: 0.75,
                fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.75,
                fontFamily: "'Outfit', sans-serif", maxWidth: "580px", margin: "0 0 64px",
            }}>
                We're building the reliability layer modern teams need: an AI assistant that connects to GitHub,
                understands CI/CD and deployment failures, and turns noisy logs into fixes you can ship immediately.
            </p>

            {/* Pillars */}
            <div className="about-anim" style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px", marginBottom: "72px",
            }}>
                {PILLARS.map(p => (
                    <div key={p.title} style={{
                        background: "rgba(244,237,230,0.06)",
                        border: "1px solid rgba(244,237,230,0.12)",
                        borderRadius: "20px", padding: "28px 24px",
                        backdropFilter: "blur(12px)",
                        transition: "background 0.25s",
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(183,194,94,0.10)"}
                        onMouseLeave={e => e.currentTarget.style.background = "rgba(244,237,230,0.06)"}
                    >
                        <i className={p.icon} style={{ fontSize: "1.8rem", color: "#b7c25e", display: "block", marginBottom: "14px" }} />
                        <h3 style={{ color: "#f4ede6", fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 8px" }}>{p.title}</h3>
                        <p style={{ color: "#f4ede6", opacity: 0.65, fontSize: "0.88rem", lineHeight: 1.65, margin: 0, fontFamily: "'Outfit', sans-serif" }}>{p.body}</p>
                    </div>
                ))}
            </div>

            {/* Stats bar */}
            <div className="about-anim" style={{
                display: "flex", gap: "48px", flexWrap: "wrap",
                borderTop: "1px solid rgba(244,237,230,0.12)",
                paddingTop: "36px",
            }}>
                {STATS.map(s => (
                    <div key={s.label}>
                        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#b7c25e", lineHeight: 1 }}>{s.value}</div>
                        <div style={{ color: "#f4ede6", opacity: 0.60, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", marginTop: "6px" }}>{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
