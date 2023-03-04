import React from 'react'
import styles from '../styles/smallcircle.module.css'

interface Props {
  color: string
}

const SmallCircle = ({color}: Props) => {
  return (
    <div className={styles.main} style={{ color, border:  `10px solid ${color}` }}>
      <p className={styles.p}>SPONSORS</p> 
    </div>
  )
}

export default SmallCircle