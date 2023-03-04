import React from 'react'
import styles from '../styles/logo.module.css'
import abhisarga from '../assets/Frame 1.png'

const Logo = () => {
  return (
    <div className={styles.main}>
        <img src='/Group 32.svg' className={styles.bg}></img>
        <img src='/Transparent Title.png' className={styles.fg}></img>
    </div>
  )
}

export default Logo