"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Facebook, Instagram, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
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
            <button className={styles.ctaLink}>
              Let&apos;s talk.
            </button>
          </h2>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.bottomSection}>
        <div className={styles.copyright}>
          Copyright 2026 © Rush Web Studio Design 2026. All Rights Reserved
        </div>

        <div className={styles.FooterIcons}>
          <Link href="https://x.com/rushwebstudios" aria-label="X">
            {/* <X size={18} color="#1a1a1a" /> */}
            <img src="/images/Twitter.svg" alt="" />
          </Link>
          <Link href="https://www.instagram.com/rushwebstudios/" className={styles.socialButton} aria-label="Instagram">
            <Instagram size={18} className={styles.socialIcon} />
          </Link>
          <Link href="https://www.facebook.com/rushwebstudios/" className={styles.socialButton} aria-label="Facebook">
            <Facebook size={18} className={styles.socialIcon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}