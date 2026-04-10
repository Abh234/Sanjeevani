import bgImage from "../../assets/image/devops_hero_bg.png";
import HoverGrid from "../effects/HoverGrid";
import Logo3D from "../effects/Logo3D";
import AnimatedDots from "../effects/AnimatedDots";

/**
 * LandingHero — LAYER 1 (z-10)
 * The initial hero screen with the dark-green gradient, brand title,
 * divider row, and scroll hint. Always sits behind the cube curtain.
 *
 * Props:
 *  onMenuClick — passed down to Navbar to open the Sidebar
 */
export default function LandingHero({ onMenuClick }) {
    return (
        <div
            className="landing-content absolute inset-0 z-10 overflow-hidden"
            style={{ background: 'linear-gradient(to bottom, #0a0a0a 0%, #111111 40%, #1a1a1a 75%, #222222 100%)' }}
        >
            <div className="main w-full h-full rotate-[-10deg] scale-[1.7] origin-center">
                <div
                    className="landing w-full h-full relative"
                    style={{ background: 'linear-gradient(to bottom, #0a0a0a 0%, #111111 40%, #1a1a1a 75%, #222222 100%)' }}
                >
                    {/* Soft glow orb — brighter toward bottom-center */}
                    <div style={{
                        position: 'absolute', top: '55%', left: '52%',
                        transform: 'translate(-50%, -50%)',
                        width: '60vw', height: '60vw',
                        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)',
                        borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
                    }} />

                    {/* Secondary glow lower-right */}
                    <div style={{
                        position: 'absolute', top: '65%', left: '62%',
                        transform: 'translate(-50%, -50%)',
                        width: '40vw', height: '40vw',
                        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 65%)',
                        borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
                    }} />

                    {/* BG image overlay */}
                    <div style={{
                        position: 'absolute', inset: 0, zIndex: 2,
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover', backgroundPosition: 'center',
                        opacity: 0.18, mixBlendMode: 'luminosity',
                    }} />

                    {/* Navbar will now be rendered at the App level to stay sticky */}

                    {/* Giant brand title */}
                    <div className="hero-text" style={{
                        position: 'absolute', top: '5%', left: '0', width: '100%',
                        zIndex: 10,
                        transform: 'rotate(-8deg)',
                        transformOrigin: 'center top',
                        opacity: 0.97,
                        textAlign: 'center',
                    }}>
                        <h1 style={{
                            fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                            fontSize: 'clamp(3rem, 15vw, 11rem)',
                            color: '#f4ede6', margin: 0, lineHeight: 0.9, letterSpacing: '-0.03em',
                        }}>
                            BugSentry
                        </h1>
                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', color: '#c8dfa0', margin: '0 0 10px 0' }}>
                                Engineering Intelligence — Built for Speed
                            </h2>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(0.9rem, 1.5vw, 1.25rem)', color: '#aaaaaa', maxWidth: '600px', margin: 0, lineHeight: 1.5 }}>
                                Analyze your GitHub repositories, detect failures before they happen, and fix issues instantly with AI.
                            </p>
                        </div>
                    </div>

                    {/* Scroll hint */}
                    <div className="absolute bottom-[2%] md:bottom-[5%] left-[5%] z-10 flex items-center gap-[8px]">
                        <i className="ri-arrow-down-line" style={{ fontSize: '1.1rem', color: '#f4ede6', opacity: 0.55 }} />
                        <span style={{
                            color: '#f4ede6', fontSize: '0.6rem', opacity: 0.5,
                            fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase',
                        }}>Scroll to explore</span>
                    </div>

                </div>
            </div>

            {/* HoverGrid — outside .main so CSS transforms don't skew mouse coords */}
            <AnimatedDots />
            <HoverGrid />

            {/* ── 3D Logo — right side, outside .main transform ── */}
            {/* Radial glow behind the 3D model */}
            <div style={{
                position: 'absolute', left: '50%', top: '45%',
                transform: 'translateX(-50%)',
                width: 'min(500px, 75vw)', height: 'min(500px, 75vw)',
                borderRadius: '50%', zIndex: 14, pointerEvents: 'none',
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 72%)',
            }} />
            <Logo3D style={{ top: '43%', bottom: 'auto', width: 'min(480px, 75vw)', height: 'min(480px, 75vw)' }} />
        </div>
    );
}
