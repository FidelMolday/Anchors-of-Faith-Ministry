import React, { useEffect, useState } from "react";
import styles from './Real.module.css';

const Real = () => {
    const [projects, setProjects] = useState(0);
    const [experience, setExperience] = useState(0);
    const [clients, setClients] = useState(0);
    const [awards, setAwards] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProjects((prev) => (prev < 8 ? prev + 10 : 8));
            setExperience((prev) => (prev < 7 ? prev + 1 : 7));
            setClients((prev) => (prev < 3 ? prev + 1 : 3));
            setAwards((prev) => (prev < 100 ? prev + 1 : 100));
        }, 50); // Adjust speed by changing this value (50ms)

        return () => clearInterval(intervalId);
    }, []);
 
    return (
        <div className="mb-5 overflow-hidden">
            <div className="row g-0 mt-5">
                <div className="col-md-3 text-center">
                    <div data-aos='fade-up' className={`${styles.statsBox} ${styles.hoverEffect}`}>
                        <p className={styles.statsNumber}>{projects.toLocaleString()}+</p>
                        <p className={styles.statsLabel}>Mission Attended</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div data-aos='fade-up' className={`${styles.statsBox} ${styles.hoverEffect}`}>
                        <p className={styles.statsNumber}>{experience}+</p>
                        <p className={styles.statsLabel}>Years of Service</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div data-aos='fade-up' className={`${styles.statsBox} ${styles.hoverEffect}`}>
                        <p className={styles.statsNumber}>{clients}</p>
                        <p className={styles.statsLabel}>Number of Chapters</p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div data-aos='fade-up' className={`${styles.statsBox} ${styles.hoverEffect}`}>
                        <p className={styles.statsNumber}>{awards}+</p>
                        <p className={styles.statsLabel}>Number of Members</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Real;
