"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Instagram, Facebook } from "lucide-react"
import styles from "./Header.module.css"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToCall = () => {
    const callToAction = document.getElementById('book-call');
    if (callToAction) {
      callToAction.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])



  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logoWithname.png"
              alt="Logo"
              width={160}
              height={40}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        <div className={styles.navRight}>
          <Link href="/case-studies" className={styles.navLink}>
            Cases
          </Link>

          <button className={styles.navLink}>
            <span>Resources</span>
            <span className={styles.badge}>new</span>
          </button>

          <Link href="https://x.com" aria-label="X">
            <img src="/images/Twitter.svg" alt="X" className={styles.socialIconImg} />
          </Link>

          <Link href="https://instagram.com" className={styles.socialButton} aria-label="Instagram">
            <Instagram size={20} color="#1a1a1a" />
          </Link>

          <Link href="https://facebook.com" className={styles.socialButton} aria-label="Facebook">
            <Facebook size={20} color="#1a1a1a" />
          </Link>

          <button className={styles.primaryButton}>
            <span onClick={scrollToCall} className={styles.buttonText}>Book call with Rush</span>
          </button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={28} color="#4E0109" /> : <Menu size={28} color="#4E0109" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.mobileMenu}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className={styles.mobileContentWrapper}
            >
              <div className={styles.mobileLinks}>
                <Link href="/case-studies" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                  Cases
                </Link>
                <button className={styles.mobileNavLink}>
                  <span>Resources</span>
                  <span className={styles.badge}>new</span>
                </button>
              </div>

              <div className={styles.mobileActionButtons}>
                <button className={styles.mobileChatButton}>
                  Lets Chat <img src="/images/Twitter.svg" alt="X" className={styles.smallIcon} />
                </button>

                <button className={styles.mobileFounderButton}>
                  Talk to Founder
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}