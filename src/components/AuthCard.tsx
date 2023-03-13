import { ChangeEvent, CSSProperties, SetStateAction, useState, Dispatch } from "react";
import styles from "../styles/authcard.module.css";
import { SxProps, Button, IconButton, Modal, Box, Typography } from "@mui/material";
import styles2 from "../styles/modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { base, encrypt, Session } from "../helper";

enum Year {
  UG1 = "UG1",
  UG2 = "UG2",
  UG3 = "UG3",
  UG4 = "UG4",
}

interface Props {
  sx?: CSSProperties;
  style?: SxProps;
  image?: string;
  color: string;
  user: Session|null
  setUser: Dispatch<SetStateAction<Session>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  collegeName: string;
  year?: Year;
  address?: string;
}

const AuthCard = ({ sx, style, image, color, user, setUser, setIsOpen }: Props) => {
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30vw",
    bgcolor: "background.paper",
    border: "8px solid black",
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
  };

  const [open, setOpen] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>("LOGIN");
  const [page, setPage] = useState<Number>(1);

  const handleOpen = () => {
    setOpen(true) 
    setIsOpen(true)
  }
  const handleClose = (_: any, reason?: string) => {
      if (reason && reason === "backdropClick")
          return
      setOpen(false)
      setIsOpen(false)
  }

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [formData, setFormData] = useState<User | null>({
    name: "",
    email: "",
    phone: "",
    password: "",
    collegeName: "",
    address: "",
    year: Year.UG1
  });

  const handleChangeFormData = (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  };

  const handleSubmit = async () => {
    if (heading === "LOGIN") {
      const res = await axios.post(base + "user/login", {
        email: email,
        password: encrypt(password),
      });
      if(res.status === 200) {
        localStorage.setItem("session", JSON.stringify(res.data.session))
        setUser(res.data.session)
        setEmail("")
        setPassword("")
        setOpen(false)
      }
    } else {
      if (page === 1) {
        setPage(2);
      } else {
        const res = await axios.post(base + "user/register", {...formData, password: encrypt(formData.password)});
        localStorage.setItem("session", JSON.stringify(res.data.session))
        setUser(res.data.session)
        setOpen(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          collegeName: "",
          address: "",
          year: Year.UG1
        })
      }
    }
  };
  return (
    <div
      style={{
        borderLeft: "9px",
        borderRight: "12px",
        borderBottom: "12px",
        borderTop: "9px",
        padding: "10px",
        borderColor: "black",
        borderStyle: "solid",
        width: "19%",
        minWidth: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Dosis",
        animation: "transform 0.2s",
        borderRadius: "15px",
        backgroundColor: "white",
        ...sx,
      }}
    >
      {user?(
        <>
          <p 
            style={{
              fontSize: "30px",
              textAlign: "center"
            }}
        >
          WELCOME! {user.username}
          </p>
        </>
      ):(
        <>
          <Button
            variant="outlined"
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
              fontSize: "30px",
              marginBottom: "10px",
              animation: "transform 0.2s",
            }}
            onClick={() => {
              handleOpen();
              setHeading("LOGIN");
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#EDEDED",
                scale: "1.02",
              },
            }}
          >
            LOGIN
          </Button>
          <Button
            variant="outlined"
            style={{
              fontFamily: "ArcadeClassic",
              color: "black",
              borderTop: "3px solid black",
              borderLeft: "3px solid black",
              borderRight: "6px solid black",
              borderBottom: "6px solid black",
              width: "80%",
              padding: "1rem",
              marginBottom: "15px",
              fontSize: "30px",
              marginTop: "10px",
              animation: "transform 0.2s",
            }}
            onClick={() => {
              handleOpen();
              setHeading("SIGN UP");
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#EDEDED",
                scale: "1.02",
              },
            }}
          >
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
              background: "none",
            }}
          >
            <Box sx={modalStyle}>
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
                      fontFamily: "ArcadeClassic",
                      fontSize: "36px",
                      fontWeight: "500",
                    }}
                  >
                    {heading}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "70%",
                    // fontFamily: 'ArcadeClassic',
                    textAlign: "left",
                    fontFamily: "Dosis",
                    fontSize: "24px",
                    letterSpacing: "1px",
                  }}
                >
                  {heading === "LOGIN" ? (
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
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <p style={{ marginBottom: "5px" }}>PASSWORD</p>
                      <input
                        style={{
                          height: "40px",
                          fontSize: "18px",
                          paddingLeft: "5px",
                          paddingRight: "5px",
                          border: "solid black",
                          borderWidth: "3px 6px 6px 3px",
                          borderRadius: "2px",
                        }}
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      {page === 1 ? (
                        <>
                          <p style={{ marginBottom: "5px" }}>NAME</p>
                          <input
                            style={{
                              height: "40px",
                              fontSize: "18px",
                              paddingLeft: "5px",
                              paddingRight: "5px",
                              border: "solid black",
                              borderWidth: "3px 6px 6px 3px",
                              borderRadius: "2px",
                            }}
                            name="name"
                            type={"text"}
                            value={formData.name}
                            onChange={handleChangeFormData}
                          />
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
                            name="email"
                            
                            value={formData.email}
                            onChange={handleChangeFormData}
                          />
                          <p style={{ marginBottom: "5px" }}>PASSWORD</p>
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
                            type={"password"}
                            name="password"
                            
                            value={formData.password}
                            onChange={handleChangeFormData}
                          />
                        </>
                      ) : (
                        <>
                          <p style={{ marginBottom: "5px" }}>PHONE NUMBER</p>
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
                            name="phone"
                            
                            value={formData.phone}
                            onChange={handleChangeFormData}
                          />

                          <p style={{ marginBottom: "5px" }}>COLLEGE</p>
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
                            name="collegeName"
                            type={"text"}
                            
                            value={formData.collegeName}
                            onChange={handleChangeFormData}
                          />

                          <p style={{ marginBottom: "5px" }}>YEAR</p>
                          {/* <input
                            style={{
                              height: "40px",
                              paddingLeft: "5px",
                              fontSize: "18px",
                              paddingRight: "5px",
                              border: "solid black",
                              borderWidth: "3px 6px 6px 3px",
                              borderRadius: "2px",
                            }}
                            name="address"
                          /> */}
                          <select
                            style={{
                              height: "40px",
                              paddingLeft: "5px",
                              fontSize: "18px",
                              paddingRight: "5px",
                              border: "solid black",
                              borderWidth: "3px 6px 6px 3px",
                              borderRadius: "2px",
                            }}
                            name="year"
                            onChange={handleChangeFormData}
                          >
                            <option value={""}>Select your year</option>
                            <option value={Year.UG1}>{Year.UG1}</option>
                            <option value={Year.UG2}>{Year.UG2}</option>
                            <option value={Year.UG3}>{Year.UG3}</option>
                            <option value={Year.UG4}>{Year.UG4}</option>
                          </select>

                          <p style={{ marginBottom: "5px" }}>ADDRESS</p>
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
                            rows={5}
                            maxLength={150}
                            name="address"
                            
                            value={formData.address}
                            onChange={handleChangeFormData}
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className={styles2.modalDescDiv}>
                  <span>
                    <p
                      className={styles2.desc}
                      style={{
                        color: color,
                      }}
                    >
                      {heading === "LOGIN" ? (
                        <>
                          <p>
                            Don't have an account yet?
                            <Button
                              onClick={() => setHeading("SIGNUP")}
                              style={{
                                cursor: "pointer",
                                color: "#3968CB",
                                padding: "2px",
                                marginLeft: "10px",
                                borderBottom: "2px solid black",
                              }}
                            >
                              SIGN UP
                            </Button>
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            Already have an account?
                            <Button
                              onClick={() => setHeading("LOGIN")}
                              style={{
                                cursor: "pointer",
                                color: "#3968CB",
                                padding: "2px",
                                marginLeft: "10px",
                                borderBottom: "2px solid black",
                              }}
                            >
                              LOGIN
                            </Button>
                          </p>
                        </>
                      )}
                    </p>
                  </span>
                </div>
                {heading === "LOGIN" && (
                  <Button
                    style={{
                      cursor: "pointer",
                      color: "#3968CB",
                      padding: "2px",
                      marginLeft: "10px",
                      borderBottom: "2px solid black",
                    }}
                  >
                    FORGOT PASSWORD
                  </Button>
                )}
                <hr
                  className={styles2.ruler}
                  style={{ backgroundColor: color }}
                ></hr>
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
                  }}
                >
                  {heading === "LOGIN" ? heading : page === 1 ? "NEXT" : heading}
                </Button>
              </div>
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

export default AuthCard;
