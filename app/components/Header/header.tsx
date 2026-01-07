"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X as CloseIcon, Instagram, Facebook, X, Linkedin } from "lucide-react"
import styles from "./Header.module.css"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToCall = () => {
    const callToAction = document.getElementById('book-call');
    if (callToAction) {
      callToAction.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
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
          <Link href="/case-studies" className={styles.navLink}>Work</Link>

          <Link href="https://x.com" className={styles.socialButton} aria-label="X">
            <X size={18} className={styles.socialIcon} />
          </Link>

          <Link href="https://instagram.com" className={styles.socialButton} aria-label="Instagram">
            <Instagram size={18} className={styles.socialIcon} />
          </Link>

          <Link href="https://facebook.com" className={styles.socialButton} aria-label="Facebook">
            <Facebook size={18} className={styles.socialIcon} />
          </Link>

          <Link href="https://linkedin.com" className={styles.socialButton} aria-label="LinkedIn">
            <Linkedin size={18} className={styles.socialIcon} />
          </Link>

          <button className={styles.primaryButton} onClick={scrollToCall}>
            <Image src="/images/calender.webp" alt="Calendar" width={20} height={20} className={styles.buttonIcon} />
            <span className={styles.buttonText}>Book call with Rush</span>
          </button>
        </div>

        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <CloseIcon size={28} color="#4E0109" /> : <Menu size={28} color="#4E0109" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileContentWrapper}>
              <div className={styles.mobileLinks}>
                <Link href="/case-studies" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>
                  Work
                </Link>
              </div>

              <div className={styles.mobileActionButtons}>
                <button className={styles.mobileChatButton}>
                  Lets Chat <Linkedin size={20} color="#1a1a1a" />
                </button>
                <button className={styles.mobileFounderButton} onClick={scrollToCall}>
                  <Image src="/images/calender.webp" alt="Calendar" width={18} height={18} className={styles.mobileIcon} />
                  <span>Talk to Founder</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}