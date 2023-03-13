import React, { CSSProperties } from 'react'
import styles from '../styles/regcard.module.css'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  className?: string
  sx?: CSSProperties
}

const Quote = ({ className, sx }: Props) => {
  return (
    <div 
      className={`${styles.main} ${className}`} 
      style={{ color: "#3968CB", ...sx }}
    >
      <div className={styles.nav}>
        <AppRegistrationIcon className={styles.reg} />
        <AddIcon className={styles.add} />
      </div>
      <div className={styles.text}>
        <p>
          "Try, try, but don't cry. One day you will touch the sky"
        </p>
      </div>
    </div>
  )
}

export default Quote