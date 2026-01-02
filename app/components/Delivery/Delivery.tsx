"use client"

import { useState } from "react"
import styles from "./Delivery.module.css"

type ServiceTab = "Websites" | "Branding"

export default function Delivery() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("Websites")

  const tabs: ServiceTab[] = ["Websites", "Branding"]

  const servicesData: Record<ServiceTab, { service: string; timeframe: string }[]> = {
    Websites: [
      { service: "Landing page", timeframe: "1-2 weeks" },
      { service: "Marketing website", timeframe: "3-6 weeks" },
      { service: "E-commerce site", timeframe: "4-8 weeks" },
      { service: "Website redesign", timeframe: "2-4 weeks" },
    ],
    Branding: [
      { service: "Brand identity", timeframe: "4-6 weeks" },
      { service: "Logo design", timeframe: "1-2 weeks" },
      { service: "Brand guidelines", timeframe: "2-3 weeks" },
      { service: "Visual system", timeframe: "3-4 weeks" },
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