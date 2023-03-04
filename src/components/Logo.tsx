import React from 'react'
import styles from '../styles/logo.module.css'
import { Box } from '@mui/material'
import { CSSProperties } from "react"
import backgroundImage from "../assets/Group 32.svg"

interface Props {
  sx?: CSSProperties
}

const Logo = ({sx}: Props) => {
  return (
    <div className={styles.main} style={sx}>
      <Box 
        component="img"
        src={backgroundImage}
      />
      <Box
        component={"img"}
      />
    </div>
  )
}

export default Logo