import Image from 'next/image';
import styles from './Bespoke.module.css'; 

export default function Bespoke() {
    return (
        <div className={styles.bespokeContainer}>
            <h1>Bespoke Fashion</h1>
            <p>Experience personalized fashion tailored just for you.</p>

            <div className={styles.bespokeSection}>
                <Image 
                    src="/image5.jpg" 
                    alt="Description of Image 1" 
                    className={styles.bespokeImage}
                    width={600} 
                    height={400} 
                />
                <div className={styles.bespokeText}>
                    <h2>Flowing Dress</h2>
                    <p>Get this amazing piece for your collection.</p>
                </div>
            </div>

            <div className={styles.bespokeSection}>
                <Image 
                    src="/image6.jpg" 
                    alt="Description of Image 2" 
                    className={styles.bespokeImage}
                    width={600} 
                    height={400} 
                />
                <div className={styles.bespokeText}>
                    <h2>Summer style gown</h2>
                    <p>A perfect fit for any occasion.</p>
                </div>
            </div>
        </div>
    );
}