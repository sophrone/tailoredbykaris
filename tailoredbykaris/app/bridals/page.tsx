import Image from 'next/image';
import styles from './Bridals.module.css'; 

export default function Bridals() {
    return (
        <div className={styles.bridalsContainer}>
            <div className={styles.bridalsSection}>
                <Image 
                    src="/bridal1.jpeg" 
                    alt="Description of Bridal Gown 1" 
                    className={styles.bridalsImage}
                    width={600} 
                    height={400} 
                />
            </div>
            <h1 className={styles.bridalsTitle}>Bridals</h1>
            <p className={styles.bridalsSubtitle}>
                Explore our range of stunning bridal gowns, bridal robes, court wedding outfits, traditional and reception dresses.
            </p>
        </div>
    );
}
