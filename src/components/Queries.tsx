import React, { CSSProperties } from 'react'
import styles from '../styles/query.module.css'
import Button from '@mui/material/Button';

interface Props {
    sx?: CSSProperties
}

const Queries = ({ sx }: Props) => {
  return (
    <div className={styles.main} style={sx}>
        <p className={styles.heading}>QUERIES</p>
        <Button 
            variant="outlined"
            className={styles.login}
            style={{
                color: "#CA7CD8",
                borderTop: "3px solid #CA7CD8",
                borderLeft: "3px solid #CA7CD8",
                borderRight: "6px solid #CA7CD8",
                borderBottom: "6px solid #CA7CD8",
                borderRadius: "10px",
                width: "70%",
                marginTop: "15px",
                fontWeight: "500"
            }}
            sx={{
                "&:hover": {
                    backgroundColor: "#EDEDED"
                }
            }}>
                FAQs
        </Button>
        <Button 
            variant="outlined"
            className={styles.signup}
            style={{
                marginTop: "10px",
                color: "#CA7CD8",
                borderTop: "3px solid #CA7CD8",
                borderLeft: "3px solid #CA7CD8",
                borderRight: "6px solid #CA7CD8",
                borderBottom: "6px solid #CA7CD8",
                borderRadius: "10px",
                width: "70%",
                marginBottom: "15px",
                fontWeight: "500"
            }}
            sx={{
                "&:hover": {
                    backgroundColor: "#EDEDED"
                }
            }}>
                Write to Us
        </Button>
    </div>
  )
}

export default Queries