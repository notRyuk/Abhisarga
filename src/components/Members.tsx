import { Button } from '@mui/material'
import React, { CSSProperties } from 'react'
import styles from '../styles/aboutus.module.css'

interface Props {
    sx?: CSSProperties
    sx2?: CSSProperties
}

const Members = ({ sx, sx2 }: Props) => {
  return (
    <div className={styles.main} style={sx}>
        <p
          style={{
            fontSize: "30px"
          }}
        >
          KNOW MORE ABOUT US
        </p>
        <Button 
          variant='contained' 
          sx={{ 
            width: "90%", 
            padding: "20px 0px 20px 0px", 
            fontFamily: "ArcadeClassic", 
            fontSize: "28px", 
            backgroundColor: "orange", 
            "&:hover": { 
              backgroundColor: "orange", 
              opacity: "0.8" 
            } 
          }}
        >
          TEAM MEMBERS
        </Button>
    </div>
  )
}

export default Members