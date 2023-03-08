import { Button } from '@mui/material'
import React, { CSSProperties } from 'react'
import styles from '../styles/aboutus.module.css'

interface Props {
  sx?: CSSProperties
  sx2?: CSSProperties
  color: string
}

const Members = ({ sx, sx2, color }: Props) => {
  return (
    <div className={styles.main} style={{...sx, color, borderColor: color}}>
        <p
          style={{
            fontSize: "30px",
            color
          }}
        >
          LET US INTRODUCE OURSELVES
        </p>
        <Button 
          variant='contained' 
          sx={{ 
            width: "90%", 
            padding: "20px 0px 20px 0px", 
            fontFamily: "ArcadeClassic", 
            fontSize: "28px", 
            backgroundColor: color, 
            "&:hover": { 
              backgroundColor: color, 
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