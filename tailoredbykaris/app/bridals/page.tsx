import Image from 'next/image';
import styles from './Bridals.module.css'; 

export default function Bridals() {
    return (
        <div className={styles.bridalsContainer}>
            <h1>Bridal Collection</h1>
            <p>Explore our stunning bridal gowns and accessories.</p>

            <div className={styles.bridalsSection}>
                <Image 
                    src="/image2.jpg" 
                    alt="Description of Bridal Gown 1" 
                    className={styles.bridalsImage}
                    width={600} 
                    height={400} 
                />
                <div className={styles.bridalsText}>
                    <h2>Elegant A-Line Gown</h2>
                    <p>This stunning gown is perfect for any bride seeking elegance.</p>
                </div>
            </div>

            <div className={styles.bridalsSection}>
                <Image 
                    src="/image4.jpg" 
                    alt="Description of Bridal Gown 2" 
                    className={styles.bridalsImage}
                    width={600} 
                    height={400} 
                />
                <div className={styles.bridalsText}>
                    <h2>Classic Mermaid Dress</h2>
                    <p>A timeless piece that hugs the body perfectly.</p>
                </div>
            </div>
        </div>
    );
}