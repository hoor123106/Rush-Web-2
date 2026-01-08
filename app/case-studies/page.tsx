import Footer from "../components/Footer/Footer";
import Header from "../components/Header/header";
import styles from "./CaseStudyPage.module.css";

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
  },
  {
    id: 4,
    title: "Comfy Cozy Kid",
    caseImage: "/images/case-7.png",
    testimonialImage: "/images/testimonial6.webp",
    brandLogo: "/images/Comfycozy.png",
    quote: "Rushweb Studio creative team brought our product to life. Their branding strategy helped us stand out in a crowded market.",
    author: "Michael Rodriguez",
    role: "Marketing Head"
  },
  {
    id: 5,
    title: "Nature Club",
    caseImage: "/images/case-4.png",
    testimonialImage: "/images/testimonial7.webp",
    quote: "Rush Web Studio designed our old UI and built us an intelligently thought out Website that actually converts. Extremely high quality!",
    author: "Ben Williams",
    role: "Co-Founder"
  },
  {
    id: 6,
    title: "Music City",
    caseImage: "/images/case-5.png",
    testimonialImage: "/images/testimonial8.webp",
    quote: "The design team understood our vision perfectly. The new interface is not only beautiful but has significantly improved our user retention.",
    author: "Daniel Lee",
    role: "Lead Manager"
  },
  {
    id: 7,
    title: "Jonnie",
    caseImage: "/images/case-6.png",
    testimonialImage: "/images/testimonial3.webp",
    quote: "Rushweb Studio is amazing! They completely overhauled our workflow and the new website performance is incredible. Highly professional team.",
    author: "Sophia Martinez",
    role: "Content Strategist"
  },
  {
    id: 8,
    title: "Music City",
    caseImage: "/images/case-8.png",
    testimonialImage: "/images/testimonail10.avif",
    quote: "The design team understood our vision perfectly. The new interface is not only beautiful but has significantly improved our user retention.",
    author: "Olivia Brown",
    role: "Marketing Director"
  },
  {
    id: 9,
    title: "Jonnie",
    caseImage: "/images/case-9.png",
    testimonialImage: "/images/testimonial3.webp",
    quote: "Professional, fast, and creative. They transformed our messy dashboard into a clean and intuitive Website for our entire global team.",
    author: "Sara Jhonson",
    role: "Developer @co-Founder"
  }
];

export default function CaseStudies() {
  return (
    <div>
      <Header />
      <section className={styles.section}>
        <div className={styles.caseContainer}>
          <h1 className={styles.mainTitle}>
            Our <span className={styles.highlightText}>Case Studies</span>
          </h1>
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
                        {item.brandLogo && (
                          <div className={styles.brandLogo}>
                            <img src={item.brandLogo} className={styles.logoIcon} alt="Logo" />
                          </div>
                        )}
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
      <Footer />
    </div>
  );
}