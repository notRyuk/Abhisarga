import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import LaptopIcon from '@mui/icons-material/Laptop';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import styles from "../styles/modal.module.css"
import CodeIcon from '@mui/icons-material/Code';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { shuffle } from '../helper';
import { useState } from 'react';

const colors = ["#FF68A8", "#64CFF7", "#a9b436", "#a9b436", "#3968CB"];
const newArr = shuffle(colors)

export default function TechnicalEvents() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (event: any, reason: any) => {
        if (reason && reason == "backdropClick")
            return
        setOpen(false)
    } 

    const handleClick = (e, r) => handleClose(e, r)
    
    
    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '540px',
      width: '90%',
      bgcolor: 'background.paper',
      border: '8px solid' + "#a9b436",
      padding: '2px',
      borderRadius: "16px",
    };

  return (
    <div className={styles.main}>
        <div className={styles.mainDiv} onClick={handleOpen} style={{ border: "5px solid" + "#a9b436"}} >
            <div style={{ backgroundColor: "#a9b436", padding: "5px" }}>
                <div className={styles.mainNav}>
                    <div 
                        style={{ width: "20%", height: "100px" }}>
                        <SouthEastIcon 
                            style={{ color: "white", fontSize: "60px" }} 
                        />
                    </div>
                    <div 
                        style={{ width: "10%", height: "100px" }}>
                    </div>
                    <div className={styles.headingCard} 
                    style={{ width: "40%" }}>
                    <p>
                        TECHNICAL EVENTS
                    </p>
                    </div>
                </div>
                <div className={styles.bottomNav}>
                    <div className={styles.leftNav}>
                        <LaptopIcon 
                            className={styles.laptop} 
                            fontSize='large' 
                            sx={{ color: "#a9b436" }} 
                        />
                        <CodeIcon 
                            fontSize='large' 
                            className={styles.code} 
                            sx={{ color: "#a9b436" }} 
                        />
                    </div>
                    <AddIcon 
                        className={styles.addIcon} 
                        fontSize='large' 
                    />
                </div>
        </div>
        <div 
            style={{ padding: "6px" }}>
            <img className={styles.cardImg} 
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388" 
                alt="img" 
                height={'198px'} 
                width={'350px'} 
                style={{ borderRadius: "5px" }} 
            />
        </div>
    </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
            border: "none",
            outline: "none"
        }}
      >
        <Box sx={style}>
            <IconButton 
                onClick={(e, r) => handleClick(e, r)} 
                className={styles.closeButton} 
                sx={{ "&:hover": { backgroundColor: "#EDEDED" }, position: "fixed", top: -20, right: 10, zIndex: 2000, backgroundColor: "white", borderRadius: "10px", border: "5px solid "+"#a9b436" }}>
                    <CloseIcon style={{color: "#a9b436"}} />
            </IconButton>
            <div className={styles.modalMain}>
                <div className={styles.topLevel}>
                    <p className={styles.modalHeading} 
                        style={{ color: "#a9b436" }}>
                            TECHNICAL EVENTS
                    </p>
                </div>
                <div className={styles.modalImgDiv} 
                    style={{ border: "2px solid"+"#a9b436" }}>
                        <img className={styles.modalImg} 
                            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388" 
                            alt='img' 
                            width={'98%'} 
                            height={'auto'}>
                        </img>
                </div>
                <div className={styles.modalDescDiv}>
                        <p className={styles.desc} 
                        style={{color: "#a9b436"}}>
                             These events aim to develop various skills of students in Co-Curricular activities and to expose them to the current trends in the industry.
                        </p>
                </div>
                <hr className={styles.ruler} 
                    style={{ backgroundColor: "#a9b436"}}>
                </hr>
                <div className={styles.modalDescDiv}>
                    <p className={styles.quote} 
                        style={{color: "#a9b436"}}>
                            "Technology like art is a soaring exercise of the human imagination."
                    </p>
                </div>
                <Button 
                    variant="contained" 
                    sx={{ "&:hover": { opacity: 0.9 } }} 
                    className={styles.moreDetailsButton} 
                    style={{backgroundColor: "#a9b436", marginBottom: "20px"}}>
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
  );
}