"use client"

import { useState } from "react"
import styles from "./Delivery.module.css"

type ServiceTab = "Websites" | "Branding"

export default function Delivery() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("Websites")

  const tabs: ServiceTab[] = ["Websites", "Branding"]

  const servicesData: Record<ServiceTab, { service: string; timeframe: string }[]> = {
    Websites: [
      { service: "Landing Page", timeframe: "3 to 5 Days" },
      { service: "Marketing Website", timeframe: "1 to 2 weeks" },
      { service: "E-commerce Site", timeframe: "2 to 3 weeks" },
      { service: "Website Redesign", timeframe: "1 to 2 weeks" },
    ],
    Branding: [
      { service: "Brand Identity", timeframe: "3 to 5 Days" },
      { service: "Logo Design", timeframe: "3 to 5 Days" },
      { service: "Brand Guidelines", timeframe: "1 to 2 weeks" },
      { service: "Visual System", timeframe: "1 to 2 weeks" },
    ],
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          How quick can we do the <span className={styles.highlight}>job</span>?
        </h1>

        <div className={styles.tabsOuter}>
          <div className={styles.tabList}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
              >
                {tab}
                {activeTab === tab && <div className={styles.activeUnderline} />}
              </button>
            ))}
          </div>
        </div>

        {/* Table card ab width auto lega */}
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>Service</div>
            <div className={styles.headerCell}>Timeframe</div>
          </div>

          {servicesData[activeTab].map((item, index) => (
            <div
              key={index}
              className={`${styles.row} ${index % 2 === 0 ? styles.rowGray : styles.rowWhite}`}
            >
              <div className={styles.cell}>{item.service}</div>
              <div className={styles.cell}>{item.timeframe}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}