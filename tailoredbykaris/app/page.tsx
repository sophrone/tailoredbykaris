import React from 'react'; 
import styles from './HomePage.module.css'; 

export default function Home() {
    return (
        <div>
            <section className={styles.hero}>
                <h1>Welcome to Tailored By Karis</h1>
                <p>Tailored For Royalty!</p>
            </section>
            <section className={styles.videoSection}>
                <video 
                    className={styles.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/montage.MP4" type="video/mp4" /> 
                    Your browser does not support the video tag.
                </video>
                <div className={styles.videoDescription}>
                    <h2>STYLE, POISE, ELEGANCE</h2>
                    <p>
                        The Tailored By Karis (TBK) woman exudes these with confidence as she gracefully stands out of the crowd.
                    </p>
                </div>
            </section>
        </div>
    );
}
