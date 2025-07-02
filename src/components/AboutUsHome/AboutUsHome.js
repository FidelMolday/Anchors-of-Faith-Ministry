import React from "react";
import styles from './AboutUsHome.module.css';

const AboutUsHome = () => {
  return (
    <div className={`container ${styles.contain}`}>
      <div className="row">
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Advent Message Proclamation</h3>
            <p>Precise labeling of objects, pedestrians, and road signs for improved AI navigation.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Winning new souls</h3>
            <p>In cordination with the church leadership win more souls to christ and establish sabbath schools.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Mentorship</h3>
            <p>To mentor ministry members and develop exemplary,dilligent and godly workmen in all reams.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.box}>
            <h3>Medical Missionary</h3>
            <p>To foster seriousness to call to medical missionary work and recriting willing members.CH425.1.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className={styles.partnerBox}>
            <h3>Join Us</h3>
            <p>Partner with us in advancing the everlasting gospel. Whether it’s through evangelistic missions, youth mentorship, music ministry, or community outreach, your support helps build a foundation that brings hope, light, and transformation to countless lives. Together, we can fulfill the great commission and prepare a people for Christ’s soon return.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
