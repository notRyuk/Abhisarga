import React from 'react'
import styles from '../styles/smallbox.module.css'

interface Props {
  color: string
}

const SmallBox = ({color}: Props) => {
  return (
    <div className={styles.main} style={{ color, border:  `10px solid ${color}` }}>
      <p className={styles.p}>CULTURAL EVENTS</p>
    </div>
  )
}

export default SmallBox