import { Button } from '@mui/material'
import React, { CSSProperties } from 'react'
import styles from '../styles/aboutus.module.css'

interface Props {
    sx?: CSSProperties
}

const Sponsors = ({ sx }: Props) => {
  return (
    <div className={styles.main} style={sx}>
        <p className={styles.heading}>
            SPONSORS
        </p>
    </div>
  )
}

export default Sponsors