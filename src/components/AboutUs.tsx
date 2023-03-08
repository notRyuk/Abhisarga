import { Button } from '@mui/material'
import React from 'react'
import styles from '../styles/aboutus.module.css'

interface Props {
  color: string
}

const AboutUs = ({ color }: Props) => {
  return (
    <div 
      className={styles.main}
      style={{
        color,
        borderColor: color
      }}
    >
      <p 
        className={styles.heading}
        style={{
          color,
          borderColor: color
        }}
      >
        ABOUT US
      </p>
      <div 
        className={styles.miniCard}
        style={{
          color,
          borderColor: color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        {/* <p className={styles.p}> */}
          Abhisarga is the annual techno-cultural fest of the Indian Institute of Information Technology Sri City, which is a premier engineering institute located in Andhra Pradesh, India. This three-day carnival consists of Technical and Non-technical events organized by the clubs of our institute, and the expected participants are from institutes like IITs, NITs, IIITs and other well-known institutions.
        {/* </p> */}
      </div>
      <Button 
        variant='contained' 
        sx={{ 
          width: "90%", 
          fontFamily: "ArcadeClassic", 
          fontSize: "28px", 
          backgroundColor: color, 
          "&:hover": { 
            backgroundColor: color,
            transform: "scale(1.01)",
          } 
        }}>
          Learn More
        </Button>
    </div>
  )
}

export default AboutUs