import React from 'react'
import styles from '../styles/logo.module.css'
import { Box } from '@mui/material'
import { CSSProperties } from "react"
import backgroundImage from "../assets/title-background.svg"
import titleImage from "../assets/Final Iteration.png"

interface Props {
  sx?: CSSProperties
}

const Logo = ({sx}: Props) => {
  return (
    <div className={styles.main} style={sx}>
      <img className={styles.bg} src={backgroundImage}></img>
      <img src={titleImage} className={styles.fg} alt="Kuch bhi"></img>
    </div>
  )
}

export default Logo