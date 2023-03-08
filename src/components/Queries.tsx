import React, { useState, CSSProperties } from "react";
import styles from "../styles/query.module.css";
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
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface Props {
  sx?: CSSProperties;
  style?: SxProps;
  image?: string;
  color: string;
  vertical?: boolean;
  email: string;
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

const Queries = ({ style, sx, image, color, vertical, email }: Props) => {
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
    <div className={styles.main} style={sx}>
      <p className={styles.heading}>QUERIES</p>
      <Button
        variant="outlined"
        className={styles.login}
        style={{
          color: "#CA7CD8",
          borderTop: "3px solid #CA7CD8",
          borderLeft: "3px solid #CA7CD8",
          borderRight: "6px solid #CA7CD8",
          borderBottom: "6px solid #CA7CD8",
          borderRadius: "10px",
          width: "70%",
          marginTop: "15px",
          fontWeight: "500",
        }}
        sx={{
          "&:hover": {
            backgroundColor: "#EDEDED",
          },
        }}
        onClick={handleOpen}
      >
        WRITE TO US
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
                HOW CAN WE HELP YOU?
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
              {email === "" && (
                <>
                  <p style={{ marginBottom: "5px" }}>EMAIL</p>
                  <input
                    style={{
                      height: "40px",
                      paddingLeft: "5px",
                      fontSize: "18px",
                      paddingRight: "5px",
                      border: "solid black",
                      borderWidth: "3px 6px 6px 3px",
                      borderRadius: "2px",
                    }}
                    type={"email"}
                    id="outlined-basic"
                  />
                  <p style={{ marginBottom: "5px" }}>QUERY TITLE</p>
                  <input
                    style={{
                      height: "40px",
                      paddingLeft: "5px",
                      fontSize: "18px",
                      paddingRight: "5px",
                      border: "solid black",
                      borderWidth: "3px 6px 6px 3px",
                      borderRadius: "2px",
                    }}
                    type={"text"}
                    id="outlined-basic"
                  />
                  <p style={{ marginBottom: "5px" }}>QUERY DESCRIPTION</p>
                  <textarea
                    style={{
                      height: "100px",
                      paddingLeft: "5px",
                      fontSize: "18px",
                      paddingRight: "5px",
                      border: "solid black",
                      borderWidth: "3px 6px 6px 3px",
                      borderRadius: "2px",
                    }}
                    id="outlined-basic"
                    rows={5}
                    maxLength={150}
                  />
                </>
              )}
            </div>
            <Button
              variant="contained"
              sx={{ "&:hover": { opacity: 0.9 }, textAlign: "center" }}
              className={styles.moreDetailsButton}
              onClick={handleSubmit}
              style={{
                backgroundColor: color,
                marginBottom: "20px",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                marginTop: "2rem"
              }}
            >
              SEND QUERY
            </Button>
          </div>
        </StyledBox>
      </Modal>
    </div>
  );
};

export default Queries;
