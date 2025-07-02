import React, { useState } from "react";
import styles from './Footer.module.css';
import { FiChevronDown } from 'react-icons/fi';
import { FaFacebook, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

const servicesData = [
    { 
        name: 'Our Constitution', 
        pdfUrl: 'https://drive.google.com/file/d/14SvAt1CvDryMyJf7NwWg1fKM3Qhs8DPa/view?usp=sharing' 
    },
    { 
        name: 'Commitment Form', 
        pdfUrl: 'https://drive.google.com/file/d/14SvAt1CvDryMyJf7NwWg1fKM3Qhs8DPa/view?usp=sharing' 
    },
];

const Footer = () => {
    const [openService, setOpenService] = useState(null);

    const toggleService = (index) => {
        if (openService === index) {
            setOpenService(null);
        } else {
            setOpenService(index);
        }
    };

    return (
        <>
            {/* Newsletter Section */}
            <div className={styles.newsletterContainer}>
                <div className={styles.newsletterContent}>
                    <p className={styles.newsletterText}>
                        Subscribe to our devotions to grow <br />
                        your spiritual life.
                    </p>
                    <div className={styles.newsletterInputContainer}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.newsletterInput}
                        />
                        <button
                            className={styles.subscribeButton}
                            onClick={() => (window.location.href = "mailto:ministryafm@gmail.com")}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div style={{ backgroundColor: '#818589', paddingTop: '89px', paddingBottom: '90px' }}>
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>Anchors Of Faith</p>
                            <p className={styles.text}>Anchors of faith Ministry is affiliated to Lala SDA Church in Homa Bay Town, Lake Victoria Field. </p>
                        </div>

                        {/* Column 2 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Useful Links</p>
                            {servicesData.map((service, index) => (
                                <div key={index}>
                                    <div className={styles.text} onClick={() => toggleService(index)}>
                                        {service.name}
                                        <FiChevronDown style={{ marginLeft: '8px', cursor: 'pointer' }} />
                                    </div>
                                    {openService === index && (
                                        <div
                                            className={styles.text}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {/* Link to the PDF */}
                                            <a href={service.pdfUrl} target="_blank" rel="noopener noreferrer">
                                                View {service.name}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Our Programs</p>
                            <p className={styles.text}>Evangelism Campains</p>
                            <p className={styles.text}>Charity Visits</p>
                            <p className={styles.text}>Inreach Sessions</p>
                            <p className={styles.text}>Ministry missions</p>
                        </div>

                        {/* Column 4 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Follow Our Socials</p>
                           {/*<p className={styles.text}>
                                <FaWhatsapp className={styles.icon} /> FaWhatsapp: @AFM
                            </p>*/}
                          <p className={styles.text}>
                             <a href="https://www.youtube.com/channel/UCD8M2weGTcH7VoOaUlY0R_A" target="_blank" rel="noopener noreferrer">
                             <FaYoutube className={styles.icon} />
                            </a> YouTube: @AFM
                             </p>                                 

                            <p className={styles.text}>
                                <a href="https://whatsapp.com/channel/0029Vb5sZoHI1rcmWDxMI82t" target="_blank" rel="noopener noreferrer">
                               <FaWhatsapp className={styles.icon} />
                                 </a> Whatsapp:@AFM
                                </p>

                            {/* New Contact Information Section */}
                            <p className={styles.head}>Contact Us</p>
                            <p className={styles.text}>
                                PO Box _ Homa-bay
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Embedded Map Section */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6304751302046!2d34.441210973828134!3d-0.5559846994385675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d4d59b4e70db75%3A0xf915a553ca1b943!2sLala%20SDA%20Church!5e0!3m2!1sen!2ske!4v1750535123261!5m2!1sen!2ske" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    title="Location Map of Lala SDA"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Copyright Section */}
            <div style={{ backgroundColor: '#017E84', borderTop: 'solid 1px #707070' }}>
                <p className={styles.bottom}>Copyright © 2025 Anchors Of Faith. All rights reserved</p>
            </div>
        </>
    );
};

export default Footer;
