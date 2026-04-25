import Link from "next/link";
import styles from "./project.module.css";
import homeStyles from "../../page.module.css";

const projectData: any = {
  finance: {
    title: "Pace Finance",
    tagline: "Your Money. Finally Coached.",
    description: "An AI-first personal finance platform built natively for the South African ecosystem, transforming passive tracking into proactive wealth-building.",
    problem: "Most financial apps are glorified spreadsheets—they record the past but never shape the future. For South Africans, this lack of forward clarity is costing them dearly.",
    solution: "Pace Finance acts as a coach, not a calculator. By parsing ZAR-native data from FNB, ABSA, and others, we turn every transaction into a wealth-building opportunity.",
    liveLink: "https://pacedebt.onrender.com/",
    images: ["/commerce_dashboard_ui_1776563745349.png", "/commerce_dashboard_ui_1776563745349.png", "/commerce_dashboard_ui_1776563745349.png"]
  },
  academy: {
    title: "Pace Academy",
    tagline: "Global Knowledge Layer",
    description: "A modular educational ecosystem designed to scale learning across any cultural or technical landscape.",
    problem: "Education is often localized and rigid, preventing global industries from scaling their internal knowledge assets.",
    solution: "Pace Academy provides the technical backbone for borderless instruction, turning complex information into scalable digital logic.",
    liveLink: "https://academy.pace.finance/",
    images: ["/edu_platform_interface_1776563775928.png", "/edu_platform_interface_1776563775928.png", "/edu_platform_interface_1776563775928.png"]
  },
  brosky: {
    title: "Brosky",
    tagline: "Infrastructure for Modern Male Connection.",
    description: "A premium digital country club where men find their people, build their squads, and actually get things done. Built to the highest Tier-1 startup standards.",
    problem: "Male loneliness is a market failure. Existing platforms are either too corporate (LinkedIn) or too detached (Discord), leaving an enormous gap for authentic peer connection.",
    solution: "We engineered the 'Arctic Boutique'—a high-fidelity communication ecosystem centered around The Pulse (Signal Feed), Huddles (Gated Communities), and Arctic Command (P2P Messaging).",
    liveLink: "https://brosky.pace.finance/",
    images: ["/hr_system_analytics_1776563802392.png", "/hr_system_analytics_1776563802392.png", "/hr_system_analytics_1776563802392.png"]
  },
  jama: {
    title: "Jama",
    tagline: "High-Utility Connectivity Protocol",
    description: "Engineering the foundational layer for high-performance professional social infrastructure, focused on verified reputation and actionable human logistics.",
    problem: "Modern social platforms are optimized for vanity metrics and algorithmic noise, making authentic professional coordination nearly impossible at scale.",
    solution: "Jama strips away the performative layers to build a connection system centered on verified utility and low-latency professional signaling.",
    liveLink: "https://jama.pace.finance/",
    images: ["/jama_ui.png", "/jama_ui.png", "/jama_ui.png"]
  },
  spikebot: {
    title: "Spike-AI",
    tagline: "Empowering Decentralized Intelligence ($SPIKE)",
    description: "A next-generation, AI-driven signal intelligence platform built on the Base Layer 2 network, featuring a rigorously engineered deflationary tokenomics model.",
    problem: "Most signal projects fail because their token value is tied solely to hype. They lack independent buy pressure mechanisms decoupled from retail trading volume.",
    solution: "Spike-AI employs a 19% Genesis Burn and a bi-weekly Bot-Profit Burn engine, creating a self-sustaining economy where bot-trading activity actively strengthens the token.",
    liveLink: "https://spikebot.pace.finance/",
    images: ["/commerce_dashboard_ui_1776563745349.png", "/commerce_dashboard_ui_1776563745349.png", "/commerce_dashboard_ui_1776563745349.png"]
  },
  fastfood: {
    title: "Fast Food",
    tagline: "High-Volume Fulfillment Architecture",
    description: "The technical backbone for ultra-high-speed culinary logistics, designed to homogenize ordering data across fragmented kitchen ecosystems.",
    problem: "The culinary logistics industry is crippled by fragmented data silos and non-standardized fulfillment logic, leading to operational friction and scale-collapse.",
    solution: "We engineered a singular, high-performance fulfillment protocol that synchronizes every node of the ordering flow—from terminal to handoff.",
    liveLink: "https://food.pace.finance/",
    images: ["/fastfood_ui.png", "/fastfood_ui.png", "/fastfood_ui.png"]
  }
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectData[slug] || projectData.finance;

  return (
    <main className={styles.projectMain}>
      <div className={homeStyles.gridBackground}></div>

      <div className="container">
        <Link href="/#projects" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
          color: "var(--secondary)",
          fontWeight: "600",
          fontSize: "0.9rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          marginBottom: "3rem",
          transition: "color 0.2s ease"
        }}>
          ← Back
        </Link>

        <header className={styles.detailHeader}>
          <span className={styles.projectLabel} style={{ color: "var(--active-orange)" }}>{project.tagline}</span>
          <h1 className={styles.detailTitle}>{project.title}</h1>
          <p className={homeStyles.heroText} style={{ textAlign: "left", margin: 0, maxWidth: "800px" }}>
            {project.description}
          </p>
        </header>

        {/* Narrative Section: Problem & Solution */}
        <section className={styles.narrativeSection}>
          <div className={styles.narrativeBlock}>
            <h3>The Challenge</h3>
            <p>{project.problem}</p>
          </div>
          <div className={`${styles.narrativeBlock} ${styles.solutionBlock}`}>
            <h3>The Pace Solution</h3>
            <p>{project.solution}</p>
          </div>
        </section>

        {/* High-Fidelity Gallery */}
        <section className={styles.gallerySection}>
          <div className={styles.imageGrid}>
             <div className={`${styles.galleryImage} ${styles.large}`}>
                <img src={project.images[0]} alt="UI Main" />
             </div>
             <div className={styles.galleryImage}>
                <img src={project.images[1]} alt="UI Detail" />
             </div>
             <div className={styles.galleryImage}>
                <img src={project.images[2]} alt="UI Analytics" />
             </div>
          </div>
        </section>

        {/* Global Action Link */}
        <div className={styles.actionSection}>
          <a href={project.liveLink} className={styles.liveBtn} target="_blank" rel="noopener noreferrer">
            Launch Live Application
          </a>
        </div>
      </div>
    </main>
  );
}
