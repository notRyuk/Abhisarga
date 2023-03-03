import React from 'react'
import styles from "../styles/event.module.css"
import ComputerIcon from '@mui/icons-material/Computer';

const NameCard = () => {
  return (
    <div className={styles.nameCardMain} style={{ backgroundColor: "#CA7CD8"}}>
        <p className={styles.nameCardP}>
            "Talk is cheap. Show me the code."
        </p>
        <p className={styles.nameCardH}>
            IIITS HACKATHON
        </p>
        <ComputerIcon className={styles.computerIcon} />
        <hr className={styles.ruler} style={{color: "white"}} />
    </div>
  )
}

export default NameCard