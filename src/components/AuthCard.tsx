import { CSSProperties } from 'react'
import styles from '../styles/authcard.module.css'
import {  
    SxProps,
    Button,
    styled
} from "@mui/material";

const StyledButton = styled(Button)({
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
})

interface Props {
    sx?: CSSProperties
    color?: string
}

const AuthCard = ({ sx, color }: Props) => {

  return (
    <div className={styles.main} style={sx}>
        <StyledButton 
            variant="outlined"
            className={styles.login}
        >
            LOGIN
        </StyledButton>
        <StyledButton 
            variant="outlined"
            className={styles.signup}
        >
            SIGN UP
        </StyledButton>
    </div>
  )
}

export default AuthCard