import React, { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/smallcircle.module.css'

interface Props {
  color: string
  title: string
  sx?: CSSProperties
  link?: string
}

const SmallCircle = ({color, title, sx, link}: Props) => {
  const navigate = useNavigate()
  return (
    <div 
      className={styles.main} 
      style={{ 
        color, 
        border: `10px solid ${color}`, 
        ...sx 
      }}
      onClick={() => navigate(link)}
    >
      <p className={styles.p}>{title}</p> 
    </div>
  )
}

export default SmallCircle