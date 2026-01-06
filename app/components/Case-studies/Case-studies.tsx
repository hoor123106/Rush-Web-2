import styles from "./CaseStudy.module.css";

const cases = [
  {
    id: 1,
    title: "Clarion Calls",
    caseImage: "/images/case-1.png",
    testimonialImage: "/images/testimonial1.webp",
    brandLogo: "/images/carlon.png",
    quote: "The team at Rushweb Studio truly understands our vision and has helped us create a website that perfectly represents our brand. Their attention to detail and commitment to excellence is unmatched.",
    author: "David Thompson",
    role: "CEO, Tech Startup"
  },
  {
    id: 2,
    title: "Music City",
    caseImage: "/images/case-2.png",
    testimonialImage: "/images/testimonial2.webp",
    brandLogo: "/images/streetEats.png",
    quote: "Professional, punctual, and results-driven. Rushweb Studio has been our go-to agency for all things digital.",
    author: "James Wilson",
    role: "Operations Head"
  },
  {
    id: 3,
    title: "Jonnie",
    caseImage: "/images/case-3.png",
    testimonialImage: "/images/testimonial3.webp",
    brandLogo: "/images/junnie.png",
    quote: "Rushweb Studio creative team brought our product to life. Their branding strategy helped us stand out in a crowded market.",
    author: "Emily Carter",
    role: "Product Manager"
  }
];

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <div className={styles.caseContainer}>
        <h2 className={styles.heading}>Our Case Studies</h2>
        <div className={styles.cardsContainer}>
          {cases.map((item) => (
            <div key={item.id} className={styles.outerCard}>
              <div className={styles.innerGrid}>
                <div className={styles.imageWrap}>
                  <img src={item.caseImage} alt={item.title} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.Casetitle}>{item.title}</h3>
                  <div className={styles.tags}>
                    <span className={`${styles.tag} ${styles.product}`}>Product</span>
                    <span className={`${styles.tag} ${styles.branding}`}>Branding</span>
                    <span className={`${styles.tag} ${styles.web}`}>Web</span>
                  </div>
                  <div className={styles.textBox}>
                    <div className={styles.textPadding}>
                      <p>{item.quote}</p>
                    </div>
                    <div className={styles.authorRow}>
                      <div className={styles.authorInfo}>
                        <div className={styles.avatar}>
                          <img src={item.testimonialImage} alt="" />
                        </div>
                        <div className={styles.authorText}>
                          <strong>{item.author}</strong>
                          <span>{item.role}</span>
                        </div>
                      </div>
                      <div className={styles.brandLogo}>
                        <img src={item.brandLogo} className={styles.logoIcon} alt="Logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.arrow} aria-label="View Case Study">
                <img src="/images/ArrowUp.png" alt="arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}