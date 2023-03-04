import React from 'react'
import styles from '../styles/aboutus.module.css'

const AboutUs = () => {
  return (
    <div className={styles.main}>
        <p className={styles.heading}>
            ABOUT US
        </p>
        <div className={styles.miniCard}>
            <p className={styles.p}>
                IIIT Sri City is a University.
            </p>
        </div>
        <div className="dot"></div>
    </div>
  )
}

export default AboutUs