import Image from 'next/image';
import styles from './Bespoke.module.css'; 

export default function Bespoke() {
    return (
        <div className={styles.bespokeContainer}>
            <h1 className={styles.bespokeTitle}>Bespoke Fashion</h1>
            <p className={styles.bespokeSubtitle}>Experience personalized fashion tailored just for you.</p>

            <div className={styles.bespokeSection}>
                <div className={styles.bespokeImageWrapper}>
                    <Image 
                        src="/image5.jpg" 
                        alt="Description of Image 1" 
                        className={styles.bespokeImage}
                        width={600} 
                        height={400} 
                    />
                </div>
                <div className={styles.bespokeText}>
                    <h2>Reception Dress</h2>
                    <p>A perfect blend of culture, craft and class.</p>
                </div>
            </div>

            <div className={styles.bespokeSection}>
                <div className={styles.bespokeImageWrapper}>
                    <Image 
                        src="/image6.jpg" 
                        alt="Description of Image 2" 
                        className={styles.bespokeImage}
                        width={600} 
                        height={400} 
                    />
                </div>
                <div className={styles.bespokeText}>
                    <h2>Ankara Goodness</h2>
                    <p>Tailored to perfection with the right fit and silhouette.</p>
                </div>
            </div>
        </div>
    );
}
