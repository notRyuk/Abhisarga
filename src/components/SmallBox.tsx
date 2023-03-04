import React from 'react'
import styles from '../styles/smallbox.module.css'

const SmallBox = () => {
  return (
    <div className={styles.main} style={{ color: "#FF68A8", border: "10px solid #FF68A8" }}>
        <p className={styles.p}>CULTURAL EVENTS</p>
    </div>
  )
}

export default SmallBox