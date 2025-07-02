import React from "react";
import styles from './ChoosingUs.module.css';

const ChoosingUs = () => {
    return (
        <div style={{ backgroundColor: '#e5f3ff' }}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Why Choose Anchors Of Faith</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Timely & Accurate Messages</p>
                            <p className={styles.logo_text}>We preach biblically-grounded truths meant to prepare people for the final events of the earths history and reflects the current time.</p>
                        </div>
                    </div>

                    <div data-aos='fade' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Diverse Calling</p>
                            <p className={styles.logo_text}>Our ministry brings together believers country wide with an aim to spread the advent message to all the nations.</p>
                        </div>
                    </div>

                    <div data-aos='fade-left' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Present Truth Messages</p>
                            <p className={styles.logo_text}>We advocate and emphasize the truths particularly needed in the last days before Christ return  .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoosingUs;
