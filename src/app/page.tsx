"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import aboutStyles from "./about/about.module.css";
import projStyles from "./projects.module.css";
import footerStyles from "./footer.module.css";
import capStyles from "./capabilities.module.css";
import trustStyles from "./trust.module.css";

export default function Home() {
  const companies = [
    "Global Finance Corp", "Orbit Logistics", "Edu Genesis", "Nexus Commerce", "Titan HR Systems",
    "Global Finance Corp", "Orbit Logistics", "Edu Genesis", "Nexus Commerce", "Titan HR Systems"
  ];

  const projects = [
    { slug: "finance", name: "Pace Finance", tagline: "Your Money. Finally Coached.", v: "Operational v4.2" },
    { slug: "academy", name: "Pace Academy", tagline: "Global Knowledge Layer", v: "v2.1 Research" },
    { slug: "brosky", name: "Brosky", tagline: "Infrastructure for Male Connection", v: "Active Build" },
    { slug: "jama", name: "Jama", tagline: "High-Utility Connection", v: "v1.5 Alpha" },
    { slug: "spikebot", name: "Spike-AI", tagline: "Decentralized Intelligence ($SPIKE)", v: "Steady State" },
    { slug: "fastfood", name: "Fast Food", tagline: "Fulfillment Architecture", v: "v3.0 Operational" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealActive");
        } else {
          entry.target.classList.remove("revealActive");
        }
      });
    }, { threshold: 0.05 });

    const targets = document.querySelectorAll(".reveal");
    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.gridBackground}></div>

      {/* SECTION 01: HERO */}
      <section id="home" className={`${styles.hero} reveal`}>
        <div className={styles.animateReveal}>
          <h1 className={styles.title}>
            Engineering <br />
            <span className="shimmer-text">Digital Scale.</span>
          </h1>
        </div>
        <div className={`${styles.animateReveal} ${styles.delay1}`}>
          <p className={styles.heroText}>
            We build high-performance web applications and custom software that help businesses scale, automate, and dominate their market. We turn complex concepts into robust, profit-driving ecosystems.
          </p>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {companies.map((company, index) => (
              <span key={index}>{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02: ABOUT */}
      <section id="about" className={`${aboutStyles.aboutMain} reveal`}>
        <div className="container">
          <div className={styles.animateReveal}>
            <h1 className={aboutStyles.aboutTitle}>
              Engineering for the <br />
              <span className="shimmer-text">Absolute.</span>
            </h1>
          </div>
          <div className={`${styles.animateReveal} ${styles.delay1}`}>
            <p className={styles.heroText} style={{ textAlign: "left", margin: "0", maxWidth: "900px" }}>
              Pace Tech was founded on the principle that digital infrastructure should be as reliable 
              as physical architecture. We don't just build software; we engineer the logic that defines global scale.
            </p>
          </div>
          <div className={`${aboutStyles.pillarGrid} ${styles.animateReveal}`}>
            <div className={aboutStyles.pillarCard}>
              <h3>01. Precision</h3>
              <p>We engineer software that works flawlessly. No bugs, no crashes—just robust applications built to handle your business at peak volume.</p>
            </div>
            <div className={aboutStyles.pillarCard}>
              <h3>02. Utility</h3>
              <p>We strip away the noise. We build tools that automate your operations, reduce overhead, and make your business run faster and leaner.</p>
            </div>
            <div className={aboutStyles.pillarCard}>
              <h3>03. Scale</h3>
              <p>Technology that grows as you do. We architect systems designed to handle exponential user growth without needing a complete rewrite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: PROJECTS */}
      <section id="projects" className={`${projStyles.projectsSection} reveal`}>
        <div className="container">
          <header className={projStyles.projectHeader}>
            <span className={projStyles.sectionLabel}>Ecosystem Stack</span>
            <h2 className={aboutStyles.aboutTitle} style={{ fontSize: "3.5rem" }}>
              <span style={{ color: "var(--accent)" }}>Modern Solutions</span> for <br /> a Digital World.
            </h2>
          </header>

          <div className={projStyles.projectGrid}>
            {projects.map((proj) => (
              <div key={proj.slug} className={projStyles.projectCard}>
                <div className={projStyles.cardVisual}>
                   <div style={{ width: "40px", height: "40px", border: "1px solid var(--accent)", opacity: 0.1, transform: "rotate(45deg)" }}></div>
                </div>
                <div className={projStyles.cardInfo}>
                  <span>{proj.v}</span>
                  <h3>{proj.name}</h3>
                  <p>{proj.tagline}</p>
                  <Link href={`/projects/${proj.slug}`} className={projStyles.cardLink}>Explore System →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BUILDER 02: PROCESS */}
      <section className={`${trustStyles.processSection} reveal`}>
        <div className="container">
          <div className={trustStyles.processHeader}>
            <span className={trustStyles.processLabel}>How We Work</span>
            <h2 className={trustStyles.processTitle}>
              From Concept to <br />
              <span className="gradient-text">Live Infrastructure.</span>
            </h2>
          </div>
          <div className={trustStyles.processGrid}>
            <div className={trustStyles.processStep}>
              <div className={trustStyles.stepNode}>01</div>
              <h3 className={trustStyles.stepTitle}>Discovery</h3>
              <p className={trustStyles.stepDesc}>We map your business logic, define the system architecture, and identify every technical dependency before a single line is written.</p>
            </div>
            <div className={trustStyles.processStep}>
              <div className={trustStyles.stepNode}>02</div>
              <h3 className={trustStyles.stepTitle}>Blueprint</h3>
              <p className={trustStyles.stepDesc}>A high-fidelity prototype is engineered first. You see exactly what you are getting before full development begins.</p>
            </div>
            <div className={trustStyles.processStep}>
              <div className={trustStyles.stepNode}>03</div>
              <h3 className={trustStyles.stepTitle}>Engineering</h3>
              <p className={trustStyles.stepDesc}>Full-stack development with transparent progress. Every sprint is documented and shared in real time.</p>
            </div>
            <div className={trustStyles.processStep}>
              <div className={trustStyles.stepNode}>04</div>
              <h3 className={trustStyles.stepTitle}>Launch</h3>
              <p className={trustStyles.stepDesc}>We deploy your infrastructure to production, configure monitoring, and provide a full technical handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03.5: CAPABILITIES (SERVICES) */}
      <section id="services" className={`${capStyles.capabilitiesSection} reveal`}>
        <div className="container">
          <header className={capStyles.sectionHeader}>
            <span className={capStyles.sectionLabel}>Engagement Models</span>
            <h2 className={aboutStyles.aboutTitle}>
              <span style={{ color: "var(--accent)" }}>Capabilities</span> for <br /> High-Growth Ventures.
            </h2>
          </header>

          <div className={capStyles.tierGrid}>
            <div className={capStyles.tierCard}>
              <span className={capStyles.tierNumber}>TIER 01</span>
              <h3 className={capStyles.tierTitle}>Blueprint & <br /> Prototyping</h3>
              <p className={capStyles.tierDescription}>
                For businesses that need a clear technical roadmap, visual designs, and core architecture planned out before committing to a full build.
              </p>
              <ul className={capStyles.featureList}>
                <li>Component Logic Mapping</li>
                <li>Hi-Fi Visual Prototyping</li>
                <li>Infrastructure Assessment</li>
              </ul>
              <div className={capStyles.priceIndicator}>
                <span className={capStyles.priceLabel}>Deployment Baseline</span>
                <span className={capStyles.priceAmount}>R7,500</span>
              </div>
            </div>

            <div className={capStyles.tierCard}>
              <span className={capStyles.tierNumber}>TIER 02</span>
              <h3 className={capStyles.tierTitle}>Full-Stack <br /> Development</h3>
              <p className={capStyles.tierDescription}>
                A complete technical build-out from UI/UX branding to a high-performance, live application ready for your users.
              </p>
              <ul className={capStyles.featureList}>
                <li>Full-Stack Development</li>
                <li>Design System Creation</li>
                <li>Live Beta Deployment</li>
              </ul>
              <div className={capStyles.priceIndicator}>
                <span className={capStyles.priceLabel}>Deployment Baseline</span>
                <span className={capStyles.priceAmount}>R25,000</span>
              </div>
            </div>

            <div className={capStyles.tierCard}>
              <span className={capStyles.tierNumber}>TIER 03</span>
              <h3 className={capStyles.tierTitle}>Growth & <br /> Maintenance</h3>
              <p className={capStyles.tierDescription}>
                Fractional CTO support and ongoing maintenance. We act as your dedicated engineering team to scale and optimize your live product.
              </p>
              <ul className={capStyles.featureList}>
                <li>Fractional CTO Support</li>
                <li>Scaling Optimisation</li>
                <li>24/7 Logic Monitoring</li>
              </ul>
              <div className={capStyles.priceIndicator}>
                <span className={capStyles.priceLabel}>Retainer Baseline</span>
                <span className={capStyles.priceAmount}>R15,000+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BUILDER 04: FOUNDER */}
      <section className={`${trustStyles.founderSection} reveal`}>
        <div className="container">
          <div className={trustStyles.founderContent}>
            <h2 className={trustStyles.founderQuote}>
              "Most development agencies sell templates. We sell engineered business leverage. If it doesn't scale your operations, we don't build it."
            </h2>
            <div className={trustStyles.foundersWrapper}>
              <div className={trustStyles.founderInfo}>
                <div className={trustStyles.founderAvatar}></div>
                <div className={trustStyles.founderDetails}>
                  <span className={trustStyles.founderName}>Adam Dono</span>
                  <span className={trustStyles.founderTitle}>Co-founder & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BUILDER 05: FAQ */}
      <section className={`${trustStyles.faqSection} reveal`}>
        <div className="container">
          <div className={trustStyles.faqHeader}>
            <span className={trustStyles.processLabel}>Clear The Board</span>
            <h2 className={trustStyles.processTitle}>Frequently Asked Questions.</h2>
          </div>
          
          <div className={trustStyles.faqContainer}>
            <details className={trustStyles.faqItem}>
              <summary className={trustStyles.faqQuestion}>Do I own the code and intellectual property?</summary>
              <div className={trustStyles.faqAnswer}>
                100%. Once the project is paid in full and deployed, the entire codebase and intellectual property is transferred to you. No vendor lock-in, no hidden licensing fees.
              </div>
            </details>
            <details className={trustStyles.faqItem}>
              <summary className={trustStyles.faqQuestion}>What if I just need a design or prototype first?</summary>
              <div className={trustStyles.faqAnswer}>
                That is exactly what Tier 01 (Blueprint & Prototyping) is for. We map the logic and design high-fidelity screens. If you decide to build it with us later, the cost of Tier 01 is deducted from your Tier 02 build.
              </div>
            </details>
            <details className={trustStyles.faqItem}>
              <summary className={trustStyles.faqQuestion}>Do you provide post-launch support?</summary>
              <div className={trustStyles.faqAnswer}>
                Yes. For businesses that need ongoing scaling and maintenance, our Tier 03 Retainer provides fractional CTO support and dedicated engineering hours every month.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 04: CONTACT TERMINAL */}
      <section id="contact" className={`${footerStyles.contactSection} reveal`}>
        <div className="container">
          <div className={footerStyles.terminalBox}>
            <h2 className={footerStyles.terminalTitle}>
              Ready to <span style={{ color: "var(--active-orange)" }}>Build</span> <br /> 
              at <span style={{ color: "var(--active-orange)" }}>Scale</span>?
            </h2>
            
            <form className={footerStyles.contactForm}>
              <div className={footerStyles.inputGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className={footerStyles.inputGroup}>
                <label>Work Email</label>
                <input type="email" placeholder="john@company.com" />
              </div>
              <div className={`${footerStyles.inputGroup} ${footerStyles.full}`}>
                <label>Project Goals</label>
                <textarea rows={4} placeholder="Briefly describe what you're looking to build..."></textarea>
              </div>
              <button type="submit" className={footerStyles.submitBtn}>Request a Technical Audit</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${footerStyles.footer} reveal`}>
        <div className="container">
          <div className={footerStyles.footerGrid}>
            <div className={footerStyles.footerBrand}>
              <h2>PACE TECH</h2>
              <p>Engineering high-utility digital infrastructure for the next generation of the global economy.</p>
            </div>
            <div className={footerStyles.footerLinks}>
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className={footerStyles.footerLinks}>
              <h4>Ecosystem</h4>
              <ul>
                <li><Link href="/projects/finance">Pace Finance</Link></li>
                <li><Link href="/projects/spikebot">Spike-AI</Link></li>
                <li><Link href="/projects/brosky">Brosky</Link></li>
              </ul>
            </div>
            <div className={footerStyles.footerLinks}>
              <h4>Connect</h4>
              <ul>
                <li><a href="#" target="_blank">LinkedIn</a></li>
                <li><a href="#" target="_blank">X (Twitter)</a></li>
                <li><a href="#" target="_blank">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className={footerStyles.footerBottom}>
            <div className={footerStyles.copyright}>
              © 2026 Pace Tech. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
