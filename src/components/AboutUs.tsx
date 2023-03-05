import { Button } from '@mui/material'
import React from 'react'
import styles from '../styles/aboutus.module.css'

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <p className={styles.heading}>
        ABOUT US
      </p>
      <div className={styles.miniCard}>
        <p className={styles.p}>
            IIIT Sri City is a University.
        </p>
      </div>
      <Button 
        variant='contained' 
        sx={{ 
          width: "90%", 
          fontFamily: "ArcadeClassic", 
          fontSize: "28px", 
          backgroundColor: "#FF68A8", 
          "&:hover": { 
            backgroundColor: "#FF68A8",
            transform: "scale(1.01)",
          } 
        }}>
          Learn More
        </Button>
    </div>
  )
}

export default AboutUs