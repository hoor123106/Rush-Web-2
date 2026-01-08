"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import styles from "./Hero.module.css"
import LogoMarquee from "@/app/components/Logo-scrolling/LogoMarquee"

const scrollToCall = () => {
  const callToAction = document.getElementById('book-call');
  if (callToAction) {
    callToAction.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  const projectScrollRef = useRef(null)

  useEffect(() => {
    if (!projectScrollRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(projectScrollRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 45,
        ease: "none",
      })
    })
    return () => ctx.revert()
  }, [])

  const projectSlides = [
    { id: 1, src: "/images/project-1.png", color: "#FF9E67" },
    { id: 9, src: "/images/Project9Last.png", color: "#4FDFC5" },
    { id: 2, src: "/images/project-2.png", color: "#C8A5FF" },
    { id: 3, src: "/images/project-3.png", color: "#F7B777" },
    { id: 4, src: "/images/project-4.png", color: "#5853FC" },
    { id: 5, src: "/images/project-5.png", color: "#FFE68E" },
    { id: 6, src: "/images/project-6.png", color: "#759583" },
    { id: 8, src: "/images/Project-8.png", color: "red" },
  ]

  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftColumn}>
        <div className={styles.brandHeader}>
          <div className={styles.brandlogo}>
            <Image src="/images/Logo.svg" alt="Logo" width={160} height={48} className={styles.logoImg} priority />
          </div>
          <div className={styles.brandTextGroup}>
            <span className={styles.brandNameLine}>rush.</span>
            <span className={styles.brandNameLine}>web studio</span>
          </div>
        </div>

        <h1 className={styles.mainTitle}>
          Design partner for fast <span className={styles.highlightText}>growing SaaS & tech</span> startups
        </h1>

        <p className={styles.mainDescription}>
          We've designed 40+ high-growth products and brands, transforming early-stage visions into enterprise-grade digital experiences.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton} onClick={scrollToCall}>
            <Image
              src="/images/calender.webp"
              alt="Calendar"
              width={20}
              height={20}
              className={styles.buttonIcon}
            />
            <span className={styles.buttonText}>Book a call with Rush</span>
          </button>
          <button className={styles.secondaryButton} onClick={scrollToCall}>
            <Image src="/images/mail.png" alt="Mail" width={20} height={20} />
            <span>Contact Now</span>
          </button>
        </div>

        <div className={styles.marqueeWrapper}>
          <LogoMarquee />
        </div>

        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>
            "Since partnering with Rushweb Studio , our online sales have increased by 40%. Their SEO and PPC strategies have been incredibly effective in driving qualified traffic to our website."
          </p>
          <div className={styles.authorArea}>
            <div className={styles.authorAvatar}>
              <Image src="/images/testimonial5.webp" alt="Anton" width={48} height={48} className={styles.avatarImg} />
            </div>
            <div className={styles.authorInfo}>
              <div className={styles.authorName}>Sarah Jhonson</div>
              <div className={styles.authorTitle}>E-commerce Manager</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.projectTrack} ref={projectScrollRef}>
          {[...projectSlides, ...projectSlides].map((project, index) => (
            <div key={index} className={styles.projectCard} style={{ backgroundColor: project.color }}>
              <div className={styles.projectImageWrapper}>
                <Image src={project.src} alt={`Project ${project.id}`} width={550} height={700} className={styles.projectImage} priority />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}