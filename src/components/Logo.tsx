import React from 'react'
import styles from '../styles/logo.module.css'

const Logo = () => {
  return (
    <div className={styles.main}>
        <p className={styles.topLeft}>.</p>
        <p className={styles.topRight}>.</p>
        <img src='../' alt=''></img>
        <p className={styles.bottomLeft}>.</p>
        <p className={styles.bottomRight}>.</p>
    </div>
  )
}

export default Logo