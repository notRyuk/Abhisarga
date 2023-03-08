import { useState, CSSProperties } from "react";
import styles from "../styles/aboutus.module.css";
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
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  sx?: CSSProperties;
  style?: SxProps;
  image?: string;
  color: string;
  vertical?: boolean;
}

const StyledBox = styled(Box)({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  bgcolor: "white",
  backgroundColor: "white",
  padding: "2px",
  borderRadius: "16px",
  "@media(max-width: 900px)": {
    width: "60vw",
  },
  "@media(max-width: 650px)": {
    width: "60vw",
  },
  "@media(max-width: 450px)": {
    width: "75vw",
  },
});

const AboutUs = ({ color }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (_: any, reason?: string) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  const handleSubmit = () => {
    // send query post req
  };

  return (
    <div
      className={styles.main}
      style={{
        color,
        borderColor: color,
      }}
    >
      <p
        className={styles.heading}
        style={{
          color,
          borderColor: color,
        }}
      >
        ABOUT US
      </p>
      <div
        className={styles.miniCard}
        style={{
          color,
          borderColor: color,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {/* <p className={styles.p}> */}
        Abhisarga is the annual techno-cultural fest of the Indian Institute of
        Information Technology Sri City, which is a premier engineering
        institute located in Andhra Pradesh, India. This three-day carnival
        consists of Technical and Non-technical events organized by the clubs of
        our institute, and the expected participants are from institutes like
        IITs, NITs, IIITs and other well-known institutions.
        {/* </p> */}
      </div>
      <Button
        variant="contained"
        sx={{
          width: "90%",
          fontFamily: "ArcadeClassic",
          fontSize: "28px",
          backgroundColor: color,
          "&:hover": {
            backgroundColor: color,
            transform: "scale(1.01)",
          },
        }}
        onClick={handleOpen}
      >
        Learn More
      </Button>
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
        <StyledBox sx={{ border: "8px solid" + color }}>
          <IconButton
            onClick={handleClose}
            sx={{
              "&:hover": {
                backgroundColor: "#EDEDED",
              },
              position: "fixed",
              top: -20,
              right: 10,
              zIndex: 2000,
              backgroundColor: "white",
              borderRadius: "10px",
              border: "5px solid " + color,
            }}
          >
            <CloseIcon style={{ color: color }} />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: color,
                  fontFamily: "Dosis",
                  fontSize: "36px",
                  fontWeight: "500",
                }}
              >
                WHAT IS ABHISARGA?
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
                textAlign: "left",
                fontFamily: "Dosis",
                fontSize: "24px",
                letterSpacing: "1px",
              }}
            >
              <></>
            </div>
          </div>
        </StyledBox>
      </Modal>
    </div>
  );
};

export default AboutUs;
