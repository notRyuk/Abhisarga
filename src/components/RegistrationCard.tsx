import React from 'react'
import styles from '../styles/regcard.module.css'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddIcon from '@mui/icons-material/Add';

const RegistrationCard = () => {
  return (
    <div className={styles.main} 
        style={{ color: "#3968CB" }}>
        <div className={styles.nav}>
            <AppRegistrationIcon className={styles.reg} />
            <AddIcon className={styles.add} />
        </div>
        <div className={styles.text}>
            <p>
                REGISTRATIONS ARE OPEN!
            </p>
        </div>
    </div>
  )
}

export default RegistrationCard