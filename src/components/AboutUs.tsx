import { useState, CSSProperties, Dispatch, SetStateAction } from "react";
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
  setIsOpen: Dispatch<SetStateAction<boolean>>
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

const AboutUs = ({ color, setIsOpen }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(true)
    setOpen(true)
  };
  const handleClose = (_: any, reason?: string) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
    setIsOpen(false)
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
                fontSize: "17px",
                letterSpacing: "1px",
                overflow: "scroll",
                maxHeight: "350px"
              }}
            >
              <p>
              Abhisarga is the annual techno-cultural fest of the Indian Institute of Information Technology Sri City, which is a premier engineering institute located in Andhra Pradesh, India. This three-day carnival consists of Technical and Non-technical events organized by the clubs of our institute, and the expected participants are from institutes like IITs, NITs, IIITs and other well-known institutions.
              </p>
              <p>The festival includes a variety of events, competitions, workshops, and cultural programs that provide a platform for students to showcase their skills and talents in various fields such as science, technology, arts, and literature. The festival aims to encourage creativity, innovation, and teamwork among the students and to promote a spirit of healthy competition.</p>
              <p>The technical events include coding competitions, electronics, hackathons and CTF competitions. The cultural events include dance, music, drama performances, MUN and wall painting. The festival also hosts a number of workshops, seminars, and talks by experts in various fields to provide students with an opportunity to learn and gain insights into emerging trends and technologies.</p>
              {/* <p>Abhisarga also features a number of fun events such as treasure hunts, gaming, speed typing, which provide a refreshing break from the intense competition and academic activities. The festival typically concludes with a grand gala night and a closing ceremony, which includes prize distributions and cultural performances.</p>
              <p>Overall, Abhisarga is an exciting and vibrant festival that brings together students from different parts of the country to participate in a range of events and activities, fostering a sense of camaraderie, innovation, and excellence.</p> */}
            </div>
          </div>
        </StyledBox>
      </Modal>
    </div>
  );
};

export default AboutUs;
