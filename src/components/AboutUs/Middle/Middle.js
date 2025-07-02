import React from "react";
import styles from './Middle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPray,faCross,faHandsHelping } from '@fortawesome/free-solid-svg-icons'; // Updated icons for our  services

const Middle = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                {/* Main heading for the section */}
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>
                    Join us for in-depth, Spirit-led Bible studies . </p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>
                   At Anchors of Faith Ministry, we are committed to producing and curating spiritually sound visual and textual content to support Bible study, evangelism, and gospel outreach. By prayerfully preparing accurate and edifying materials—whether image, text, audio, or video—we aim to uplift minds, strengthen faith, and help hasten Christ’s return. Every resource is carefully aligned with Scripture and the Spirit of Prophecy to ensure it is suitable for teaching, exhortation, and mission work.
                </p>
                <div className="row">
                    {/* First service block */}
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faPray} size="4x" className={styles.icon} /> {/*  */}
                            <p className={styles.head}>Evangelism Campaigns</p>
                            <p className={styles.content}>
                                Under two circustances can the ministry participate in an evangelistic campaign,ie Missions organised by the ministry and special invitations.The evangelism 
                                department is in full charge to propose or give members a chance to propose the mission site after seeing the need of mission in the region.
                            </p>
                        </div>
                    </div>

                    {/* Second service block */}
                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faHandsHelping} size="4x" className={styles.icon} /> {/*  */}
                            <p className={styles.head}>Charity Visit</p>
                            <p className={styles.content}>
                             In line with our mission and objectives the ministry participates in charity visits.These may include but not limited to hospital ministry,children's homes visits, prison ministry.This, the ministry has engage in, to fulfill Christ call to missionary
                            </p>
                        </div>
                    </div>

                    {/* Third service block */}
                    <div data-aos='fade-left' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <FontAwesomeIcon icon={faCross} size="4x" className={styles.icon} /> {/*  */}
                            <p className={styles.head}>In-Reach Session</p>
                            <p className={styles.content}>
                                Lest we forget our own salvation, we as a ministry  must meet to satisfy our spiritual,moral and physical needs.Among the activities are; AGM,Online Studies and students' get together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Middle;
