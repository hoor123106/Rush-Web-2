"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "./Pacakages.module.css"

type PlanDetails = {
  badge: string
  price: string
  originalPrice: string
  title: string
  features: string[]
}

type ServiceCategory = {
  name: string
  plans: PlanDetails[]
}

const servicePlans: Record<string, ServiceCategory> = {
  websites: {
    name: "Websites",
    plans: [
      {
        badge: "Startup Website",
        price: "$200",
        originalPrice: "$400",
        title: "Startup Website Package",
        features: [
          "1-Page Website",
          "Customized Design (basic)",
          "WordPress",
          "Contact Form",
          "1 Banner Design (basic)",
          "3 Revisions",
          "Dedicated Project Manager",
          "100% Satisfaction Guarantee",
        ],
      },
      {
        badge: "Professional Website",
        price: "$400",
        originalPrice: "$800",
        title: "Professional Website Package",
        features: [
          "Up to 3-Page Website",
          "Customized Design (Standard)",
          "WordPress",
          "Mobile Responsive",
          "Hover Effects",
          "Stock Photos",
          "Contact Form",
          "6 Revisions",
          "Complete Design and Development",
          "Dedicated Project Manager",
          "100% Satisfaction Guarantee",
        ],
      },
    ],
  },
  ecommerce: {
    name: "E-Commerce",
    plans: [
      {
        badge: "E-Commerce Essential",
        price: "$649",
        originalPrice: "$1000",
        title: "E-Commerce Essential Package",
        features: [
          "E-Commerce Website Design and Development",
          "Basic Design",
          "3 Banner Designs",
          "4 Stock Photos",
          "Hover Effects",
          "Up to 70 Products",
          "Up to 3 Categories",
          "Content/Inventory Management System",
          "Shopping Cart Integration",
          "Payment Module Integration",
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
        ],
      },
      {
        badge: "E-Commerce Standard",
        price: "$849",
        originalPrice: "$1600",
        title: "E-commerce Standard Package",
        features: [
          "E-Commerce Website Design and Development",
          "Standard Design",
          "5 Banner Designs",
          "Stock Photos",
          "08 Revisions",
          "Hover Effects",
          "Up to 100 Products",
          "Up to 5 Categories",
          "Content/Inventory Management System",
          "Shopping Cart Integration",
          "Easy Product Search Bar",
          "Payment Module Integration (2)",
          "Direct Checkout",
          "Search Engine Submission",
          "Social Media Pages Integration",
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
        ],
      },
    ],
  },
  logo: {
    name: "Logo Designing",
    plans: [
      {
        badge: "Professional Logo",
        price: "$79",
        originalPrice: "$79",
        title: "Startup Logo Package",
        features: [
          "3 Logo Design Concepts",
          "2 Dedicated Designer",
          "6 Revisions",
          "24 Hours Turn Around Time",
          "Final Files (JPEG, PNG, PDF)",
          "Dedicated Project Manager",
          "100% Satisfaction Guarantee",
        ],
      },
      {
        badge: "Professional Logo",
        price: "$150",
        originalPrice: "$150",
        title: "Silver Logo Package",
        features: [
          "5 Logo Design Concept",
          "3 Dedicated Designers",
          "10 Revisions",
          "24 Hours Turn Around Time",
          "Final Files (JPEG, PNG, PDF, PSD)",
          "Dedicated Project Manager",
          "100% Unique Concepts",
          "100% Satisfaction Guarantee",
        ],
      },
    ],
  },
  seo: {
    name: "SEO",
    plans: [
      {
        badge: "Digital Marketing",
        price: "$250",
        originalPrice: "$500",
        title: "SEO Essential",
        features: [
          "5 Keywords",
          "Off-page Optimization",
          "Link Building",
          "Social Bookmarking",
          "Guaranteed Ranking on Google",
          "Basic Analytical Report",
          "Dedicated Project Manager",
        ],
      },
      {
        badge: "Digital Marketing",
        price: "$500",
        originalPrice: "$1000",
        title: "SEO Standard",
        features: [
          "10 Keywords",
          "Off-page Optimization",
          "On-page Optimization",
          "Link Building Social Bookmarking",
          "Guaranteed Ranking on Google",
          "Comprehensive Analytical Report",
          "Dedicated Project Manager",
        ],
      },
    ],
  },
  socialmedia: {
    name: "Social Media",
    plans: [
      {
        badge: "Digital Marketing",
        price: "$125",
        originalPrice: "$250",
        title: "Social Media Presence",
        features: [
          "Social Business Account Creation (Any 3)",
          "Cover Photo Design",
          "Profile Picture Design",
          "Welcome Post Design",
        ],
      },
      {
        badge: "Digital Marketing",
        price: "$400",
        originalPrice: "$800",
        title: "Essential Monthly Package",
        features: [
          "2 Posting Per Week, Each Network",
          "Content Generation",
          "Post Design",
          "Business Page Optimization",
          "Social Media Calendar",
          "Monthly Progress Report",
          "Paid Boosting (Additional Charges)",
        ],
      },
    ],
  },
}

export default function PackagesSection() {
  const [selectedService, setSelectedService] = useState("websites")

  const activeCategory = servicePlans[selectedService]

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>
          Rush Web Studio <span className={styles.headerAccent}>fixed packages.</span>
        </h1>

        <div className={styles.categoriesWrapper}>
        
          <div className={styles.filterButtonsContainer}>
            {Object.keys(servicePlans).map((key) => (
              <button
                key={key}
                className={`${styles.filterButton} ${selectedService === key ? styles.filterButtonActive : ""}`}
                onClick={() => setSelectedService(key)}
              >
                {servicePlans[key].name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {activeCategory.plans.map((plan, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.badgeHeader}>
                  <Image
                    src="/images/Logo.svg"
                    width={50} height={50}
                    alt="Logo" className={styles.logoIcon}
                  />
                  <span className={styles.badgeText}>{plan.badge}</span>
                </div>

                <div className={styles.priceContainer}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.originalPrice}>{plan.originalPrice}</span>
                </div>

                <h2 className={styles.packagesTitle}>{plan.title}</h2>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className={styles.featureItem}>
                      <span className={styles.bullet}>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.buttonContainer}>
                <button className={index === 0 ? styles.buttonDark : styles.buttonOutline}>
                  Activate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}