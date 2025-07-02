import React from 'react';
import styles from './Bottom.module.css';

const Bottom = () => {
    return (
        <>
            <div className={`container ${styles.contain} overflow-hidden`}>
                {/* medical missionary*/}
                <div className={`row ${styles.aiSection} mb-5`}>
                    <div className="col-12 text-center">
                        <div className={styles.aiContainer}>
                            <h2 className={styles.aiHeading}>Medical Missionary</h2>
                            <p className={styles.aiContent}>
                                At Anchors of Faith Ministry, our medical missionary work follows Christ’s method alone—combining the gospel with practical care. We promote natural remedies, lifestyle reform, and health education as tools for restoring the body and soul. Through community outreach such as health expos, training sessions, and one-on-one ministry, we seek to prevent disease, relieve suffering, and lead souls to the Great Physician. 
                            </p>
                        </div>
                    </div>
                </div>

                {/* New Sections */}
                <div className="row mb-5">
                    {/*  */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Health Expos</h3>
                            <p className={styles.itemContent}>
                              Demonstrations simple home remedies,healthy cooking, and lifestyle habits.Covers the NEWSTART principles.
                            </p>
                        </div>
                    </div>

                    {/* Image and Text Processing Technologies */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Natural Remedies & Lifestyle Counseling</h3>
                            <p className={styles.itemContent}>
                                Teaching the use of natural remedies,offering lifestyle guidance for reversing or preventing lifestyle diseases and promoting plant based diet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    {/* Supply Chain and Logistics Optimization */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Health Education and Training</h3>
                            <p className={styles.itemContent}>
                                In colaboration with the IUMMC we aim at training our members and the church as a whole the medical misionary based on biblical and spirit of prophecy counsel. .
                            </p>
                        </div>
                    </div>

                    {/* Customized Technology Integration */}
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className={styles.itemContainer}>
                            <h3 className={styles.itemHeading}>Medical Support During Mission</h3>
                            <p className={styles.itemContent}>
                                We hold medical camps during our missions to reverse common lifestyle diseases and offering health counseling as well.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="row mb-5">
               </div>
                {/* Headings and Icons Section */}
                {/* 
                <div className="row mb-5">
                    {fakeData.map((x) => (
                        <div key={x.id} className="col-md-6 d-flex justify-content-center">
                            <div className={styles.itemContainer}>
                                <div className={styles.iconContainer}>
                                    <i className={`fas ${x.icon} ${styles.icon}`}></i>
                                </div>
                                <p className={styles.head}>{x.heading}</p>
                            </div>
                        </div>
                    ))}
                </div>
                */}

                {/* Content Section */}
                {/* 
                <div className="row mb-5">
                    {fakeData.map((x) => (
                        <div key={x.id} className="col-md-6 d-flex justify-content-center">
                            <div className={styles.contentContainer}>
                                <p className={styles.content}>{x.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                */}
            </div>
        </>
    );
};

export default Bottom;
