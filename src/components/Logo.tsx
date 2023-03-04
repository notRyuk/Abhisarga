import React from 'react'
import styles from '../styles/logo.module.css'
import { CSSProperties } from "react"

interface Props {
  sx?: CSSProperties
}

const Logo = ({sx}: Props) => {
  return (
    <div className={styles.main} style={sx}>
        <img src='/Group 32.svg' className={styles.bg}></img>
        <img src='/Transparent Title.png' className={styles.fg}></img>
    </div>
  )
}

export default Logo