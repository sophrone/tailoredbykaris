import Image from 'next/image';
import styles from './Consultations.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Consultation() {
    return (
        <div className={styles.consultationContainer}>
            <Image 
                src="/image8.jpg" 
                alt="Consultation Services"
                className={styles.consultationImage}
                width={1200} 
                height={400} 
            />
            <h1>Consultation Services</h1>
            <p>Book a consultation to discuss your fashion needs. Our expert consultants are here to guide you through selecting the perfect attire that fits your style and occasion.</p>
            <p>Whether you&apos;re preparing for a wedding, a special event, or just want to refresh your wardrobe, we offer personalized consultations tailored to your preferences.</p>

            <h2>Contact Us</h2>
            <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                    <span><strong>Phone:</strong> +234 703 685 6573</span>
                </div>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    <span><strong>Email:</strong> tailoredbykarisinfo@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                    <span><strong>WhatsApp:</strong> +234 703 685 6573</span>
                </div>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <span><strong>Facebook:</strong> <a href="https://facebook.com/ankaracafe.ng" target="_blank" rel="noopener noreferrer">facebook.com/tailoredbykaris</a></span>
                </div>
                <div className={styles.contactItem}>
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                    <span><strong>Instagram:</strong> <a href="https://instagram.com/tailoredbykaris_" target="_blank" rel="noopener noreferrer">instagram.com/tailoredbykaris_</a></span>
                </div>
            </div>
        </div>
    );
}
