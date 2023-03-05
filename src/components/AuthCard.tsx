import React, { CSSProperties, useState } from 'react'
import styles from '../styles/authcard.module.css'
import { 
    Card, 
    SxProps, 
    Container, 
    Typography, 
    CardContent, 
    alpha,
    Modal,
    Box,
    IconButton,
    Button
} from "@mui/material";
import TextField from '@mui/material/TextField';
import styles2 from "../styles/modal.module.css"
// import AddIcon from '@mui/icons-material/Add';
// import LaptopIcon from '@mui/icons-material/Laptop';
// import NorthIcon from '@mui/icons-material/North';
// import NorthEastIcon from '@mui/icons-material/NorthEast';
// import NorthWestIcon from '@mui/icons-material/NorthWest';
// import SouthIcon from '@mui/icons-material/South';
// import SouthEastIcon from '@mui/icons-material/SouthEast';
// import SouthWestIcon from '@mui/icons-material/SouthWest';
// import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Label } from '@mui/icons-material';

interface Props {
    sx?: CSSProperties
    style?: SxProps
    image?: string
    color: string
}

const AuthCard = ({ sx, style, image, color }: Props) => {

    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        bgcolor: 'background.paper',
        border: '8px solid' + color,
        padding: '2px',
        borderRadius: "16px",
        "@media(max-width: 900px)": {
          width: "60vw"
        },
        "@media(max-width: 650px)": {
          width: "60vw"
        },
        "@media(max-width: 450px)": {
          width: "75vw"
        },
      };

        const [open, setOpen] = useState<boolean>(false);
        const [heading, setHeading] = useState<string>("LOGIN")
        const handleOpen = () => setOpen(true);
        const handleClose = (event: any, reason?: string) => {
            if (reason && reason == "backdropClick")
                return
            setOpen(false)
        }
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
            onClick={() => {
                handleOpen()
                setHeading("LOGIN")
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
            onClick={() => {
                handleOpen()
                setHeading("SIGN UP")
            }}
            sx={{
                "&:hover": {
                    backgroundColor: "#EDEDED"
                }
            }}>
                SIGN UP
        </Button>
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    border: "none",
                    outline: "none",
                    background: "none"
                }}
            >
                <Box sx={modalStyle}>
                    <IconButton 
                        onClick={handleClose} 
                        className={styles2.closeButton} 
                        sx={{ 
                            "&:hover": {
                                backgroundColor: "#EDEDED" 
                            }, 
                            position: "fixed", 
                            top: -20, 
                            right: 10, 
                            zIndex: 2000, 
                            backgroundColor: "white", 
                            borderRadius: "10px", 
                            border: "5px solid "+color 
                        }}
                    >
                        <CloseIcon style={{color: color}} />
                    </IconButton>
                    <div className={styles2.modalMain}>
                        <div className={styles2.topLevel}>
                            <p className={styles2.modalHeading} 
                                style={{ color: color }}>
                                    {heading}
                            </p>
                        </div>
                        <div className={styles2.loginSignup}>
                                {heading === "LOGIN" ? 
                                <>
                                    <p>EMAIL</p>
                                    <input type={'email'} id="outlined-basic" />
                                    <p>PASSWORD</p>
                                    <input type={'password'} id="outlined-basic" />
                                </>    
                                :
                                <>
                                    <p>EMAIL</p>
                                    <input type={'email'} id="outlined-basic" />   
                                </>
                                }
                        </div>
                        <div className={styles2.modalDescDiv}>
                            <span>
                                <p 
                                    className={styles2.desc} 
                                    style={{
                                        color: color
                                    }}
                                >
                                    {heading === "LOGIN" ? 
                                    <>
                                        <p>
                                            Don't have an account yet? <button onClick={() => setHeading("SIGNUP")}>SIGN UP</button> 
                                        </p>
                                        
                                    </>    
                                    :
                                    <>
                                        <p>
                                            Already have an account? <button onClick={() => setHeading("LOGIN")}>LOGIN</button>
                                        </p> 
                                    </>
                                    }
                                </p>
                            </span>
                        </div>
                        <hr className={styles2.ruler} 
                            style={{ backgroundColor: color}}>
                        </hr>
                        <div className={styles2.modalDescDiv}>
                            <p 
                                className={styles2.quote} 
                                style={{color: color}}
                            >
                                "It's harder to read code than to write it."
                            </p>
                        </div>
                        <Button 
                            variant="contained" 
                            sx={{ "&:hover": { opacity: 0.9 }, textAlign: "center" }} 
                            className={styles.moreDetailsButton} 
                            style={{backgroundColor: color, marginBottom: "20px"}}>
                                More Details 
                            <ArrowRightAltIcon 
                                fontSize='large'
                                style={{marginLeft: "20px"}} 
                            /> 
                        </Button>
                    </div>
                </Box>
            </Modal>
    </div>
  )
}

export default AuthCard