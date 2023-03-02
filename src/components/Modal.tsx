import AddIcon from '@mui/icons-material/Add';
import LaptopIcon from '@mui/icons-material/Laptop';
import NorthIcon from '@mui/icons-material/North';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { shuffle } from '../helper';
import styles from "../styles/modal.module.css";

const colors = shuffle(["#FF68A8", "#64CFF7", "#F7E752", "#CA7CD8", "#3968CB"])
export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.main}>
        <div className={styles.mainDiv} onClick={handleOpen} style={{ border: "5px solid" + colors[0]}} >
          <div style={{ padding: "7px" }}>
              <img 
                className={styles.cardImg} 
                src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png" 
                alt="img" 
                height={'200px'} 
                width={'356px'} 
                style={{ 
                  borderRadius: "5px" 
                }} 
              />
          </div>
          <div style={{ backgroundColor: colors[0], padding: "5px" }}>
              <div className={styles.bottomNav}>
                <LaptopIcon className={styles.laptop} fontSize='large' sx={{ color: colors[0] }} />
                <AddIcon className={styles.addIcon} fontSize='large' />
              </div>
              <div className={styles.mainNav}>
                  <div style={{ width: "20%", height: "100px" }}>
                    <NorthIcon style={{ color: "white", fontSize: "60px" }} />
                  </div>
              <div style={{ width: "80%" }}>
                <Typography 
                  style={{ 
                    fontWeight: "400", 
                    letterSpacing: "1.5px", 
                    fontSize: "26px", 
                    color: "white", 
                    fontFamily: 'DM Serif Display' 
                  }}
                >
                  IIITS Hackathon
                </Typography>
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
        <Box sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '540px',
            width: '100%',
            bgcolor: 'background.paper',
            border: '5px solid' + colors[0],
            boxShadow: 24,
            padding: '2px',
            borderRadius: "10px",
          }}
        >
          <div className={styles.modalMain}>
              <p className={styles.modalHeading} style={{ color: colors[0] }}>IIITS Hackathon</p>
              <img 
                className={styles.modalImg} 
                src="https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png" 
                alt='img' 
                width={'96%'} 
                height={'auto'} 
                style={{ 
                  border: "2px solid"+colors[0] 
                }} 
              />
          </div>
        </Box>
      </Modal>
    </div>
  );
}