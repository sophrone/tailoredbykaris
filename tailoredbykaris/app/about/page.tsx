import styles from './AboutPage.module.css';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.heading}>About Us</h1>
            <p className={styles.paragraph}>
                Welcome to Tailored By Karis, where style meets class. Tailored By Karis was established in 2018. It started under the name Ankara cafe, because of its exquisite ankara fabric designs. As the brand grew and expanded its services to cover bespoke and bridal wears, the brand name was changed to Tailored By Karis. With a passion for craftsmanship and attention to detail, we create stunning pieces tailored specifically for you.
            </p>
            <p className={styles.paragraph}>
                Our journey began with a simple vision: to provide high-quality, custom-made garments that empower individuals to express themselves through fashion. Each piece is crafted with the finest fabrics and meticulous care, ensuring that you not only look good but feel great too.
            </p>
            <p className={styles.paragraph}>
                We believe that fashion should be an experience and a memorable one at that. Hence our team of experienced stylists are dedicated to providing personalized consultations, helping you find the perfect fit and style for any occasion—be it a wedding or a gala.
            </p>
            <p className={styles.paragraph}>
                Join us on this journey of style, elegance, and self-expression. Discover the difference of bespoke fashion and let us help you curate timeless pieces that truly reflect your unique style.
            </p>
        </div>
    );
}
