import React, { CSSProperties } from 'react'
import styles from '../styles/authcard.module.css'
import Button from '@mui/material/Button';

interface Props {
    sx?: CSSProperties
}

const AuthCard = ({ sx }: Props) => {
  return (
    <div className={styles.main} style={sx}>
        <Button 
            variant="outlined"
            className={styles.login}
            style={{
                fontFamily: "ArcadeClassic",
                color: "black",
                borderTop: "3px solid black",
                borderLeft: "3px solid black",
                borderRight: "6px solid black",
                borderBottom: "6px solid black",
                borderRadius: "10px",
                width: "80%",
                padding: "1rem",
                marginTop: "15px",
                fontSize: "30px"
            }}
            sx={{
                "&:hover": {
                    backgroundColor: "#EDEDED"
                }
            }}>
                LOGIN
        </Button>
        <Button 
            variant="outlined"
            className={styles.signup}
            style={{
                fontFamily: "ArcadeClassic",
                marginTop: "10px",
                color: "black",
                borderTop: "3px solid black",
                borderLeft: "3px solid black",
                borderRight: "6px solid black",
                borderBottom: "6px solid black",
                width: "80%",
                padding: "1rem",
                marginBottom: "15px",
                fontSize: "30px",
                
            }}
            sx={{
                "&:hover": {
                    backgroundColor: "#EDEDED"
                }
            }}>
                SIGN UP
        </Button>
    </div>
  )
}

export default AuthCard