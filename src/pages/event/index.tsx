import React from 'react'
import BasicModal from '../../components/Modal'
import NameCard from '../../components/NameCard'
import styles from '../../styles/event.module.css'

const index = () => {
  return (
    <div className={styles.main}>
        <div className={styles.mainLeft}>

        </div>

        <div className={styles.mainMid}>
            <NameCard />
        </div>
        
        <div className={styles.mainRight}>
            
        </div>
    </div>
  )
}

export default index