import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.contentSection}>
        <div className={styles.brandGroup}>
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={160}
            height={48}
            className={styles.logoImg}
            priority
          />
          <div className={styles.brandTitle}>
            <span>rush.</span>
            <span>web studio</span>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h2 className={styles.ctaText}>
            Have an idea in<br />
            mind?
            <Link href="/contact" className={`${styles.whiteText} ${styles.underline} ${styles.ctaLink}`}>
              Let&apos;s talk.
            </Link>
          </h2>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.bottomSection}>

        <div className={styles.copyright}>
          Copyright 2026 © Rush Web Studio Design 2026. All Rights Reserved
        </div>

        <div className={styles.socials}>
          <div className={styles.circle}>
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </div>
          <div className={styles.circle}>
            <Image
              src="/images/likedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className={styles.socialIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
