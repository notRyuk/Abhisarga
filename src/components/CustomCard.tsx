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
import { Event } from "../helper";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30vw',
    bgcolor: 'white',
    backgroundColor: "white",
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
    }
})

interface Props {
    style?: SxProps
    image?: string
    color: string
    event: Event
    vertical?: boolean
}

export default function CustomCard({ style, image, color, event, vertical }: Props) {
    const navigate = useNavigate()
    const reverse = vertical?!vertical:Math.random()>0.5
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (_: any, reason?: string) => {
        if (reason && reason === "backdropClick")
            return
        setOpen(false)
    }

    const icons = [
        NorthEastIcon, NorthIcon, NorthWestIcon, 
        SouthEastIcon, SouthIcon, SouthWestIcon
    ]
    const RandomIcon = icons[Math.floor(Math.random()*6)]
    return (
        <>
            <Card
                sx={{
                    maxWidth: 400,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: reverse?"column-reverse":"column",
                    borderRadius: "1.2rem",
                    bgcolor: color,
                    gap: "1rem",
                    paddingBottom: reverse?1:0,
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
                    src={event.banner || "https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png"}
                    alt="SOM"
                    style={{
                        marginTop: "1rem",
                        border: `6px solid white`,
                        width: "90%",
                        borderTopLeftRadius: !reverse?"1.2rem":0,
                        borderTopRightRadius: !reverse?"1.2rem":0,
                        borderBottomLeftRadius: reverse?"1.2rem":0,
                        borderBottomRightRadius: reverse?"1.2rem":0,
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
                    <Typography variant="h5" fontFamily="Dosis" color="white">{event.name || ""}</Typography>
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
                    background: "none",
                }}
            >
                <StyledBox sx={{ border: '8px solid'+color }}>
                    <IconButton 
                        onClick={handleClose}
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
                            border: "5px solid "+color,
                            maxHeight: "80%"
                        }}
                    >
                        <CloseIcon style={{color: color}} />
                    </IconButton>
                    <div 
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "2%",
                            textAlign: "center"
                        }}
                    >
                        <div 
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                        >
                            <p
                                style={{ 
                                    color: color,
                                    fontFamily: "ArcadeClassic, sans-serif",
                                    fontSize: 36,
                                    fontWeight: 500
                                }}
                            >
                                {event.name?event.name:"IIITS HACKATHON"} 
                            </p>
                        </div>
                        <div  
                            style={{ 
                                border: "2px solid"+color,
                                width: "90%",
                                borderRadius: 16,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingTop: 5,
                                paddingBottom: 5
                            }}
                        >
                            <img 
                                style={{
                                    borderRadius: 16
                                }}
                                src={ event.banner || "https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png"}
                                alt='Modal Image' 
                                width='98%' 
                                height='auto'
                            />
                        </div>
                        <div 
                            style={{
                                width: "90%",
                                marginTop: "3%",
                                alignSelf: "center",
                                justifySelf: "center",
                                textAlign: "center",
                                maxHeight: "100px",
                                overflowY: "scroll",
                                scrollbarWidth: "auto",
                                scrollbarColor: "black",
                                scrollBehavior: "auto"
                            }}
                        >
                            <p 
                                style={{
                                    color: color,
                                    fontWeight: 400,
                                    letterSpacing: 0.3,
                                    fontSize: 16,
                                    maxHeight: "100px",
                                    overflowY: "scroll",
                                    scrollbarWidth: "auto",
                                    scrollbarColor: "black",
                                    scrollBehavior: "auto"
                                }}
                            >
                                {event.description || ""}
                            </p>
                        </div>
                        <hr
                            style={{ 
                                backgroundColor: color,
                                borderStyle: "dotted",
                                borderWidth: 1,
                                width: "90%",
                                letterSpacing: 10
                            }}
                        />
                        <div
                            style={{
                                width: "90%",
                                marginTop: "3%",
                                alignSelf: "center",
                                justifySelf: "center",
                                textAlign: "center"
                            }}
                        >
                            <p
                                style={{
                                    color: color,
                                    marginTop: "-1%",
                                    fontSize: 20,
                                    fontWeight: "bold"
                                }}
                            >
                                {`" Organized by ${event.club}"` || ""}
                            </p>
                        </div>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                "&:hover": { 
                                    opacity: 0.9,
                                    backgroundColor: color
                                }, 
                                textAlign: "center",
                                backgroundColor: color, 
                                marginBottom: "20px",
                                display: "flex",
                                flexDirection: "row",
                                width: "90%"
                            }}
                            onClick={() => navigate(`/event/${event.getUrl()}`)}
                        >
                            More Details 
                            <ArrowRightAltIcon 
                                fontSize='large'
                                style={{
                                    marginLeft: "20px"
                                }} 
                            />
                        </Button>
                    </div>
                </StyledBox>
            </Modal>
        </>
    )
}