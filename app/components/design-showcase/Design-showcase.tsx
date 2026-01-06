"use client";
import styles from "./design-showcase.module.css"
import Image from "next/image"

export default function DesignShowcase() {
  const scrollToCall = () => {
    const callToAction = document.getElementById('book-call');
    if (callToAction) {
      callToAction.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.heading}>
              The Design Partner for Startups Scaling from 0 → 8-Figure ARR
            </h2>

            <p className={styles.description}>
              We’ve built 40+ high-growth SaaS websites, audited 100+ startups, and seen exactly where design kills conversion. We fix that by building digital experiences that don't just look good they sell.
            </p>

            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.tagPurple}`}>Strategic UX</span>
              <span className={`${styles.tag} ${styles.tagOrange}`}>World-Class Branding</span>
              <span className={`${styles.tag} ${styles.tagBlue}`}>Conversion-Optimized</span>
              <span className={`${styles.tag} ${styles.tagPeach}`}>Frictionless Flows</span>
              <span className={`${styles.tag} ${styles.tagGreen}`}>Rapid Deployment</span>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.heading}>Who we partner with:</h2>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image src="/images/tick.png" alt="tick" width={18} height={18} className={styles.tickIcon} />
                <span><strong>Venture-Backed Startups</strong> (Scaling UI/UX & Design Systems)</span>
              </li>

              <li className={styles.listItem}>
                <Image src="/images/tick.png" alt="tick" width={18} height={18} className={styles.tickIcon} />
                <span><strong>Fractional CMOs</strong> (Elevating Brand Identity across portfolios)</span>
              </li>

              <li className={styles.listItem}>
                <Image src="/images/tick.png" alt="tick" width={18} height={18} className={styles.tickIcon} />
                <span><strong>GTM & RevOps Leaders</strong> (Fixing website conversion leaks)</span>
              </li>

              <li className={styles.listItem}>
                <Image src="/images/tick.png" alt="tick" width={18} height={18} className={styles.tickIcon} />
                <span><strong>VCs & Accelerators</strong> (Standardizing brand excellence for portcos)</span>
              </li>
            </ul>

            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.tagPurple}`}>B2B SaaS UI/UX</span>
              <span className={`${styles.tag} ${styles.tagOrange}`}>Fintech Branding</span>
              <span className={`${styles.tag} ${styles.tagBlue}`}>DevTools Web Design</span>
              <span className={`${styles.tag} ${styles.tagPeach}`}>AI Visual Identity</span>
              <span className={`${styles.tag} ${styles.tagGreen}`}>MarTech Dashboards</span>
              <span className={`${styles.tag} ${styles.tagTeal}`}>Healthcare UX</span>
            </div>
          </div>
        </div>

        <div className={styles.ShowcasebuttonGroup}>
          <button className={styles.ShowcaseprimaryButton} onClick={scrollToCall}>
            {/* <Image
              src="/images/googleMeet.png"
              alt="Google Meet"
              width={20}
              height={20}
              className={styles.ShowcaseavatarSmall}
            /> */}
            <span>Book a call with Rush</span>
          </button>
        </div>
      </div>
    </section>
  )
}