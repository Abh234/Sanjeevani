/**
 * DashboardSection — Page 5
 * Pharmacist command dashboard — KPI cards, inventory, analytics.
 */

import backgroundImage from "../../assets/image/devops_dashboard_bg.png";

const KPIS = [
    { icon: "ri-git-repository-line", label: "Repos Analyzed", value: "142", delta: "+12", color: "#b7c25e" },
    { icon: "ri-error-warning-line", label: "Failures Prevented", value: "48", delta: "+8", color: "#7dcf50" },
    { icon: "ri-time-line", label: "Time Saved (hrs)", value: "340h", delta: "+50h", color: "#f4c542" },
    { icon: "ri-shield-keyhole-line", label: "High Risk", value: "3", delta: "Action Req", color: "#ff6b6b" },
];

const CHART_BARS = [40, 65, 50, 80, 72, 90, 84];
const CHART_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ORDERS = [
    { id: "#PR841", patient: "auth-service", item: "High Auth Failure Risk", status: "Resolved", statusColor: "#7dcf50" },
    { id: "#PR840", patient: "payment-api", item: "Missing Dependencies", status: "Auto-Fixing", statusColor: "#b7c25e" },
    { id: "#PR839", patient: "billing-cron", item: "Database Timeout Risk", status: "Analysis", statusColor: "#f4c542" },
    { id: "#PR838", patient: "user-dashboard", item: "React Render Loop", status: "Resolved", statusColor: "#7dcf50" },
    { id: "#PR837", patient: "checkout-flow", item: "Stripe API Rate Limit", status: "Analysis", statusColor: "#f4c542" },
];

const SIDEBAR_ITEMS = [
    { icon: "ri-dashboard-line", label: "Executive View", active: true },
    { icon: "ri-git-merge-line", label: "Repositories", active: false },
    { icon: "ri-alarm-warning-line", label: "Live Risks", active: false },
    { icon: "ri-bar-chart-2-line", label: "Financial Impact", active: false },
    { icon: "ri-team-line", label: "Engineering Health", active: false },
    { icon: "ri-settings-3-line", label: "Config", active: false },
];

const QUICK_STATS = [
    { icon: "ri-git-branch-line", label: "CI/CD Insights", value: "99.8%", color: "#29B6F6" },
    { icon: "ri-radar-line", label: "Risk Forecast", value: "Active", color: "#e74c3c" },
    { icon: "ri-heart-pulse-line", label: "System Health", value: "Excellent", color: "#2ecc71" },
];

