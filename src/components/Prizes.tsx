import React from 'react'
import styles from '../styles/prizes.module.css'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const Prizes = () => {
  return (
    <div className={styles.main}>
          <IconButton>
            <AddIcon style={{color: "white", top: 0, right: 0, position: "sticky"}} />
          </IconButton>
        <div className={styles.black}>
            PRIZE POOL OF OVER 10 LAKH SPREAD OVER 11 EVENTS!
        </div>
        <div className={styles.text}>
          <p className={styles.prizes}>PRIZES</p>
          <KeyboardReturnIcon fontSize='large'
            sx={{
              marginTop: "-35%",
              fontSize: "60px"
            }}
          />
        </div>
    </div>
  )
}

export default Prizes