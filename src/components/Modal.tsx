import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import LaptopIcon from '@mui/icons-material/Laptop';
import NorthIcon from '@mui/icons-material/North';
import styles from "../styles/modal.module.css"
import CodeIcon from '@mui/icons-material/Code';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { shuffle } from '../helper';
import { useState } from 'react';

const colors = ["#FF68A8", "#64CFF7", "#01a863", "#CA7CD8", "#3968CB"];
const newArr = shuffle(colors)

export default function BasicModal() {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '540px',
      width: '90%',
      bgcolor: 'background.paper',
      border: '5px solid' + newArr[0],
      padding: '2px',
      borderRadius: "16px",
    };

  return (
    <div className={styles.main}>
        <div className={styles.mainDiv} onClick={handleOpen} style={{ border: "5px solid" + newArr[0]}} >
            <div 
                style={{ padding: "6px" }}>
                <img className={styles.cardImg} 
                    src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png" 
                    alt="img" 
                    height={'198px'} 
                    width={'350px'} 
                    style={{ borderRadius: "5px" }} 
                />
            </div>
            <div style={{ backgroundColor: newArr[0], padding: "5px" }}>
                <div className={styles.bottomNav}>
                    <div className={styles.leftNav}>
                        <LaptopIcon 
                            className={styles.laptop} 
                            fontSize='large' 
                            sx={{ color: newArr[0] }} 
                        />
                        <CodeIcon 
                            fontSize='large' 
                            className={styles.code} 
                            sx={{ color: newArr[0] }} 
                        />
                    </div>
                    <AddIcon 
                        className={styles.addIcon} 
                        fontSize='large' 
                    />
                </div>
                <div className={styles.mainNav}>
                    <div 
                        style={{ width: "20%", height: "100px" }}>
                        <NorthIcon 
                            style={{ color: "white", fontSize: "60px" }} 
                        />
                    </div>
                    <div 
                        style={{ width: "10%", height: "100px" }}>
                    </div>
                <div className={styles.headingCard} 
                    style={{ width: "40%" }}>
                    <p>
                        IIITS HACKATHON
                    </p>
                </div>
            </div>
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
                onClick={handleClose} 
                className={styles.closeButton} 
                sx={{ "&:hover": { backgroundColor: "#EDEDED" }, position: "fixed", top: -20, right: 10, zIndex: 2000, backgroundColor: "white", borderRadius: "10px", border: "5px solid "+newArr[0] }}>
                    <CloseIcon style={{color: newArr[0]}} />
            </IconButton>
            <div className={styles.modalMain}>
                <div className={styles.topLevel}>
                    <p className={styles.modalHeading} 
                        style={{ color: newArr[0] }}>
                            IIITS HACKATHON
                    </p>
                </div>
                <div className={styles.modalImgDiv} 
                    style={{ border: "2px solid"+newArr[0] }}>
                        <img className={styles.modalImg} 
                            src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png" 
                            alt='img' 
                            width={'98%'} 
                            height={'auto'}>
                        </img>
                </div>
                <div className={styles.modalDescDiv}>
                        <p className={styles.desc} 
                        style={{color: newArr[0]}}>
                        Participate in this 48 hour hackathon based on the one of 10 themes! You can participate as a team or as an individual.
                        </p>
                </div>
                <hr className={styles.ruler} 
                    style={{ backgroundColor: newArr[0]}}>
                </hr>
                <div className={styles.modalDescDiv}>
                    <p className={styles.quote} 
                        style={{color: newArr[0]}}>
                            "It's harder to read code than to write it."
                    </p>
                </div>
                <Button 
                    variant="contained" 
                    sx={{ "&:hover": { opacity: 0.9 } }} 
                    className={styles.moreDetailsButton} 
                    style={{backgroundColor: newArr[0], marginBottom: "20px"}}>
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