export default function DashboardSection() {
    return (
        <section id="dashboard-section" style={{
            /* Full image at natural size, no crop, scrolls to see all like reference site */
            background: `linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(0,0,0,0.8) 100%), url(${backgroundImage}) center top no-repeat`,
            backgroundAttachment: "scroll",
            backgroundSize: "100% auto",
            minHeight: "100vh",
            /* Added padding bottom (10vh) so you can scroll past the full box */
            padding: "15vh 6vw 10vh",
            display: "flex",
            flexDirection: "column",
            /* INCREASED GAP HERE to add more space between header text and dashboard */
            gap: "150px",
        }}>

            {/* ── Header ── */}
            <div className="dash-anim">
                <p style={{ color: "#b7c25e", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", margin: "0 0 10px" }}>
                    CEO Intelligence Dashboard
                </p>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3.4rem)", color: "#f4ede6", margin: "0 0 10px", lineHeight: 1.05 }}>
                    Total visibility into your architecture —
                    <br />
                    <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#c8dfa0" }}>from code risk to business impact.</span>
                </h2>
            </div>

            {/* ── Channel Quick Stats ── */}
            <div className="dash-anim" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "-120px" }}>
                {QUICK_STATS.map(s => (
                    <div key={s.label} style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        background: `${s.color}0D`,
                        border: `1px solid ${s.color}25`,
                        borderRadius: "12px", padding: "10px 18px",
                    }}>
                        <i className={s.icon} style={{ color: s.color, fontSize: "1.1rem" }} />
                        <div>
                            <div style={{ color: s.color, fontWeight: 800, fontSize: "1.05rem", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>{s.value}</div>
                            <div style={{ color: "#f4ede6", opacity: 0.5, fontSize: "0.6rem", fontFamily: "'Outfit', sans-serif", marginTop: "2px", letterSpacing: "0.05em" }}>{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Dashboard Shell ── */}
            <div className="dash-anim" style={{
                background: "rgba(12,20,5,0.95)",
                /* Restored the full border around the entire box */
                border: "1px solid rgba(183,194,94,0.15)",
                /* Restored full rounded corners (was 20px 20px 0 0) */
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 -20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(183,194,94,0.06)",
                backdropFilter: "blur(14px)",
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                /* Removed minHeight so the box naturally wraps its content nicely */
            }}>

                {/* ── Sidebar ── */}
                <div style={{ borderRight: "1px solid rgba(183,194,94,0.08)", padding: "20px 0", background: "rgba(0,0,0,0.3)" }}>
                    <div style={{ padding: "0 18px 18px", borderBottom: "1px solid rgba(244,237,230,0.06)", marginBottom: "10px" }}>
                        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "0.82rem", color: "#f4ede6" }}>BugSentry</div>
                        <div style={{ color: "#b7c25e", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", marginTop: "2px" }}>Engineering Portal</div>
                    </div>
                    {SIDEBAR_ITEMS.map(item => (
                        <div key={item.label} style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "9px 18px", margin: "2px 7px",
                            borderRadius: "10px",
                            background: item.active ? "rgba(183,194,94,0.13)" : "transparent",
                            cursor: "pointer",
                        }}>
                            <i className={item.icon} style={{ color: item.active ? "#b7c25e" : "rgba(244,237,230,0.35)", fontSize: "0.95rem" }} />
                            <span style={{ color: item.active ? "#f4ede6" : "rgba(244,237,230,0.4)", fontSize: "0.76rem", fontWeight: item.active ? 700 : 400, fontFamily: "'Outfit', sans-serif" }}>{item.label}</span>
                        </div>
                    ))}

                    {/* AI Status */}
                    <div style={{ margin: "14px 7px 0", padding: "10px 14px", background: "rgba(37,211,102,0.07)", border: "1px solid rgba(37,211,102,0.15)", borderRadius: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#25D366", display: "inline-block", boxShadow: "0 0 6px #25D366" }} />
                            <span style={{ color: "#25D366", fontSize: "0.62rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.06em" }}>AI ACTIVE</span>
                        </div>
                        <div style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.58rem", fontFamily: "'Outfit', sans-serif" }}>Monitoring repositories in real-time</div>
                    </div>
                </div>

                {/* ── Main Content ── */}
                <div style={{ padding: "22px 26px", display: "flex", flexDirection: "column", gap: "20px" }}>

                    {/* Topbar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "0.95rem", fontFamily: "'Outfit', sans-serif" }}>System Status: Nominal 🟢</div>
                            <div style={{ color: "#f4ede6", opacity: 0.4, fontSize: "0.68rem", fontFamily: "'Outfit', sans-serif", marginTop: "1px" }}>#BugSentry AI Core v2.4.1 active</div>
                        </div>
                        <div style={{ display: "flex", gap: "8px" }}>
                            <button style={{ background: "rgba(183,194,94,0.1)", border: "1px solid rgba(183,194,94,0.25)", borderRadius: "9px", padding: "6px 13px", color: "#b7c25e", fontSize: "0.68rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", cursor: "pointer", letterSpacing: "0.05em" }}>Deploy Fix</button>
                            <button style={{ background: "rgba(125,207,80,0.1)", border: "1px solid rgba(125,207,80,0.25)", borderRadius: "9px", padding: "6px 13px", color: "#7dcf50", fontSize: "0.68rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", cursor: "pointer", letterSpacing: "0.05em" }}>View Open PRs</button>
                        </div>
                    </div>

                    {/* KPI row */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                        {KPIS.map(k => (
                            <div key={k.label} style={{ background: "rgba(244,237,230,0.03)", border: "1px solid rgba(244,237,230,0.07)", borderRadius: "14px", padding: "14px 16px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "9px" }}>
                                    <i className={k.icon} style={{ color: k.color, fontSize: "1.1rem" }} />
                                    <span style={{ background: `${k.color}1A`, color: k.color, fontSize: "0.58rem", fontWeight: 700, padding: "2px 7px", borderRadius: "99px", fontFamily: "'Outfit', sans-serif" }}>{k.delta}</span>
                                </div>
                                <div style={{ color: "#f4ede6", fontWeight: 900, fontSize: "1.35rem", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>{k.value}</div>
                                <div style={{ color: "#f4ede6", opacity: 0.38, fontSize: "0.6rem", fontFamily: "'Outfit', sans-serif", marginTop: "4px", letterSpacing: "0.07em", textTransform: "uppercase" }}>{k.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart + Orders */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "14px", flex: 1 }}>
                        {/* Bar Chart */}
                        <div style={{ background: "rgba(244,237,230,0.03)", border: "1px solid rgba(244,237,230,0.07)", borderRadius: "14px", padding: "16px" }}>
                            <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "0.75rem", fontFamily: "'Outfit', sans-serif", marginBottom: "4px", opacity: 0.85 }}>Risk Trajectory (Next 7 Days)</div>
                            <div style={{ color: "#b7c25e", fontSize: "0.58rem", fontFamily: "'Outfit', sans-serif", marginBottom: "14px", opacity: 0.7 }}>CI/CD · Static Analysis · Logs</div>
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "100px" }}>
                                {CHART_BARS.map((h, i) => (
                                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", height: "100%" }}>
                                        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                                            <div style={{ width: "100%", height: `${h}%`, background: i === 6 ? "#b7c25e" : "rgba(183,194,94,0.35)", borderRadius: "4px 4px 0 0", transition: "height 0.4s" }} />
                                        </div>
                                        <span style={{ color: "#f4ede6", opacity: 0.3, fontSize: "0.5rem", fontFamily: "'Outfit', sans-serif" }}>{CHART_DAYS[i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Orders Table */}
                        <div style={{ background: "rgba(244,237,230,0.03)", border: "1px solid rgba(244,237,230,0.07)", borderRadius: "14px", padding: "16px", overflow: "auto" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                                <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "0.75rem", fontFamily: "'Outfit', sans-serif", opacity: 0.85 }}>High-Risk Modules</div>
                                <span style={{ color: "#b7c25e", fontSize: "0.6rem", fontWeight: 600, fontFamily: "'Outfit', sans-serif", opacity: 0.7 }}>Predicted by Risk Engine</span>
                            </div>
                            {ORDERS.map(o => (
                                <div key={o.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid rgba(244,237,230,0.04)" }}>
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                        <span style={{ color: "#b7c25e", fontSize: "0.6rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", minWidth: "54px" }}>{o.id}</span>
                                        <div>
                                            <div style={{ color: "#f4ede6", fontSize: "0.68rem", fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>{o.patient}</div>
                                            <div style={{ color: "#f4ede6", opacity: 0.4, fontSize: "0.58rem", fontFamily: "'Outfit', sans-serif" }}>{o.item}</div>
                                        </div>
                                    </div>
                                    <span style={{ background: `${o.statusColor}15`, color: o.statusColor, fontSize: "0.56rem", fontWeight: 700, padding: "3px 9px", borderRadius: "99px", fontFamily: "'Outfit', sans-serif", border: `1px solid ${o.statusColor}28`, whiteSpace: "nowrap" }}>{o.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Inventory Alert Banner */}
                    <div style={{
                        display: "flex", alignItems: "center", gap: "12px",
                        background: "rgba(255,107,107,0.07)", border: "1px solid rgba(255,107,107,0.18)",
                        borderRadius: "12px", padding: "10px 16px",
                    }}>
                        <i className="ri-error-warning-line" style={{ color: "#ff6b6b", fontSize: "1rem", flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                            <span style={{ color: "#ff6b6b", fontWeight: 700, fontSize: "0.7rem", fontFamily: "'Outfit', sans-serif" }}>Downtime Risk Alert — </span>
                            <span style={{ color: "#f4ede6", opacity: 0.6, fontSize: "0.68rem", fontFamily: "'Outfit', sans-serif" }}>Payment module has changed 40 times in the last 7 days without test coverage. High crash probability.</span>
                        </div>
                        <button style={{ background: "rgba(255,107,107,0.12)", border: "1px solid rgba(255,107,107,0.25)", borderRadius: "8px", padding: "5px 12px", color: "#ff6b6b", fontSize: "0.62rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>View Module Graph</button>
                    </div>
                </div>
            </div>
        </section>
    );
}