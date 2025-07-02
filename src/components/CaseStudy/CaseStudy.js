import React from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';

// Import icons
import { FaUserNurse, FaMusic, FaProjectDiagram, FaHandsHelping, FaCross, FaBookOpen } from 'react-icons/fa';

const CaseStudy = () => {
    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <div data-aos='slide-left'>
                <p className={styles.study}>ANCHORS OF FAITH DEPARTMENTS</p>
            </div>

            {/* departments Container */}
            <div className='row mb-2'>
                {/* */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaUserNurse className={styles.icon} />
                            <p className={styles.imgTitle}>Health Department</p>
                            <p className={styles.serviceDescription}>
                                The department, recognizes the divine health principles and guidance found in the Holy Bible and inspired writings of EG. White to promote holistic well being.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Text Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaMusic className={styles.icon} />
                            <p className={styles.imgTitle}>Music</p>
                            <p className={styles.serviceDescription}>
                                The department is to use music as a tool for worship,spiritual growth and outreaches,fostering an environment for skill development and to glorify God.
                            </p>
                        </div>
                    </Link>
                </div>
                {/* Text Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaBookOpen className={styles.icon} />
                            <p className={styles.imgTitle}>Publishing Department</p>
                            <p className={styles.serviceDescription}>
                            The department is responsible for organising for the acquisition and distribution of the literature materials by the help of the members and the sponsers of AFM.    .
                            </p>
                        </div>
                    </Link>
                </div>
                {/* Text Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaCross className={styles.icon} />
                            <p className={styles.imgTitle}>Evangelism Department</p>
                            <p className={styles.serviceDescription}>
                                This department in AFM is responsible for organising outdoors and indoors mission evangelism.It's mandated with the responsibility of organising for the speakers.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Audio Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaProjectDiagram className={styles.icon} />
                            <p className={styles.imgTitle}>Development & strategic Planning</p>
                            <p className={styles.serviceDescription}>
                                Members are expected to actively participate on developing strategic plans,conducting research,analysing the data,and providing recomendations for the ministry growth .
                            </p>
                        </div>
                    </Link>
                </div>

                {/* 3D Point Cloud Annotation */}
                <div className={`col-md-4 col-sm-6 mt-4 ${styles.serviceContainer}`} data-aos='fade'>
                    <Link to="/pricing" style={{ textDecoration: "none" }}>
                        <div className={styles.img}>
                            <FaHandsHelping className={styles.icon} />
                            <p className={styles.imgTitle}>Welfare Department</p>
                            <p className={styles.serviceDescription}>
                                This department aims to create a positive atmosphere where all members feel valued,motivated and empowered to achieve their full potential holistically.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;
