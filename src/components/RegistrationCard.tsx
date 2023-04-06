import React from 'react'
import styles from '../styles/regcard.module.css'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  className?: string
  color: string
}

const RegistrationCard = ({ className, color }: Props) => {
  return (
    <div 
      className={`${styles.main} ${className}`}
      style={{ color }}
    >
      <div className={styles.nav}>
        <AppRegistrationIcon className={styles.reg} sx={{borderColor: color}} />
        <AddIcon className={styles.add} sx={{borderColor: color}} />
      </div>
      <div className={styles.text}>
        <p>
          ONLINE ROUNDS COMPLETING SOON!
        </p>
      </div>
    </div>
  )
}

export default RegistrationCard