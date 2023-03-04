    import Box from '@mui/material/Box';
    import Modal from '@mui/material/Modal';
    import AddIcon from '@mui/icons-material/Add';
    import LaptopIcon from '@mui/icons-material/Laptop';
    import SouthIcon from '@mui/icons-material/South';
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

    export default function ReverseModal() {
        const [open, setOpen] = useState<boolean>(false);
        const handleOpen = () => setOpen(true);
        const handleClose = (event: any, reason: any) => {
            if (reason && reason == "backdropClick")
                return
            setOpen(false)
        } 
        
        
        const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '540px',
        width: '90%',
        bgcolor: 'background.paper',
        border: '8px solid' + "#CA7CD8",
        padding: '2px',
        borderRadius: "16px",
        };

    return (
        <div className={styles.main}>
            <div className={styles.mainDiv} onClick={handleOpen} style={{ border: "5px solid" + "#CA7CD8"}} >
                <div style={{ backgroundColor: "#CA7CD8", padding: "5px" }}>
                    <div className={styles.mainNav}>
                        <div 
                            style={{ width: "20%", height: "100px" }}>
                            <SouthIcon 
                                style={{ color: "white", fontSize: "60px" }} 
                            />
                        </div>
                        <div 
                            style={{ width: "10%", height: "100px" }}>
                        </div>
                        <div className={styles.headingCard} 
                        style={{ width: "40%" }}>
                        <p>
                            ACCOMODATIONS
                        </p>
                        </div>
                    </div>
                    <div className={styles.bottomNav}>
                        <div className={styles.leftNav}>
                            <LaptopIcon 
                                className={styles.laptop} 
                                fontSize='large' 
                                sx={{ color: "#CA7CD8" }} 
                            />
                            <CodeIcon 
                                fontSize='large' 
                                className={styles.code} 
                                sx={{ color: "#CA7CD8" }} 
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
                    src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/201710237.jpg?k=1d576836de5233cd8061a5eab02e9b7b8a241286cd9ec9d1c7e01d158e82da88&o=" 
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
                    onClick={handleClose} 
                    className={styles.closeButton} 
                    sx={{ "&:hover": { backgroundColor: "#EDEDED" }, position: "fixed", top: -20, right: 10, zIndex: 2000, backgroundColor: "white", borderRadius: "10px", border: "5px solid "+"#CA7CD8" }}>
                        <CloseIcon style={{color: "#CA7CD8"}} />
                </IconButton>
                <div className={styles.modalMain}>
                    <div className={styles.topLevel}>
                        <p className={styles.modalHeading} 
                            style={{ color: "#CA7CD8" }}>
                                ACCOMODATION
                        </p>
                    </div>
                    <div className={styles.modalImgDiv} 
                        style={{ border: "2px solid"+"#CA7CD8" }}>
                            <img className={styles.modalImg} 
                                src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/201710237.jpg?k=1d576836de5233cd8061a5eab02e9b7b8a241286cd9ec9d1c7e01d158e82da88&o=" 
                                alt='img' 
                                width={'98%'} 
                                height={'auto'}>
                            </img>
                    </div>
                    <div className={styles.modalDescDiv}>
                            <p className={styles.desc} 
                            style={{color: "#CA7CD8"}}>
                                We invite participants across the country, and provide accomodation to every participant at good hotels.
                            </p>
                    </div>
                    <hr className={styles.ruler} 
                        style={{ backgroundColor: "#CA7CD8"}}>
                    </hr>
                    <div className={styles.modalDescDiv}>
                        <p className={styles.quote} 
                            style={{color: "#CA7CD8"}}>
                                "We're a provider of experiences, not strictly accomodation."
                        </p>
                    </div>
                    <Button 
                        variant="contained" 
                        sx={{ "&:hover": { opacity: 0.9 } }} 
                        className={styles.moreDetailsButton} 
                        style={{backgroundColor: "#CA7CD8", marginBottom: "20px"}}>
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