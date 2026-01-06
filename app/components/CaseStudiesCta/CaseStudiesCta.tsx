import Link from "next/link";
import styles from "./CaseStudiesCta.module.css";

export default function CaseStudyComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.CtaStudiesWarpper}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/CaseBoysshocking.png"
              alt="Case Study"
              className={styles.mainImage}
            />
            <Link href="/case-studies" className={styles.caseButton}>
              See all case Studies
              <img
                src="/images/ArrowLeft.png"
                alt="arrow"
                className={styles.buttonIcon}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}