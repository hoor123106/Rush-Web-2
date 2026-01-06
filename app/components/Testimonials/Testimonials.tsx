import styles from "./Testimonials.module.css"
import Image from "next/image"

export default function Testimonials() {
  const TestimonialsList = [
    {
      id: 1,
      quote: "Rushweb Studio creative team brought our product to life. Their branding strategy helped us stand out in a crowded market.",
      authorName: "Emily Carter",
      authorTitle: "Product Manager",
      authorImg: "/images/testimonial1.webp",
      // brandImg: "/images/staeerEats.png"
    },
    {
      id: 2,
      quote: "Since partnering with Rushweb Studio , our online sales have increased by 40%.",
      authorName: "James Wilson",
      authorTitle: "Operations Head",
      authorImg: "/images/testimonial2.webp",
      // brandImg: "/images/carlon.png"
    }
  ];

  return (
    <section className={styles.TestimonialsSection}>
      <div className={styles.TestimonialsContainer}>
        {TestimonialsList.map((item) => (
          <div key={item.id} className={styles.TestimonialsCard}>
            <div className={styles.TestimonialsQuoteIcon}>“</div>

            <p className={styles.TestimonialsQuoteContent}>
              {item.quote}
            </p>

            <div className={styles.TestimonialsFooter}>
              <div className={styles.TestimonialsAuthorWrapper}>
                <Image
                  src={item.authorImg}
                  alt={item.authorName}
                  width={48}
                  height={48}
                  className={styles.TestimonialsAvatar}
                />
                <div className={styles.TestimonialsauthorText}>
                  <strong>{item.authorName}</strong>
                  <span>{item.authorTitle}</span>
                </div>
              </div>
              {/* 
              <div className={styles.TestimonialsBrandLogo}>
                <img src={item.brandImg} alt="logo" />
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}