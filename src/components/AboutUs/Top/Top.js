import React from "react";
import styles from './Top.module.css';

const Top = () => {
    return (
        <div className={`container overflow-hidden`}>
            {/* First paragraph about afm */}
            <div className={`row ${styles.contain}`}>
                <div className={`col-md-12`}>
                    <p data-aos='slide-right' className={styles.heading}>
                        About Anchors Of Faith Ministry
                    </p>
                    <p data-aos='fade-up' className={styles.content}>
                        Anchors Of Faith is a group of Seventh Day Adventist Church, who has a call to carry forward the mission of the church to the world and purpose to prepare a people who will withstand the storm which is coming ahead of the church.
                        We uphold all the gospel reforms as taught by Seventh Day Adventist Church.We work in harmony with the general body and we are affliated to Lala SDA Church,Lake Victoria Field.
                    </p>
                </div>
            </div>

            {/* Second paragraph about afm */}
            <div className={`row ${styles.contain}`}>
                <div className={`col-md-12`}>
                    <p data-aos='slide-left' className={styles.subHeading}>
                        Our Mission
                    </p>
                    <p data-aos='fade-up' data-aos-offset='80' className={styles.content}>
                        To work aggresively and tirelessly to win souls to Christ.To baptise them in the name of the father,the son and the Holy spirit,teaching and exhorting them of Christ, healing the sick,comforting 
                        the sin sick soul,preaching the gospel to the world, and to point men to Christ.AFM has alocal and global mission to proclaim the wholesome gospel truth to all as keenly elaborated in the Bible.
                        We desire and purpose to hasten Christ's return through the active medical missionary ministry, pointing out the light of Christ,and to a great religious awakening.      
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Top;
