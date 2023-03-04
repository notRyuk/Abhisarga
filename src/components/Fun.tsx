import React, { CSSProperties } from 'react'
import styles from '../styles/prizes.module.css'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

interface Props {
    sx?: CSSProperties
}

const Prizes = ({ sx }: Props) => {
  return (
    <div className={styles.main} style={sx}>
          {/* <IconButton>
            <AddIcon style={{color: "white", top: 0, right: 0, position: "fixed"}} />
          </IconButton> */}
        <div className={styles.black} style={{ width: "40%", padding: "2rem", fontSize: "1.3rem" }}>
            DON'T FORGET TO HAVE FUN!
        </div>
    </div>
  )
}

export default Prizes