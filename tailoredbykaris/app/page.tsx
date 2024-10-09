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
                    <h2>Our Craftsmanship</h2>
                    <p>
                        At Tailored by Karis, we blend tradition with modern design to create bespoke clothing that speaks to your unique style.
                    </p>
                </div>
            </section>
        </div>
    );
}