import React, { CSSProperties } from 'react'
import styles from '../styles/prizes.module.css'
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { East } from '@mui/icons-material';

interface Props {
    sx?: CSSProperties
}

const Prizes = ({ sx }: Props) => {
  return (
    <div className={styles.main} style={sx}>
          <East sx={{ color: "white", fontSize: "48px" }} />
        <div className={styles.black} style={{ width: "40%", padding: "2rem", fontSize: "1.3rem" }}>
            DON'T FORGET TO HAVE FUN!
        </div>
    </div>
  )
}

export default Prizes