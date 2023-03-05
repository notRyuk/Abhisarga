import React, { CSSProperties } from 'react'
import styles from '../styles/smallbox.module.css'

interface Props {
  color: string
  title: string
  sx?: CSSProperties
}

const SmallBox = ({color, title, sx}: Props) => {
  return (
    <div 
      className={styles.main} 
      style={{ 
        color, 
        border: `10px solid ${color}`,
        ...sx 
      }}
    >
      <p className={styles.p}>{title}</p>
    </div>
  )
}

export default SmallBox