import styles from "./about.module.css";
import homeStyles from "../page.module.css";

export default function About() {
  return (
    <main className={styles.aboutMain}>
      {/* Reusing the signature grid */}
      <div className={homeStyles.gridBackground}></div>

      <div className="container">
        <section className={styles.aboutHero}>
          <div className={homeStyles.animateReveal}>
            <h1 className={styles.aboutTitle}>
              Engineering for the <br />
              <span className="shimmer-text">Absolute.</span>
            </h1>
          </div>
          
          <div className={`${homeStyles.animateReveal} ${homeStyles.delay1}`}>
            <p className={homeStyles.heroText} style={{ textAlign: "left", margin: "0" }}>
              Pace Tech was founded on the principle that digital infrastructure should be as reliable 
              as physical architecture. We don't just build software; we engineer the logic that 
              defines global scale.
            </p>
          </div>
        </section>

        {/* The Three Pillars */}
        <div className={`${styles.pillarGrid} ${homeStyles.animateReveal} ${homeStyles.delay1}`}>
          <div className={styles.pillarCard}>
            <h3>01. Precision</h3>
            <p>Every line of code is a structural calculation. Our systems are built to handle billions of signals with zero-fault tolerance.</p>
          </div>
          
          <div className={styles.pillarCard}>
            <h3>02. Utility</h3>
            <p>We strip away the noise. Pace Tech builds high-utility tools that serve a specific mission: the advancement of human logistics.</p>
          </div>

          <div className={styles.pillarCard}>
            <h3>03. Scale</h3>
            <p>Infrastructure that grows with the world. Our ecosystems are designed to adapt to the shifting needs of a global economy.</p>
          </div>
        </div>

        {/* Manifesto Continuation */}
        <section className={`${styles.contentBlock} ${homeStyles.animateReveal} ${homeStyles.delay2}`}>
          <h2>Our Philosophy</h2>
          <p className={homeStyles.heroText} style={{ textAlign: "left", fontSize: "1rem", color: "#636366" }}>
            We believe that complexity is the enemy of efficiency. In an increasingly fragmented digital landscape, 
            Pace Tech acts as the unifying logic—the backbone that supports everything from decentralized finance 
            to global education networks. Our mission is to ensure that when the world scales, it scales on Pace.
          </p>
        </section>
      </div>
    </main>
  );
}
