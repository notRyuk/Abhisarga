import { useState } from "react";
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
    Button,
    styled
} from "@mui/material";
import styles from "../styles/modal.module.css"
import AddIcon from '@mui/icons-material/Add';
import LaptopIcon from '@mui/icons-material/Laptop';
import NorthIcon from '@mui/icons-material/North';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import SouthIcon from '@mui/icons-material/South';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const StyledBox = styled(Box)({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30vw',
    bgcolor: 'background.paper',
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
})

interface Props {
    style?: SxProps
    image?: string
    color: string
    title: string
}

export default function CustomCard({ style, image, color, title }: Props){
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (_: any, reason?: string) => {
        if (reason && reason == "backdropClick")
            return
        setOpen(false)
    }

    const icons = [NorthEastIcon, NorthIcon, NorthWestIcon, SouthEastIcon, SouthIcon, SouthWestIcon]
    const RandomIcon = icons[Math.floor(Math.random()*6)]
    return (
        <>
            <Card
                sx={{
                    maxWidth: 400,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "1.2rem",
                    bgcolor: color,
                    gap: "1rem",
                    padding: 0,
                    animation: "transform 0.2s",
                    "&:hover": {
                        scale: "1.02",
                        cursor: "pointer"
                    },
                    ...style,
                }}
                onClick={handleOpen}
            >
                <img
                    src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png"
                    alt="SOM"
                    style={{
                        marginTop: "1rem",
                        border: `6px solid white`,
                        width: "90%",
                        borderTopLeftRadius: "1.2rem",
                        borderTopRightRadius: "1.2rem",
                        backgroundColor: alpha(color, .5)
                    }}
                ></img>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <LaptopIcon 
                        sx={{ 
                            padding: ".4rem", 
                            color: "white", 
                            backgroundColor: alpha(color, 0.5), 
                            border: "5px solid white", 
                            borderRadius: ".5rem"
                        }}
                    />
                    <CodeIcon 
                        sx={{ 
                            padding: ".4rem", 
                            color: "white", 
                            backgroundColor: alpha(color, 0.5), 
                            border: "5px solid white", 
                            borderRadius: ".5rem"
                        }}
                    />
                    <AddIcon 
                        sx={{ 
                            padding: ".4rem", 
                            color: "white", 
                            backgroundColor: alpha(color, 0.5), 
                            border: "5px solid white", 
                            borderRadius: ".5rem"
                        }}
                    />
                </Container>
                <CardContent
                    sx={{
                        display: "flex",
                        gap: "2rem"
                    }}
                >
                    <RandomIcon sx={{color: "white"}}  fontSize={"large"}/>
                    <Typography variant="h5" fontFamily="Dosis" color="white">{title}</Typography>
                </CardContent>
            </Card>
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
                <StyledBox sx={{ border: '8px solid'+color }}>
                    <IconButton 
                        onClick={handleClose} 
                        className={styles.closeButton} 
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
                    <div className={styles.modalMain}>
                        <div className={styles.topLevel}>
                            <p className={styles.modalHeading} 
                                style={{ color: color }}>
                                    IIITS HACKATHON
                            </p>
                        </div>
                        <div className={styles.modalImgDiv} 
                            style={{ border: "2px solid"+color }}>
                                <img className={styles.modalImg} 
                                    src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png" 
                                    alt='img' 
                                    width={'98%'} 
                                    height={'auto'}>
                                </img>
                        </div>
                        <div className={styles.modalDescDiv}>
                            <p 
                                className={styles.desc} 
                                style={{
                                    color: color
                                }}
                            >
                                Participate in this 48 hour hackathon based on the one of 10 themes! You can participate as a team or as an individual.
                            </p>
                        </div>
                        <hr className={styles.ruler} 
                            style={{ backgroundColor: color}}>
                        </hr>
                        <div className={styles.modalDescDiv}>
                            <p 
                                className={styles.quote} 
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
                </StyledBox>
            </Modal>
        </>
    )
}