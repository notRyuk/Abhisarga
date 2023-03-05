import React from 'react'
import styles from '../styles/prizes.module.css'
import arrowImage from "../assets/arrow.svg";


const Prizes = () => {
  return (
    <div className={styles.main}>
        <div className={styles.black}>
          PRIZE POOL OF OVER 10 LAKH SPREAD OVER 11 EVENTS!
        </div>
        <div className={styles.text}>
          <p className={styles.prizes}>PRIZES</p>
          <img 
            src={arrowImage} 
            alt="arrow"
          />
        </div>
    </div>
  )
}

export default Prizes