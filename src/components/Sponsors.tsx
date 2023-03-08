import { Button } from '@mui/material'
import React, { CSSProperties } from 'react'
import styles from '../styles/aboutus.module.css'

interface Props {
    sx?: CSSProperties
    color: string
}

const Sponsors = ({ sx, color }: Props) => {
  return (
    <div className={styles.main} style={{...sx, color, borderColor: color}}>
        <p className={styles.heading} style={{ color }}>
            SPONSORS
        </p>
    </div>
  )
}

export default Sponsors