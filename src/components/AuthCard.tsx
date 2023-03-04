import React from 'react'
import styles from '../styles/authcard.module.css'
import Button from '@mui/material/Button';

const AuthCard = () => {
  return (
    <div className={styles.main}>
        <Button 
            variant="outlined"
            className={styles.login}
            style={{
                color: "black",
                borderTop: "3px solid black",
                borderLeft: "3px solid black",
                borderRight: "6px solid black",
                borderBottom: "6px solid black",
                borderRadius: "10px",
                width: "70%",
                marginTop: "15px"
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
                marginTop: "10px",
                color: "black",
                borderTop: "3px solid black",
                borderLeft: "3px solid black",
                borderRight: "6px solid black",
                borderBottom: "6px solid black",
                width: "70%",
                marginBottom: "15px"
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